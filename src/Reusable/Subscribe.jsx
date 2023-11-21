import { useState } from "react";
import classes from "./Subscribe.module.css";
import { isValidEmail } from "../utils/validator";

const Subscribe = ({ circleimg, circle1 }) => {
  const [email, setEmail] = useState("");

  const subscribeToNewsletter = () => {
    const isValid = isValidEmail(email);
    console.log("email: ", email, isValid);
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
