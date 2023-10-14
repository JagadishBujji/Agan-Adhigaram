import classes from "./BestQuality.module.css";

const BestQuality = () => {
  return (
    <>
      <section className={`${classes.overallbest} `}>
        <div className={`${classes.bestmain} row container m-auto`}>
          <div className={`${classes.bestquailty1} col-md-3 col-lg-3`}>
            <img
              src="./images/Quick.svg"
              alt=""
              className={classes.Quickicon}
            />
            <h3 className={classes.titlebest}>Quick Delivery</h3>
            <p className={classes.contentbest}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={`${classes.bestquailty1} col-md-3 col-lg-3`}>
            <img
              src="./images/Secure.svg"
              alt=""
              className={classes.Quickicon}
            />
            <h3 className={classes.titlebest}>Secure Payment</h3>
            <p className={classes.contentbest}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={`${classes.bestquailty1} col-md-3 col-lg-3`}>
            <img
              src="./images/bestquality.svg"
              alt=""
              className={classes.Quickicon}
            />
            <h3 className={classes.titlebest}>Best Quality</h3>
            <p className={classes.contentbest}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={`${classes.bestquailty1} col-md-3 col-lg-3`}>
            <img
              src="./images/return.svg"
              alt=""
              className={classes.Quickicon}
            />
            <h3 className={classes.titlebest}>Return Guarantee</h3>
            <p className={classes.contentbest}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestQuality;
