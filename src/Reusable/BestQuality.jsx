import classes from "./BestQuality.module.css";

const BestQuality = (props) => {
  return (
    <>
      <section className={`${classes.overallbest} `}>
        <div className={`${classes.bestmain} row container m-auto`}>
          <div className={`${classes.bestquailty1} col-md-3 col-lg-3`}>
            <img
              src={
                // "./images/Quick.svg"x
                props.quick
              }
              alt=""
              className={classes.Quickicon}
            />
            <h3 className={classes.titlebest}>Quick Delivery</h3>
            <p className={classes.contentbest}>
              Discover joyful reading with our fast and reliable delivery
              services, bringing convenience to your doorstep.
            </p>
          </div>
          <div className={`${classes.bestquailty1} col-md-3 col-lg-3`}>
            <img
              src={
                // "./images/Secure.svg"
                props.Secure
              }
              alt=""
              className={classes.Quickicon}
            />
            <h3 className={classes.titlebest}>Secure Payment</h3>
            <p className={classes.contentbest}>
              Shop with confidence, knowing your transactions are safeguarded
              with our secure and encrypted payment system.
            </p>
          </div>
          <div className={`${classes.bestquailty1} col-md-3 col-lg-3`}>
            <img
              src={
                // "./images/bestquality.svg"
                props.Best
              }
              alt=""
              className={classes.Quickicon}
            />
            <h3 className={classes.titlebest}>Best Quality</h3>
            <p className={classes.contentbest}>
              Experience excellence with our commitment to delivering the finest
              quality products.
            </p>
          </div>
          <div className={`${classes.bestquailty1} col-md-3 col-lg-3`}>
            <img
              src={
                // "./images/return.svg"
                props.Return
              }
              alt=""
              className={classes.Quickicon}
            />
            <h3 className={classes.titlebest}>Return Guarantee</h3>
            <p className={classes.contentbest}>
              Shop risk-free with our hassle-free return guarantee, ensuring
              your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestQuality;
