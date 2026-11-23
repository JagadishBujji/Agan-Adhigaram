import {
  isValidAddress,
  isValidName,
  isValidPhoneNumber,
  normalizePhoneNumber,
} from "./validator";

describe("isValidName", () => {
  it.each(["Mohammed Javid", "K. Ramesh", "Ramesh K.", "Anne-Marie", "O'Neil", "R.K. Selvi"])(
    "accepts %s",
    (name) => expect(isValidName(name)).toBe(true)
  );

  it.each(["", "  ", "123", "Ram@", " Ramesh", "Ramesh "])("rejects %p", (name) =>
    expect(isValidName(name)).toBe(false)
  );

  // the invoice pdf prints only english letters
  it("rejects non-english letters", () => {
    expect(isValidName("முகமது")).toBe(false);
  });
});

describe("isValidAddress", () => {
  it("accepts door no with colon and a new line", () => {
    expect(isValidAddress("No: 5, 2nd Street\nAnna Nagar")).toBe(true);
  });

  it("accepts common symbols", () => {
    expect(isValidAddress("Flat #3B, 'Sri' Apts (Opp. Bus Stand) & Co")).toBe(true);
  });

  it("rejects too short or non-english text", () => {
    expect(isValidAddress("ab")).toBe(false);
    expect(isValidAddress("அண்ணா நகர் தெரு")).toBe(false);
  });
});

describe("normalizePhoneNumber / isValidPhoneNumber", () => {
  it.each([
    ["9952168015", "9952168015"],
    ["+91 99521 68015", "9952168015"],
    ["+919952168015", "9952168015"],
    ["919952168015", "9952168015"],
    ["09952168015", "9952168015"],
    ["99521-68015", "9952168015"],
  ])("normalizes %s", (input, expected) => {
    expect(normalizePhoneNumber(input)).toBe(expected);
    expect(isValidPhoneNumber(input)).toBe(true);
  });

  it.each(["12345", "99521680151234", "abcdefghij"])("rejects %s", (input) =>
    expect(isValidPhoneNumber(input)).toBe(false)
  );
});
