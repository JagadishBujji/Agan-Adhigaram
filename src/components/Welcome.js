import React from "react";
import classes from "./Welcome.module.css";

function Welcome() {
  return (
    <>
      <div className={`${classes.overallmission}`}>
        <div className={`${classes.welcome} row container-fluid m-auto`}>
          <div
            className={`${classes.welcomecolumn} col-sm col-md-12 col-lg-12`}
          >
            <h3 className={`${classes.welcomeheaing}`}>
              <img
                src="./images/kama.svg"
                alt="heroimg1"
                className={classes.kamaimg}
              />
              Welcome to Agan Adhigaram®
            </h3>
            <p className={`${classes.subcontent}`}>
              your gateway to a world of captivating imagination and joyful
              learning in children's
              <br /> lives. Our journey began with a shared vision: to create a
              world where every child
              <br /> embarks on a joyful learning journey from the earliest
              moments, while fostering a<br />
              balanced relationship with technology.
            </p>
            <span>
              <img
                src="./images/Paatti 1.svg"
                alt="heroimg1"
                className={classes.paatiimg}
              />
            </span>
          </div>
        </div>
        <div className={`${classes.mission} row container-fluid m-auto`}>
          <div
            className={`${classes.welcomecolumn} col-sm col-md-6 col-lg-6`}
          ></div>
          <div
            className={`${classes.welcomecolumn} col-sm col-md-6 col-lg-6`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
