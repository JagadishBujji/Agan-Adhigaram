import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import classes from "./Subscribe.module.css";
import { isValidEmail } from "../utils/validator";
import { errorNotification } from "../utils/notifications";
import { subscribeToNewsletter } from "../api/newsletter";

const Subscribe = ({ circleimg, circle1 }) => {
  const [email, setEmail] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  // message shown in the popup after subscribing
  const [doneMessage, setDoneMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email.trim())) {
      errorNotification("Invalid Email, please enter valid email address");
      return;
    }
    setIsSaving(true);
    try {
      const result = await subscribeToNewsletter(email);
      setDoneMessage(
        result === "already-subscribed"
          ? "You are already subscribed to our newsletter. Thank you!"
          : "Thank you for subscribing! You will get our newest book updates by email."
      );
      setEmail("");
    } catch (err) {
      console.log("newsletter: ", err);
      errorNotification(
        "Could not subscribe right now, please try again in a moment"
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <div className={`${classes.Subscribe} row container-fluid m-auto`}>
        <div className={`${classes.sub1} col-md-6`}>
          <img src={circleimg} alt="circleimg" className={classes.circleimg} />
          <h2 className={classes.newsletter}>
            Subscribe our newsletter
            <br /> for newest books updates
          </h2>
        </div>
        <div className={`${classes.sub2} col-md-6`}>
          <form className={classes.fromcontrol} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Type your email here"
              className={classes.emailinput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className={classes.submit}
              disabled={isSaving}
            >
              {isSaving ? "Subscribing..." : "Subscribe"}
            </button>
            <img
              src={circle1}
              alt="circle1"
              className={classes.circleElement}
            />
          </form>
        </div>
      </div>
      <Modal show={Boolean(doneMessage)} onHide={() => setDoneMessage("")} centered>
        <Modal.Header closeButton>
          <Modal.Title>Newsletter</Modal.Title>
        </Modal.Header>
        <Modal.Body>{doneMessage}</Modal.Body>
      </Modal>
    </>
  );
};

export default Subscribe;
