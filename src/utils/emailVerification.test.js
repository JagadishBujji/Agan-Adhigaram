import {
  getChangedEmail,
  needsEmailVerification,
  refreshVerifiedToken,
} from "./emailVerification";

describe("needsEmailVerification", () => {
  it("asks a new account to verify before ordering", () => {
    expect(
      needsEmailVerification(
        { email_verification_required: true },
        { emailVerified: false }
      )
    ).toBe(true);
  });

  it("lets a new account order once the email is verified", () => {
    expect(
      needsEmailVerification(
        { email_verification_required: true },
        { emailVerified: true }
      )
    ).toBe(false);
  });

  // accounts made before verification was added keep ordering as before
  it("does not stop existing customers", () => {
    expect(needsEmailVerification({}, { emailVerified: false })).toBe(false);
  });

  it("does not stop anyone when the login is not known yet", () => {
    expect(
      needsEmailVerification({ email_verification_required: true }, null)
    ).toBe(false);
  });
});

describe("getChangedEmail", () => {
  it("returns the login email after the customer changed it", () => {
    expect(
      getChangedEmail({ email: "old@x.com" }, { email: "new@x.com" })
    ).toBe("new@x.com");
  });

  it("returns null when the email is the same (case ignored)", () => {
    expect(
      getChangedEmail({ email: "Same@X.com" }, { email: "same@x.com" })
    ).toBeNull();
  });

  it("returns null when the login has no email", () => {
    expect(getChangedEmail({ email: "a@x.com" }, { email: null })).toBeNull();
  });
});

describe("refreshVerifiedToken", () => {
  const fakeUser = (emailVerified, tokenSaysVerified) => ({
    emailVerified,
    getIdTokenResult: jest.fn(async () => ({
      claims: { email_verified: tokenSaysVerified },
    })),
    getIdToken: jest.fn(async () => "token"),
  });

  it("gets a new login token when the email was just verified", async () => {
    const user = fakeUser(true, false);
    await refreshVerifiedToken(user);
    expect(user.getIdToken).toHaveBeenCalledWith(true);
  });

  it("keeps the token when it already says verified", async () => {
    const user = fakeUser(true, true);
    await refreshVerifiedToken(user);
    expect(user.getIdToken).not.toHaveBeenCalled();
  });

  it("does nothing when the email is not verified or nobody is logged in", async () => {
    const user = fakeUser(false, false);
    await refreshVerifiedToken(user);
    expect(user.getIdTokenResult).not.toHaveBeenCalled();
    await expect(refreshVerifiedToken(null)).resolves.toBeUndefined();
  });
});
