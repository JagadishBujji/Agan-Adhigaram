import React from "react";
import classes from "./Aboutus.module.css";
// import dragon from '../images/Dragon.png';
// import boy1 from '../images/boy1.png';
// import girl1 from '../images/girl1.png';
// import butterfly from '../images/Butterfly.png';

function Aboutus() {
  return (
    <div className={`${classes.about} about`}>
      <div className={`${classes.us}`}>
        <h1 className={`${classes.aboutus}`}>
          About Us{" "}
          <span>
            <img
              src="./images/Sparkle.svg"
              alt="heroimg1"
              className={classes.spark}
            />
          </span>
        </h1>
        <h1 className={`${classes.we}`}>
          {" "}
          Fueling young minds with imagination
          <br /> through interactive books that spark
          <br /> creativity and learning.
        </h1>
        <h1 className={`${classes.mobilewe}`}>
          {" "}
          we're on a mission to create a<br /> positive global impact.
        </h1>
      </div>

      <div className={`${classes.About} row container m-auto`}>
        <div className={`${classes.person1} col-md-6`}>
          <img
            src="./images/Dragon.png"
            alt="heroimg1"
            className={classes.dragon}
          />
          <p className={classes.sethuram}>
            Sethu Ram is a first employee and co-founder of
            <br /> Agan Adhigaram publications.
          </p>
          <img src="./images/boy1.svg" alt="heroimg1" className={classes.boy} />
          <p className={classes.name1}>Sethuram</p>
        </div>
        <div className={`${classes.person2} col-md-6`}>
          <p className={classes.name2}> Ramya</p>
          <img
            src="./images/Butterfly.png"
            alt="heroimg1"
            className={classes.Butterfly}
          />
          <img
            src="./images/girl1.svg"
            alt="heroimg1"
            className={classes.boy}
          />
          <p className={classes.ramya}>
            Ramya is the chief believer and co-founder of
            <br />
            Agan Adhigaram publications.
          </p>
        </div>
      </div>

      {/* <div className="container" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col1 col-12 col-lg-2">
            <img
              src="./images/Dragon.png"
              alt="heroimg1"
              className="img-fluid"
            />
          </div>
          <div className="col2 col-12 col-lg-4">
            <p className="sethu">
              Sethu Ram is a first employee and co-founder of Agan Adhigaram
              publications.
            </p>
            <img src="./images/boy1.png" alt="heroimg1" className="img-fluid" />
          </div>
          <div className="col3 col-12 col-lg-4">
            <img
              src="./images/girl1.png"
              alt="heroimg1"
              className="img-fluid"
            />
            <p className="ramya" style={{ marginTop: "40px" }}>
              Ramya is the chief believer and co-founder of Agan Adhigaram
              publications.
            </p>
          </div>
          <div className="col4  col-12 col-lg-2">
            <img
              src="./images/Butterfly.png"
              alt="heroimg1"
              className="img-fluid"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Aboutus;
