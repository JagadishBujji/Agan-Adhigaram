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

export { isValidEmail, isValidPassword };
