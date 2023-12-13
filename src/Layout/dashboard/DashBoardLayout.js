import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const DashBoardLayout = () => {
  return (
    <>
      <Navbar logo="./images/Frame.svg" />
      <Outlet />

      <Footer />
    </>
  );
};

export default DashBoardLayout;
