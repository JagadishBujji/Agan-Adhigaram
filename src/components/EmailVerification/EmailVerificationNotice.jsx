import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import {
  errorNotification,
  successNotification,
} from "../../utils/notifications";
import { getAuthErrorMessage } from "../../utils/authMessages";
import {
  requestEmailChange,
  requestEmailVerification,
} from "../../api/authEmails";
import classes from "./EmailVerificationNotice.module.css";

// Shown at checkout to new accounts that have not verified their email yet.
// The order confirmation, invoice and password reset all go to this email,
// so a typo is caught here instead of when the password is forgotten.
const EmailVerificationNotice = ({ id, email, onVerified }) => {
  const [isBusy, setIsBusy] = useState(false);
  const [isChangingEmail, setIsChangingEmail] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [sentToNewEmail, setSentToNewEmail] = useState("");

  const run = async (action) => {
    if (isBusy) return;
    setIsBusy(true);
    try {
      await action();
    } finally {
      setIsBusy(false);
    }
  };

  const resendLink = () =>
    run(async () => {
      try {
        await requestEmailVerification(auth.currentUser);
        successNotification(
          `Verification link sent to ${email}. Please check your inbox and spam folder.`
        );
      } catch (e) {
        errorNotification(getAuthErrorMessage(e));
      }
    });

  const checkVerified = () =>
    run(async () => {
      try {
        await auth.currentUser.reload();
      } catch (e) {
        // the session ends when the email was changed from the link
        if (e.code === "auth/user-token-expired") {
          errorNotification(
            "Your email was changed. Please login again with your new email."
          );
          await signOut(auth);
          return;
        }
        errorNotification(getAuthErrorMessage(e));
        return;
      }
      if (auth.currentUser.emailVerified) {
        successNotification("Email verified. You can place the order now.");
        onVerified();
      } else {
        errorNotification(
          "Your email is not verified yet. Please open the link we sent, then try again."
        );
      }
    });

  const changeEmail = (e) => {
    e.preventDefault();
    const trimmedEmail = newEmail.trim().toLowerCase();
    if (!trimmedEmail) {
      errorNotification("Please enter your correct email");
      return;
    }
    if (trimmedEmail === (email || "").toLowerCase()) {
      errorNotification("This is the same email. Please use Resend link.");
      return;
    }
    run(async () => {
      try {
        // the email changes only after the link sent to the new email is opened
        await requestEmailChange(auth.currentUser, trimmedEmail);
        setSentToNewEmail(trimmedEmail);
        setIsChangingEmail(false);
        setNewEmail("");
      } catch (err) {
        if (err.code === "auth/requires-recent-login") {
          errorNotification(
            "For your safety, please logout and login again, then change your email."
          );
        } else {
          errorNotification(getAuthErrorMessage(err));
        }
      }
    });
  };

  return (
    <div id={id} className={classes.notice} role="alert">
      <p className={classes.title}>Please verify your email to place the order</p>
      {sentToNewEmail ? (
        <p className={classes.text}>
          We sent a link to <strong>{sentToNewEmail}</strong>. Open it to
          confirm your new email, then login again with{" "}
          <strong>{sentToNewEmail}</strong> to place the order.
        </p>
      ) : (
        <p className={classes.text}>
          We sent a verification link to <strong>{email}</strong>. Your order
          confirmation and invoice will be sent to this email. Please check
          your inbox and spam folder.
        </p>
      )}
      <div className={classes.actions}>
        <button
          type="button"
          className={classes.primaryBtn}
          onClick={checkVerified}
          disabled={isBusy}
        >
          I've verified, continue
        </button>
        <button
          type="button"
          className={classes.secondaryBtn}
          onClick={resendLink}
          disabled={isBusy}
        >
          Resend link
        </button>
        <button
          type="button"
          className={classes.linkBtn}
          onClick={() => setIsChangingEmail((value) => !value)}
          disabled={isBusy}
        >
          Wrong email? Change it
        </button>
      </div>
      {isChangingEmail && (
        <form className={classes.changeForm} onSubmit={changeEmail}>
          <label htmlFor="verify-new-email" className={classes.label}>
            Correct email
          </label>
          <input
            id="verify-new-email"
            type="email"
            className={classes.input}
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="name@example.com"
            required
          />
          <button
            type="submit"
            className={classes.secondaryBtn}
            disabled={isBusy}
          >
            Send link
          </button>
        </form>
      )}
    </div>
  );
};

export default EmailVerificationNotice;
