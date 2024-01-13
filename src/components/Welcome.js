import React from "react";
import classes from "./Welcome.module.css";
import Crow from "../Reusable/Crow";
import FoxDancing from "../Reusable/FoxDancing";
import Fox from "../Reusable/Fox";
import Paati from "../Reusable/Paati";

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
            <p
              className={`${classes.subcontent}`}
              style={{ textAlign: "center" }}
            >
              We craft books like toys that they can play with. When a book
              becomes a toy, it transforms learning into a joyful experience.
              Children engage with the stories, flipping pages with excitement,
              and in doing so, they're not just reading; they're playing.
            </p>
            <span>
              {/* <img
                src="./images/Paatti 1.svg"
                alt="heroimg1"
                className={classes.paatiimg}
              /> */}
              <script
                src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                type="module"
              ></script>
              <Paati />
              {/* <dotlottie-player
                src="https://lottie.host/53bfb191-5d62-4a09-8e16-f5cc4b43fef9/BFeDo3AjjP.json"
                background="transparent"
                speed="1"
                class="paatiimg"
                direction="1"
                mode="normal"
                loop
                autoplay
              ></dotlottie-player> */}
            </span>
          </div>
        </div>
        <div className={`${classes.mission} row container-fluid  mission m-auto`}>
          <div className={`${classes.welcomecolumn1} col-sm col-md-6 col-lg-6`}>
            {/* <img
              src="./images/crow.svg"
              alt="heroimg1"
              className={classes.crow}
            /> */}

            <script
              src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"
            ></script>
            <Crow />
            {/* <dotlottie-player
              src="https://lottie.host/6caf9ccb-6575-427e-a1e1-4bd2653e1187/f2cRMtO4gC.json"
              background="transparent"
              speed="1"
              style={{
                width: "500px",
                height: "500px",
              }}
              direction="1"
              mode="normal"
              loop
              autoplay
            ></dotlottie-player> */}
          </div>
          <div
            className={`${classes.welcomecolumn2} col-sm col-md-6 col-lg-6 `}
          >
            <h3 className={`${classes.welcomevision}`}>Our Vision</h3>
            <h4 className={`${classes.welcomevisiontitle}`}>
              {" "}
              We envision a future{" "}
            </h4>
            <p className={`${classes.subcontentvision}`}>
              We envision a vibrant space with our interactive books in Tamil to
              redefine the early learning landscape. Through our innovative
              picture books, we playfully carry forward the tales that shaped
              our ancestors' childhoods. Our vision is to seamlessly narrate
              these stories to suit the preferences of the new generation by
              providing a unique social connection for the exploration of
              heritage, language, and tradition in an engaging and memorable
              way.
            </p>
          </div>
        </div>
        <div className={`${classes.missionfox} row container m-auto missionfox`}>
          <div
            className={`${classes.welcomecolumn2fox} col-sm col-md-6 col-lg-6`}
          >
            <h3 className={`${classes.welcomemissionfox}`}>Our mission</h3>
            <h4 className={`${classes.welcomevisiontitlefox}`}>
              {" "}
              The love for learning{" "}
            </h4>
            <p className={`${classes.subcontentvisionfox}`}>
              The love for learning begins in the womb. We believe that a
              child's first interactions with books are precious opportunities
              for growth and exploration. Central to our mission is the creation
              of a unique familial bond through our books, fostering moments of
              connection, joy, and shared exploration within the loving embrace
              of storytelling.
            </p>
          </div>
          <div className={`${classes.welcomecolumn1} col-sm col-md-6 col-lg-6`}>
            <Fox fox={classes.fox} />
            {/* <img
              src="./images/Nari-2.gif"
              alt="heroimg1"
              className={classes.fox}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
