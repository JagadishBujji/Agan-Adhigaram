import React from "react";
import classes from "./Aboutus.module.css";
import Butterfly from "../Reusable/Butterfly";
import Dragonfly from "../Reusable/Dragonfly";
// import dragon from '../images/Dragon.png';
// import boy1 from '../images/boy1.png';
// import girl1 from '../images/girl1.png';
// import butterfly from '../images/Butterfly.png';

function Aboutus() {
  return (
    <div className={`${classes.about} about`} id="aboutus">
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
          Agan Adhigaram Publishing House® stands proudly as an independent
          publishing house situated in Chengalpattu, Tamil Nadu. Our journey
          commenced with a clear intention—to redefine the realm of Tamil
          children's literature with interactive books that spark creativity and
          learning.
        </h1>
        {/* <h1 className={`${classes.mobilewe}`}>
          {" "}
          we're on a mission to create a<br /> positive global impact.
        </h1> */}
      </div>

      <div className={`${classes.About} row container m-auto`}>
        <div className={`${classes.person1} col-md-6 col-lg-6`}>
          <img
            src="./images/Dragon.png"
            alt="heroimg1"
            className={classes.dragon}
          />
          <p className={classes.sethuram}>
            {/* Sethu Ram is a  */}
            Creative director and co-founder
            {/* of */}
            {/* <br /> Agan Adhigaram publications. */}
          </p>
          <img src="./images/boy1.svg" alt="heroimg1" className={classes.boy} />
          <Dragonfly />
          {/* <script
            src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
            type="module"
          ></script> */}
          {/* <dotlottie-player
              src="https://lottie.host/a222fe18-5bd8-4770-9855-ec53ed22006e/A3MaojSZu3.json"
              background="transparent"
              speed="1"
              class="dragon"
              direction="1"
              mode="normal"
              loop
              autoplay
            ></dotlottie-player> */}
          <p className={classes.name1}>Sethu Ram</p>
        </div>
        <div className={`${classes.person2} col-md-6 col-lg-6`}>
          <p className={classes.name2}> Ramya</p>
          <img
            src="./images/Butterfly.png"
            alt="heroimg1"
            className={classes.Butterfly}
          />
          <Butterfly />
          {/* <script
            src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
            type="module"
          ></script> */}
          {/* <dotlottie-player
            src="https://lottie.host/0e7460ad-a461-42bc-8c83-6323f9aab3ed/SQSSBBt0gR.json"
            background="transparent"
            speed="1"
            class="Butterfly"
            direction="1"
            mode="normal"
            loop
            autoplay
          ></dotlottie-player> */}

          <img
            src="./images/girl1.svg"
            alt="heroimg1"
            className={classes.boy}
          />
          <p className={classes.ramya}>
            {/* Ramya is the  */}
            Publishing director and co-founder
            {/* of
            <br />
            Agan Adhigaram publications. */}
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
