import React from "react";
// import heroimg from "../images/Hero.png";
import Heronav from "./Heronav";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.heroall}>
      <div className="img">
        <img
          src="./images/Website illustration.png"
          alt="heroimg1"
          float={"center"}
          className={classes.mainimage}
        />
        <Heronav />
      </div>
    </div>
  );
}

export default Hero;
