import GroupAvatars from "./GroupAvatars";
import TestimoninalCarosuel from "./TestimonialCarosuel";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <>
      <div className={`${classes.Testimonials} row container-fluid m-auto`}>
        <div className={`${classes.testcontant} col-md-6`}>
          <h3 className={classes.Testtitle}>Testimonials</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <GroupAvatars />
        </div>
        <div className={`${classes.testcontant} col-md-6`}></div>
      </div>
    </>
  );
};

export default Testimonials;
