import { Link, useLocation } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  const { pathname } = useLocation();
  // console.log("path", pathname, pathname.includes("books"));
  return (
    <>
      <div
        className={`${
          pathname.includes("books") ||
          pathname.includes("checkout") ||
          pathname.includes("profile") ||
          pathname.includes("orders")
            ? classes.footerbg_orange
            : classes.footerbg
        } container-fluid`}
      >
        <div className={`${classes.footercontent} container`}>
          <div className={`${classes.socialmedia}`}>
            <a
              href="https://www.instagram.com/agan_adhigaram/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.sociallink}
            >
              <img
                src="/images/insta-01.png"
                alt="Instagram"
                className={classes.socialmediaicon}
              />
            </a>
            <a
              href="https://www.facebook.com/Aganadhigaram"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.sociallink}
            >
              <img
                src="/images/facebook-04.png"
                alt="Facebook"
                className={classes.socialmediaicon}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/agan-adhigaram-7b6911292/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.sociallink}
            >
              <img
                src="/images/linkedin-05.png"
                alt="LinkedIn"
                className={classes.socialmediaicon}
              />
            </a>
            <a
              href="https://twitter.com/AganAdhigaram"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.sociallink}
            >
              <img
                src="/images/twitter-03.png"
                alt="Twitter"
                className={classes.socialmediaicon}
              />
            </a>
            <a
              href="https://www.youtube.com/@AganAdhigaram"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.sociallink}
            >
              <img
                src="/images/youtube-02.png"
                alt="YouTube"
                className={classes.socialmediaicon}
              />
            </a>
          </div>
          <div className={`${classes.borderbottom} `}>
            <Link to="/">
              <img
                src="/images/Logo_Agan.png"
                alt="Agan Adhigaram home"
                className={classes.logoicon}
              />
            </Link>
          </div>
          <div className={`${classes.links}`}>
            <Link to="/">Home</Link>
            <Link to="/contact-us">Contact us</Link>
            <Link to="/books">Books</Link>
            <a href="/#aboutus">About us</a>
            <Link to="/blog">Blog</Link>
          </div>

          <p className={classes.copyright}>
            copyright @Agan Adhigaram®.All rights reserved.
          </p>
          <p className={`${classes.footerpara1}`}>
            With love, Ramya and Sethu Ram, Chief Believers and Founders,
            <br /> Agan Adhigaram®{" "}
            <Link to="/terms-and-condition">Terms and Condition</Link>{" "}
            <span className={`${classes.and}`}>and</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
