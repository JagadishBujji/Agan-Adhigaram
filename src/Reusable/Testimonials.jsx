import GroupAvatars from "./GroupAvatars";
import TestimonialCarousel from "./TestimonialCarosuel";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <>
      <div className={`${classes.Testimonials} row container-fluid m-auto`}>
        <div className={`${classes.testcontant} col-md-6`}>
          <h3 className={classes.Testtitle}>Testimonials</h3>
          <p>
            Our Readers love us! See what they're saying about their experiences
            with our products and services.
          </p>
          <GroupAvatars />
        </div>
        <div className={`${classes.testcontant} col-md-6`}>
          <TestimonialCarousel />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
