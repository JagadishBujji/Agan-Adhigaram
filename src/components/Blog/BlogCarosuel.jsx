import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classes from "./BlogCarosuel.module.css";

const BlogCarosuel = () => {
  const options = {
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 800,
    center: true,
    items: 1.1,
    stagePadding: 15,
    loop: true,
    margin: 15,
    animateOut: "slide-up",
    animateIn: "slide-down",
    dots: false,
    nav: true,
    navText: [
      "<img  src='./images/Arrow - Left Circle.svg'>",
      "<img  src='./images/Arrow - Right Circle.svg'>",
    ],
  };

  return (
    <>
      <section class={`${classes.cards}`}>
        <OwlCarousel className="loop owl-carousel" {...options}>
          <div className={`${classes.startupcard} card startupcard row`}>
            <div className={`${classes.firsthalf} col-md-6`}>
              {" "}
              <img src="./images/blog.svg" alt="" className={classes.blogimg} />
            </div>
            <div className={`${classes.secondhalf} col-md-6`}>
              <div className={`${classes.author}`}>
                <img src="" alt="" />
                <p>AKILA KANNADASAN</p>
                <img src="" alt="" />
              </div>
              <h3>
                Agan Adhigaram presents popular stories as boardbooks with
                interactive features ideal for little fingers
              </h3>
              <p>
                The popular story of the grandma who sold vadai now has an
                interesting twist. Perhaps one of the most narrated, reproduced,
                and illustrated Tamil children’s stories of all time, it is now
                available as an interactive boardbook.Agan Adhigaram, a
                publishing startup by Chengalpattu-based husband-and-wife duo
                Ramya Karthikeyan and D Sethuram, has brought out this story
                with push, pull, and slide mechanisms aimed at helping little
                fingers develop the pincer grasp.{" "}
              </p>
              <a href="">Read More </a>
            </div>
          </div>
          <div className={`${classes.startupcard} card startupcard row`}>
            <div className={`${classes.firsthalf} col-md-6`}>
              {" "}
              <img src="./images/blog.svg" alt="" className={classes.blogimg} />
            </div>
            <div className={`${classes.secondhalf} col-md-6`}>
              <div className={`${classes.author}`}>
                <img src="" alt="" />
                <p>jaga KANNADASAN</p>
                <img src="" alt="" />
              </div>
              <h3>
                Agan Adhigaram presents popular stories as boardbooks with
                interactive features ideal for little fingers
              </h3>
              <p>
                The popular story of the grandma who sold vadai now has an
                interesting twist. Perhaps one of the most narrated, reproduced,
                and illustrated Tamil children’s stories of all time, it is now
                available as an interactive boardbook.Agan Adhigaram, a
                publishing startup by Chengalpattu-based husband-and-wife duo
                Ramya Karthikeyan and D Sethuram, has brought out this story
                with push, pull, and slide mechanisms aimed at helping little
                fingers develop the pincer grasp.{" "}
              </p>
              <a href="">Read More </a>
            </div>
          </div>
          <div className={`${classes.startupcard} card startupcard row`}>
            <div className={`${classes.firsthalf} col-md-6`}>
              {" "}
              <img src="./images/blog.svg" alt="" className={classes.blogimg} />
            </div>
            <div className={`${classes.secondhalf} col-md-6`}>
              <div className={`${classes.author}`}>
                <img src="" alt="" />
                <p>sanjay KANNADASAN</p>
                <img src="" alt="" />
              </div>
              <h3>
                Agan Adhigaram presents popular stories as boardbooks with
                interactive features ideal for little fingers
              </h3>
              <p>
                The popular story of the grandma who sold vadai now has an
                interesting twist. Perhaps one of the most narrated, reproduced,
                and illustrated Tamil children’s stories of all time, it is now
                available as an interactive boardbook.Agan Adhigaram, a
                publishing startup by Chengalpattu-based husband-and-wife duo
                Ramya Karthikeyan and D Sethuram, has brought out this story
                with push, pull, and slide mechanisms aimed at helping little
                fingers develop the pincer grasp.{" "}
              </p>
              <a href="">Read More </a>
            </div>
          </div>
          <div className={`${classes.startupcard} card startupcard row`}>
            <div className={`${classes.firsthalf} col-md-6`}>
              {" "}
              <img src="./images/blog.svg" alt="" className={classes.blogimg} />
            </div>
            <div className={`${classes.secondhalf} col-md-6`}>
              <div className={`${classes.author}`}>
                <img src="" alt="" />
                <p>bujji KANNADASAN</p>
                <img src="" alt="" />
              </div>
              <h3>
                Agan Adhigaram presents popular stories as boardbooks with
                interactive features ideal for little fingers
              </h3>
              <p>
                The popular story of the grandma who sold vadai now has an
                interesting twist. Perhaps one of the most narrated, reproduced,
                and illustrated Tamil children’s stories of all time, it is now
                available as an interactive boardbook.Agan Adhigaram, a
                publishing startup by Chengalpattu-based husband-and-wife duo
                Ramya Karthikeyan and D Sethuram, has brought out this story
                with push, pull, and slide mechanisms aimed at helping little
                fingers develop the pincer grasp.{" "}
              </p>
              <a href="">Read More </a>
            </div>
          </div>
        </OwlCarousel>
      </section>
    </>
  );
};

export default BlogCarosuel;
