// Accounts created after email verification was added carry
// email_verification_required: true (set at signup). Older accounts don't,
// so existing customers keep ordering as before.
function needsEmailVerification(userDetail, authUser) {
  if (!authUser || !userDetail) return false;
  return userDetail.email_verification_required === true && !authUser.emailVerified;
}

// After "Wrong email? Change it" the login email changes when the customer opens
// the link, but the saved profile (used for order mails) still has the old one.
function getChangedEmail(userDetail, authUser) {
  const authEmail = authUser && authUser.email;
  if (!authEmail) return null;
  const profileEmail = (userDetail && userDetail.email) || "";
  return authEmail.toLowerCase() === profileEmail.toLowerCase() ? null : authEmail;
}

// Firestore checks "verified" in the login token, which still says "not
// verified" after the customer opens the link (until it renews, up to an
// hour). Get a fresh token once the account shows as verified.
async function refreshVerifiedToken(authUser) {
  if (!authUser || !authUser.emailVerified) return;
  const { claims } = await authUser.getIdTokenResult();
  if (claims.email_verified !== true) {
    await authUser.getIdToken(true);
  }
}

export { getChangedEmail, needsEmailVerification, refreshVerifiedToken };
