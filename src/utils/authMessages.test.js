import {
  getAuthErrorMessage,
  getPasswordResetSentMessage,
} from "./authMessages";

describe("getAuthErrorMessage", () => {
  it("does not show raw firebase codes for a wrong login", () => {
    const message = getAuthErrorMessage({ code: "auth/invalid-credential" });
    expect(message).toBe("Email or password is incorrect.");
    expect(message).not.toMatch(/auth\//);
  });

  it("gives the same message for unknown email and wrong password", () => {
    expect(getAuthErrorMessage({ code: "auth/user-not-found" })).toBe(
      getAuthErrorMessage({ code: "auth/wrong-password" })
    );
  });

  it("falls back to a generic message", () => {
    expect(getAuthErrorMessage({ code: "auth/something-new" })).toBe(
      "Something went wrong. Please try again."
    );
    expect(getAuthErrorMessage(undefined)).toBe(
      "Something went wrong. Please try again."
    );
  });
});

describe("getPasswordResetSentMessage", () => {
  it("does not claim the mail was definitely sent", () => {
    const message = getPasswordResetSentMessage("a@b.com");
    expect(message).toMatch(/^If an account exists for a@b.com/);
    expect(message).toMatch(/spam/);
  });
});
