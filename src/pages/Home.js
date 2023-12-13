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
        <div className={classes.socialfixed}>
          <a href="https://www.instagram.com/agan_adhigaram/" target="_blank" rel="noreferrer">
            <img
              src="/images/Black Insta.svg"
              alt=""
              className={classes.insta}
            />
          </a>
          <a href=" https://www.facebook.com/Aganadhigaram" target="_blank">
            <img
              src="/images/Black Facebook.svg"
              alt=""
              className={classes.insta}
            />
          </a>
          <a
            href=" https://www.linkedin.com/in/agan-adhigaram-7b6911292/"
            target="_blank"
          >
            <img
              src="/images/Black linkedin.svg"
              alt=""
              className={classes.insta}
            />
          </a>
          <a href="https://twitter.com/AganAdhigaram" target="_blank" rel="noreferrer">
            {" "}
            <img src="/images/Black X.svg" alt="" className={classes.insta} />
          </a>
          <a href=" https://www.youtube.com/@AganAdhigaram" target="_blank">
            {" "}
            <img
              src="/images/Black youtube.svg"
              alt=""
              className={classes.insta}
            />
          </a>
        </div>
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
