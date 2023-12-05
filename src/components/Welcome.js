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
            <p className={`${classes.subcontent}`} style={{textAlign:"center"}}>
              We craft books like toys that they can play with. When a book
              <br />
              becomes a toy, it transforms learning into a joyful experience.
              <br />
              Children engage with the stories, flipping pages with excitement,
              <br />
              and in doing so, they're not just reading; they're playing.
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
              The love for learning begins in the womb. We believe that a
              child's first interactions with books are precious opportunities
              for growth and exploration. Central to our mission is the creation
              of a unique familial bond through our books, fostering moments of
              connection, joy, and shared exploration within the loving embrace
              of storytelling.
            </p>
          </div>
          <div className={`${classes.welcomecolumn1} col-sm col-md-6 col-lg-6`}>
            <img
              src="./images/Nari-2.gif"
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
