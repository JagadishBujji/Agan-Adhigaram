import { useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Subscribe.module.css";
import { isValidEmail } from "../utils/validator";
import { errorNotification, successNotification } from "../utils/notifications";

const Subscribe = ({ circleimg, circle1 }) => {
  const [email, setEmail] = useState("");

  const subscribeToNewsletter = () => {
    const isValid = isValidEmail(email);
    if (isValid) {
      const templateParams = {
        from_name: "Agan-Adhigaram-Newsletter",
        to_name: "Agan Adhigaram Newsletter",
        message: `Newsletter email to be subscribed: ${email}`,
        reply_to: "way2thinkqueries@gmail.com",
      };
      // console.log("email: ", email, isValid);
      emailjs
        .send(
          "service_oqj0u95",
          "template_vm0im08",
          templateParams,
          "D2kbT-B5keOM5qWXb"
        )
        .then(
          function (response) {
            // console.log("SUCCESS!", response.status, response.text);
            successNotification(
              "Thank you for registering newletter with us!!!"
            );
            setEmail("");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        )
        .catch((e) => console.log(e));
    } else {
      errorNotification("Invalid Email, please enter valid email address");
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
          <div className={classes.fromcontrol}>
            <input
              type="email"
              placeholder="Type your email here"
              className={classes.emailinput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={classes.submit} onClick={subscribeToNewsletter}>
              Subscribe
            </button>
            <img
              src={circle1}
              alt="circle1"
              className={classes.circleElement}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
