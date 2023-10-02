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
        </div>
      </div>
    </>
  );
};

export default Footer;
