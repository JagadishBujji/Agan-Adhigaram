import Aboutus from "../components/Aboutus";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Magical from "../components/Magical";
import Value from "../components/Value";

const Home = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      {/* <Value/> */}
      <Magical />
      <Journey />
    </>
  );
};

export default Home;
