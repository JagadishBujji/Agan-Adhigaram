import React from "react";
// import logo from "../images/Frame.png";
// import cart from "../images/cart.png";

import "./Navbar.css";
import { useState } from "react";
import LoginModal from "../../Reusable/LoginModal";
import SignupModal from "../../Reusable/SignupModal";
import ProfileMenu from "../../Reusable/ProfileMenu";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      background: "#000",
    },
  }));

  return (
    <div>
      <nav className="navbar navbar-expand-lg  container-fluid fixed-top">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img
              src="./images/Frame.svg"
              // {props.logo}
              alt=" logo"
              width="60"
              height="auto"
              className="d-inline-block align-text-top"
            />
          </a>

          <button
            onClick={toggleMenu}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavBar1"
            aria-controls="myNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-center${
              isMenuOpen ? " show" : ""
            }`}
            id="myNavBar1"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item dropdown">
                <a href="/" className="blackColor nav-link  " data-bs-toggle="">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#aboutus"
                  className="blackColor nav-link  "
                  data-bs-toggle=""
                >
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#gallery"
                  className="blackColor nav-link  "
                  data-bs-toggle=""
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="author-illustrator"
                  className="nav-link "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Authors and Illustrators
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="books"
                  className="nav-link "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Books
                </a>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Books
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://amzn.eu/d/1yoJQiR"
                      target="_blank"
                    >
                      Vadai Pochae
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://amzn.eu/d/aZDzE8G"
                      target="_blank"
                    >
                      I
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Events
                </a>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  href="blog"
                  className="nav-link "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Blog
                </a>
              </li>
            </ul>
            <div className="corner">
              {/* <li className="nav-item dropdown">
                <a
                  href=""
                  books/checkout
                  className="right "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Cart
                </a>
              </li> */}
              <a href="books/wishlist" className="cart">
                {/* <img
                  src="./images/cart.svg"
                  alt="Kittivasal logo"
                  width="30"
                  height="auto"
                  className="d-inline-block align-text-top"
                /> */}
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} sx={{ color: "#f19e38" }}>
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </a>
              <LoginModal />
              <SignupModal />
              {/* when login the website then only we want to view */}
              {/* <ProfileMenu />  */}
            </div>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
