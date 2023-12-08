import React from "react";
import classes from "./Journey.module.css";
// import dragon from '../images/Dragon.png';
// import boy1 from '../images/boy1.png';
// import girl1 from '../images/girl1.png';
// import butterfly from '../images/Butterfly.png';

function Journey() {
  return (
    <div className={`${classes.Journey} about`}>
      <div className={`${classes.Journeyus}`}>
        <h1 className={`${classes.Journeyus}`}>
          <span>
            <img
              src="./images/Sparkle (2).svg"
              alt="heroimg1"
              className={classes.spark}
            />
          </span>
          Join Our Journey{" "}
        </h1>
        <h1 className={`${classes.Journeywe}`}>
          {" "}
          We invite you to join us on this exciting journey of discovery and
          growth. Explore our collection of 
           interactive<br /> board books that foster early learning while
          respecting the importance of digital
          balance. Together, let's create a world where education is an
          enchanting adventure, and every
           child's potential knows no bounds.
        </h1>
      </div>

      <div className={`${classes.About} row container m-auto`}>
        <div className={`${classes.person1} col-md-4`}>
          <img
            src="./images/Squiril and board 1.svg"
            alt="heroimg1"
            className={classes.Squiril}
          />
        </div>
        <div className={`${classes.person2} col-md-4`}>
          <span className={classes.well1}>
            {/* <img
              src="./images/Well 2.svg"
              alt="heroimg1"
              className={classes.Well}
            /> */}
          </span>
          <img
            src="./images/house 1.svg"
            alt="heroimg1"
            className={classes.house}
          />
          <span>
            <img
              src="./images/ant.svg"
              alt="heroimg1"
              className={classes.ant}
            />
          </span>
        </div>
        <div className={`${classes.person3} col-5 col-md-4`}>
          <img
            src="./images/Well 2.svg"
            alt="heroimg1"
            className={classes.Well}
          />
        </div>
      </div>
    </div>
  );
}

export default Journey;
