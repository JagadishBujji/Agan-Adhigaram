import Aboutus from "../components/Aboutus";
import Author from "../components/Author";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Value from "../components/Value";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <>
      <Hero />
      <Aboutus/>
      <Welcome/>
      <Author/>
      {/* <Value/> */}
      <Journey/>
    </>
  );
};

export default Home;
