import { getChangedEmail, needsEmailVerification } from "./emailVerification";

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
