// Customer-friendly text for Firebase Auth error codes (raw codes like
// "auth/invalid-credential" were shown to customers before).
const AUTH_ERROR_MESSAGES = {
  "auth/invalid-credential": "Email or password is incorrect.",
  "auth/wrong-password": "Email or password is incorrect.",
  "auth/user-not-found": "Email or password is incorrect.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/user-disabled":
    "This account is disabled. Please contact Agan Adhigaram (+91 9363123828).",
  "auth/too-many-requests":
    "Too many attempts. Please wait a few minutes and try again.",
  "auth/email-already-in-use":
    "An account already exists with this email. Please login, or use Forgot password.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/network-request-failed":
    "Network problem. Please check your internet connection and try again.",
};

function getAuthErrorMessage(error) {
  const code = error && error.code;
  return (
    AUTH_ERROR_MESSAGES[code] || "Something went wrong. Please try again."
  );
}

// Firebase does not tell whether an account exists for the email (email
// enumeration protection is on), so the message must not claim a mail was sent.
function getPasswordResetSentMessage(email) {
  return `If an account exists for ${email}, a password reset link has been sent. Please check your inbox and spam folder.`;
}

// where the customer lands after resetting the password / verifying the email
function getAuthActionSettings() {
  return { url: window.location.origin };
}

export {
  getAuthErrorMessage,
  getPasswordResetSentMessage,
  getAuthActionSettings,
};
