import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";

// stored under the lower-case email, so the same reader is kept once
export const toSubscriberId = (email) => email.trim().toLowerCase();

// resolves "subscribed" or "already-subscribed"; the rules refuse a second
// signup with the same email, and visitors can't read the list to check first
export const subscribeToNewsletter = async (email) => {
  const id = toSubscriberId(email);
  try {
    await setDoc(doc(db, "newsletter_subscribers", id), {
      email: id,
      subscribed_at: Date.now(),
    });
    return "subscribed";
  } catch (e) {
    if (e.code === "permission-denied") {
      return "already-subscribed";
    }
    throw e;
  }
};
