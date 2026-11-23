import axios from "axios";
import {
  sendEmailVerification,
  sendPasswordResetEmail,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import { auth, FUNCTIONS_BASE_URL } from "../services/firebase";
import { getAuthActionSettings } from "../utils/authMessages";

// Account mails go out through our server (Resend, with the shop's design).
// If the server can't send (down, network, Resend error), Firebase's plain
// mail is sent instead. Firebase's mail also goes through Resend (SMTP
// settings), so this covers a problem in our server, not a Resend outage.
// These answers are final and must not fall back: invalid email, too many
// requests (the fallback would skip the limit), email used by another account.
const FINAL_CODES = [
  "auth/invalid-email",
  "auth/too-many-requests",
  "auth/email-already-in-use",
];

const postAuthEmail = async (path, body, user) => {
  const headers = { "Content-Type": "application/json" };
  if (user) {
    headers.Authorization = `Bearer ${await user.getIdToken()}`;
  }
  return axios.post(
    `${FUNCTIONS_BASE_URL}/authEmails/${path}`,
    { ...body, continueUrl: getAuthActionSettings().url },
    { headers, timeout: 15000 }
  );
};

const withFallback = async (request, fallback) => {
  try {
    await request();
  } catch (e) {
    const code = e.response && e.response.data && e.response.data.code;
    if (FINAL_CODES.includes(code)) {
      throw Object.assign(new Error(e.response.data.message || code), {
        code,
      });
    }
    console.log("account mail through Firebase: ", code || e.message);
    await fallback();
  }
};

const requestPasswordReset = (email) =>
  withFallback(
    () => postAuthEmail("password-reset", { email }),
    () => sendPasswordResetEmail(auth, email, getAuthActionSettings())
  );

const requestEmailVerification = (user) =>
  withFallback(
    () => postAuthEmail("verify-email", {}, user),
    () => sendEmailVerification(user, getAuthActionSettings())
  );

const requestEmailChange = (user, newEmail) =>
  withFallback(
    () => postAuthEmail("change-email", { newEmail }, user),
    () => verifyBeforeUpdateEmail(user, newEmail, getAuthActionSettings())
  );

export { requestPasswordReset, requestEmailVerification, requestEmailChange };
