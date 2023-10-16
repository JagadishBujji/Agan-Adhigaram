import classes from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <>
      <div className={`${classes.Subscribe} row container-fluid m-auto`}>
        <div className={`${classes.sub1} col-md-6`}>
          <img
            src="./images/circleElement (1).svg"
            alt=""
            className={classes.circleimg}
          />
          <h2 className={classes.newsletter}>
            Subscribe our newsletter
            <br /> for newest books updates
          </h2>
        </div>
        <div className={`${classes.sub2} col-md-6`}>
          <div className={classes.fromcontrol}>
            <from>
              <input
                type="email"
                placeholder="Type your email here"
                className={classes.emailinput}
              />
              <button className={classes.submit}>Subscribe</button>
              <img
                src="./images/circleElement.svg"
                alt=""
                className={classes.circleElement}
              />
            </from>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
