import GroupAvatars from "./GroupAvatars";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <>
      <div className={`${classes.Testimonials} row container`}>
        <div className={`${classes.testcontant} col-md-4`}>
          <h3 className={classes.Testtitle}>Testimonials</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <GroupAvatars />
        </div>
        <div className={`${classes.testcontant} col-md-8`}></div>
      </div>
    </>
  );
};

export default Testimonials;
