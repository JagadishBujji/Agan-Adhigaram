import Aboutus from "../components/Aboutus";
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
  return (
    <>
      <section>
        {/* <div className={classes.socialfixed}>
          <a href="/">
            <img src="/images/Instagram.svg" alt="" className={classes.insta} />
          </a>
          <a href="/">
            <img
              src="/images/facebook.svg"
              alt=""
              className={classes.insta}
            />
          </a>
          <a href="/">
            <img src="/images/linkedin.svg" alt="" className={classes.insta} />
          </a>
          <a href="/">
            {" "}
            <img src="/images/X.svg" alt="" className={classes.insta} />
          </a>
          <a href="/">
            {" "}
            <img src="/images/youtube.svg" alt="" className={classes.insta} />
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
    </>
  );
};

export default Home;
