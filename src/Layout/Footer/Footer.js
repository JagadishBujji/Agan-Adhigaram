import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={`${classes.footerbg} container-fluid`}>
        <div className={`${classes.footercontent} container`}>
          <p className={`${classes.footerpara1}`}>
            With love, Ramya and Sethu Ram, Chief Believers and Founders,
            <br /> Agan Adhigaram®
          </p>
          <div className={`${classes.socialmedia}`}>
            <a href="">
              <img
                src="./images/instagram.svg"
                alt=""
                className={classes.socialmediaicon}
              />
            </a>
            <a href="">
              <img
                src="./images/facebook.svg"
                alt=""
                className={classes.socialmediaicon}
              />
            </a>
            <a href="">
              <img
                src="./images/linkedin.svg"
                alt=""
                className={classes.socialmediaicon}
              />
            </a>
            <a href="">
              <img
                src="./images/X.svg"
                alt=""
                className={classes.socialmediaicon}
              />
            </a>
            <a href="">
              <img
                src="./images/youtube.svg"
                alt=""
                className={classes.socialmediaicon}
              />
            </a>
          </div>
          <div className={`${classes.borderbottom} `}>
            <a href="">
              <img
                src="./images/Frame.svg"
                alt=""
                className={classes.logoicon}
              />
            </a>
          </div>
          <div className={`${classes.links}`}>
            <a href="">Home</a>
            <a href="">Contact us</a>
            <a href="">Books</a>
            <a href="">About us</a>
            <a href="">Blog</a>
          </div>
          <p className={classes.copyright}>copyright @Agan Adhigaram®.All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
