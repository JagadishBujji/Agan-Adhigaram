import logo from "./logo.svg";
import "./App.css";
import Nav from "./Layout/Navbar/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Value from "./components/Value";
import Router from "./routes";
function App() {
  return (
    <div>
      {/* <Nav/>
    <Hero/>
    <Aboutus/>
    <Value/> */}
      <Router />
    </div>
  );
}

export default App;
