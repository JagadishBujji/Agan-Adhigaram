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
          <div className={`${classes.welcomecolumn1} col-sm col-md-6 col-lg-6`}>
            <img
              src="./images/crow.svg"
              alt="heroimg1"
              className={classes.crow}
            />
          </div>
          <div className={`${classes.welcomecolumn2} col-sm col-md-6 col-lg-6`}>
            <h3 className={`${classes.welcomevision}`}>Our Vision</h3>
            <h4 className={`${classes.welcomevisiontitle}`}>
              {" "}
              We envision a future{" "}
            </h4>
            <p className={`${classes.subcontentvision}`}>
              where children grow up with a deep appreciation for the world
              around them and the limitless possibilities it holds. Also, our
              vision is to create captivating stories that celebrate diversity,
              promote inclusivity, and ignite curiosity.
            </p>
          </div>
        </div>
        <div className={`${classes.missionfox} row container m-auto`}>
          <div
            className={`${classes.welcomecolumn2fox} col-sm col-md-6 col-lg-6`}
          >
            <h3 className={`${classes.welcomemissionfox}`}>Our mission</h3>
            <h4 className={`${classes.welcomevisiontitlefox}`}>
              {" "}
              The love for learning{" "}
            </h4>
            <p className={`${classes.subcontentvisionfox}`}>
              begins from the womb. We believe that a child's first interactions
              with the world are precious opportunities for growth and
              exploration. By providing interactive board books that engage
              young minds and encourage curiosity, we aim to nurture the
              foundation of lifelong
            </p>
          </div>
          <div className={`${classes.welcomecolumn1} col-sm col-md-6 col-lg-6`}>
            <img
              src="./images/fox.svg"
              alt="heroimg1"
              className={classes.fox}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
