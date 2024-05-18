import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { errorNotification, successNotification } from "../utils/notifications";

const logout = (showMessage) => {
  // console.log("logout");
  signOut(auth)
    .then(() => {
      console.log("successfully logged out");
      if (showMessage) {
        successNotification("Successfully logged out");
      }
    })
    .catch((e) => {
      console.log("logout: ", e);
      errorNotification(e.message);
    });
};

export { logout };
