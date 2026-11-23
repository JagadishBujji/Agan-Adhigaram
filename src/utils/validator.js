function isValidEmail(email) {
  // Regular expression for a valid email address
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // Test the email against the regex pattern
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Password must be 6 characters or more in length
  const passwordRegex = /^.{6,}$/;

  // Test the password against the regex pattern
  return passwordRegex.test(password);
}

function isValidName(name) {
  // english letters (the invoice pdf prints only these), with initials and
  // joiners: "K. Ramesh", "R.K. Selvi", "Anne-Marie", "O'Neil"
  // no space in beginning and ending
  const nameRegex = /^[A-Za-z]+(?:(?:\.\s?|\s|-|')[A-Za-z]+)*\.?$/;

  return typeof name === "string" && nameRegex.test(name);
}

// "+91 99521 68015", "09952168015", "99521-68015" -> "9952168015"
// (autofill often adds the country code / spaces)
function normalizePhoneNumber(phoneNumber) {
  const digits = String(phoneNumber || "").replace(/[\s()-]/g, "").replace(/^\+/, "");
  if (/^91\d{10}$/.test(digits)) return digits.slice(2);
  if (/^0\d{10}$/.test(digits)) return digits.slice(1);
  return digits;
}

function isValidPhoneNumber(phoneNumber) {
  // 10 digit number after removing the country code / spaces
  return /^\d{10}$/.test(normalizePhoneNumber(phoneNumber));
}

function isValidAddress(address) {
  // printable english text and new lines (invoice pdf limitation), at least 5 characters
  const text = String(address || "").trim();
  return text.length >= 5 && /^[\x20-\x7E\n\r]+$/.test(text);
}

function isValidNumber(num) {
  // contains only 10 digit number
  const numberRegex = /^\d+$/;

  //Test the Phone number against the regex pattern
  return numberRegex.test(num);
}

export {
  isValidEmail,
  isValidPassword,
  isValidAddress,
  isValidPhoneNumber,
  normalizePhoneNumber,
  isValidName,
  isValidNumber,
};
