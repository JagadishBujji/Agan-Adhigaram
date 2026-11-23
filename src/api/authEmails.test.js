import axios from "axios";
import {
  sendEmailVerification,
  sendPasswordResetEmail,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import {
  requestEmailChange,
  requestEmailVerification,
  requestPasswordReset,
} from "./authEmails";

// a factory: the real axios package is ESM, which this jest setup cannot load
jest.mock("axios", () => ({ __esModule: true, default: { post: jest.fn() } }));
jest.mock("firebase/auth", () => ({
  sendEmailVerification: jest.fn(() => Promise.resolve()),
  sendPasswordResetEmail: jest.fn(() => Promise.resolve()),
  verifyBeforeUpdateEmail: jest.fn(() => Promise.resolve()),
}));
jest.mock("../services/firebase", () => ({
  auth: {},
  FUNCTIONS_BASE_URL: "https://functions.test",
}));

const serverError = (status, code) =>
  Object.assign(new Error("request failed"), {
    response: { status, data: { code } },
  });

// CRA resets mock implementations before each test (resetMocks), so they are set here
const user = {};

beforeEach(() => {
  user.getIdToken = () => Promise.resolve("token-1");
  sendEmailVerification.mockResolvedValue();
  sendPasswordResetEmail.mockResolvedValue();
  verifyBeforeUpdateEmail.mockResolvedValue();
});

describe("requestPasswordReset", () => {
  it("asks our server to send the branded mail", async () => {
    axios.post.mockResolvedValue({ data: { success: true } });
    await requestPasswordReset("a@b.com");
    expect(axios.post).toHaveBeenCalledWith(
      "https://functions.test/authEmails/password-reset",
      expect.objectContaining({ email: "a@b.com" }),
      expect.anything()
    );
    expect(sendPasswordResetEmail).not.toHaveBeenCalled();
  });

  it("uses the Firebase mail when our server can't send", async () => {
    axios.post.mockRejectedValue(serverError(502, "mail/send-failed"));
    await requestPasswordReset("a@b.com");
    expect(sendPasswordResetEmail).toHaveBeenCalled();
  });

  it("uses the Firebase mail when our server can't be reached", async () => {
    axios.post.mockRejectedValue(new Error("Network Error"));
    await requestPasswordReset("a@b.com");
    expect(sendPasswordResetEmail).toHaveBeenCalled();
  });

  // otherwise the limit could be skipped through the fallback
  it("does not fall back when there were too many requests", async () => {
    axios.post.mockRejectedValue(serverError(429, "auth/too-many-requests"));
    await expect(requestPasswordReset("a@b.com")).rejects.toMatchObject({
      code: "auth/too-many-requests",
    });
    expect(sendPasswordResetEmail).not.toHaveBeenCalled();
  });
});

describe("requestEmailVerification", () => {
  it("sends the login token to our server", async () => {
    axios.post.mockResolvedValue({ data: { success: true } });
    await requestEmailVerification(user);
    expect(axios.post.mock.calls[0][2].headers.Authorization).toBe(
      "Bearer token-1"
    );
    expect(sendEmailVerification).not.toHaveBeenCalled();
  });

  it("uses the Firebase mail when our server fails", async () => {
    axios.post.mockRejectedValue(serverError(500, "internal"));
    await requestEmailVerification(user);
    expect(sendEmailVerification).toHaveBeenCalledWith(user, expect.anything());
  });
});

describe("requestEmailChange", () => {
  it("reports an email of another account without falling back", async () => {
    axios.post.mockRejectedValue(serverError(409, "auth/email-already-in-use"));
    await expect(requestEmailChange(user, "x@y.com")).rejects.toMatchObject({
      code: "auth/email-already-in-use",
    });
    expect(verifyBeforeUpdateEmail).not.toHaveBeenCalled();
  });

  it("uses the Firebase mail when our server can't be reached", async () => {
    axios.post.mockRejectedValue(new Error("Network Error"));
    await requestEmailChange(user, "x@y.com");
    expect(verifyBeforeUpdateEmail).toHaveBeenCalledWith(
      user,
      "x@y.com",
      expect.anything()
    );
  });
});
