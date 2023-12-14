import React from "react";
// import heroimg from "../images/Hero.png";
import Heronav from "./Heronav";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.heroall}>
      <div className="img">
        {/* <img
          src="./images/Website illustration.png"
          alt="heroimg1"
          float={"center"}
          className={classes.mainimage}
        /> */}

        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>
        <dotlottie-player
          src="https://lottie.host/cb60ed5f-00bb-45cb-9e64-568129e00747/Ww7AW3rEej.json"
          background="transparent"
          speed="1"
          direction="1"
          style={{ width: "100%" }}
          class="mainimage"
          // className={classes.mainimage}
          mode="normal"
          loop
          autoplay
        ></dotlottie-player>
        {/* <img
          src="./images/mobilegif.gif"
          alt="heroimg1"
          float={"center"}
          className={classes.mainimagemobile}
        /> */}
        <video
          className={classes.mainimagemobile}
          width="100%"
          height="100%"
          loop
          muted
          autoPlay
        >
          <source src="./images/Websitemobile.mp4" type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>

        {/* <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>
        <dotlottie-player
          src="https://lottie.host/03948fa1-a2fe-43ef-9794-e30e0c510735/iYhZxm31Ju.json"
          background="transparent"
          speed="1"
          class="mainimagemobile"
          direction="1"
          mode="normal"
          loop
          autoplay
        ></dotlottie-player> */}

        <Heronav />
      </div>
    </div>
  );
}

export default Hero;
