import Aboutus from "../components/Aboutus";
import Author from "../components/Author";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Welcome from "../components/Welcome";
import Magical from "../components/Magical";
import Values from "../components/Values";
import DynamicCarousel from "../components/DynamicCarousel";

const Home = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <Welcome />
      <Values />
      <DynamicCarousel />
      <Author />
      <Magical />
      {/* people */}
      <Journey />
    </>
  );
};

export default Home;
