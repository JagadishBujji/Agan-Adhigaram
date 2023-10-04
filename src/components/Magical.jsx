import classes from "./Magical.module.css";

const Magical = () => {
  return (
    <>
      <div className={`${classes.explore}`}>
        <h1 className={classes.title1}>
          {" "}
          Discover the Magical{" "}
          <span>
            <img
              src="./images/Sparkle.svg"
              alt="heroimg1"
              className={classes.spark}
            />
          </span>{" "}
        </h1>
        <h1 className={classes.title2}>World of Agan Adhigaram</h1>
      </div>
      <p className={classes.magicalpara}>
        Step into the enchanting realm, where imagination knows
        <br /> no bounds and adventures await at every turn!
      </p>
      <div className={classes.overallexpolre}>
        <button className={classes.explorebtn}>
          Explore Now
          <span className={classes.arrowouter}>
            <img
              src="./images/Arrow 1.svg"
              alt="heroimg1"
              className={classes.arrow}
            />
          </span>{" "}
        </button>
      </div>
      <div className={classes.bookimg}>
        <img src="./images/Book.svg" alt="heroimg1" className={classes.Book} />
      </div>
    </>
  );
};

export default Magical;
