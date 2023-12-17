import Aboutus from "../components/Aboutus";
import $ from "jquery";
import Author from "../components/Author";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Welcome from "../components/Welcome";
import Magical from "../components/Magical";
import Values from "../components/Values";
import DynamicCarousel from "../components/DynamicCarousel";
import People from "../components/People";
import classes from "./Home.module.css";

const Home = () => {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll").fadeIn();
      } else {
        $("#scroll").fadeOut();
      }
    });
    $("#scroll").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
  return (
    <>
      <section>
        {/* <div className={classes.socialfixed}>
          <a
            href="https://www.instagram.com/agan_adhigaram/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/Instagram-01.png"
              alt=""
              className={classes.insta}
            />
          </a>
          <a href=" https://www.facebook.com/Aganadhigaram" target="_blank">
            <img
              src="/images/Facebook-01.png"
              alt=""
              className={classes.insta}
            />
          </a>
          <a
            href=" https://www.linkedin.com/in/agan-adhigaram-7b6911292/"
            target="_blank"
          >
            <img
              src="/images/Linked in-01-01.png"
              alt=""
              className={classes.insta}
            />
          </a>

          <a
            href="https://twitter.com/AganAdhigaram"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="/images/Twitter-01.png"
              alt=""
              className={classes.insta}
            />
          </a>
          <a href=" https://www.youtube.com/@AganAdhigaram" target="_blank">
            {" "}
            <img
              src="/images/Youtube-01.png"
              alt=""
              className={classes.insta}
            />
          </a>
        </div> */}
        <Hero />
        <Aboutus />
        <Welcome />
        <Values />
        <DynamicCarousel />

        <Author />
        <Magical />
        <People />
        <Journey />
      </section>
      <a href="#" id="scroll" style={{ display: "none" }}>
        <span></span>
      </a>
    </>
  );
};

export default Home;
