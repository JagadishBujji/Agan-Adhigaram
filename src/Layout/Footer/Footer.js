import { Link, useLocation } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  const { pathname } = useLocation();
  // console.log("path", pathname, pathname.includes("books"));
  return (
    <>
      <div
        className={`${
          pathname.includes("books")
            ? classes.footerbg_orange
            : classes.footerbg
        } container-fluid`}
      >
        <div className={`${classes.footercontent} container`}>
          <div className={`${classes.socialmedia}`}>
            <a href="https://www.instagram.com/agan_adhigaram/" target="_blank">
              <img
                src="./images/Black Insta.svg"
                alt=""
                className={classes.socialmediaicon}
              />
            </a>
            <a href=" https://www.facebook.com/Aganadhigaram" target="_blank">
              <img
                src="./images/Black Facebook.svg"
                alt=""
                className={classes.socialmediaicon}
              />
            </a>
            <a
              href=" https://www.linkedin.com/in/agan-adhigaram-7b6911292/"
              target="_blank"
            >
              <img
                src="./images/Black linkedin.svg"
                alt=""
                className={classes.socialmediaicon}
              />
            </a>
            <a href="https://twitter.com/AganAdhigaram" target="_blank">
              <img
                src="./images/Black X.svg"
                alt=""
                className={classes.socialmediaicon}
              />
            </a>
            <a href=" https://www.youtube.com/@AganAdhigaram" target="_blank">
              <img
                src="./images/Black youtube.svg"
                alt=""
                className={classes.socialmediaicon}
              />
            </a>
          </div>
          <div className={`${classes.borderbottom} `}>
            <a href="">
              <img
                src="./images/Logo_Agan.png"
                alt=""
                className={classes.logoicon}
              />
            </a>
          </div>
          <div className={`${classes.links}`}>
            <a href="/">Home</a>
            <a href="contact-us">Contact us</a>
            <a href="books">Books</a>
            <a href="#aboutus">About us</a>
            <a href="blog">Blog</a>
          </div>

          <p className={classes.copyright}>
            copyright @Agan Adhigaram®.All rights reserved.
          </p>
          <p className={`${classes.footerpara1}`}>
            With love, Ramya and Sethu Ram, Chief Believers and Founders,
            <br /> Agan Adhigaram®{" "}
            <a href="terms-and-condition">Terms and Condition</a>{" "}
            <span className={`${classes.and}`}>and</span>
            <a href="privacy-policy">Privacy Policy</a>
            {/* <Link to="/privacy-policy">Privacy Policy</Link> */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
