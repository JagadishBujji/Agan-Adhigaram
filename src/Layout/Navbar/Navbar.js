import React from "react";
// import logo from "../images/Frame.png";
// import cart from "../images/cart.png";

import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  container-fluid fixed-top">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img
              src="./images/Frame.svg"
              alt=" logo"
              width="60"
              height="auto"
              className="d-inline-block align-text-top"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavBar"
            aria-controls="myNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-centera"
            id="myNavBar"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item dropdown">
                <a href="#" className="blackColor nav-link  " data-bs-toggle="">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="blackColor nav-link  " data-bs-toggle="">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="blackColor nav-link  " data-bs-toggle="">
                  Gallery
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Books
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Events
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="/blog"
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
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="right "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Cart
                </a>
              </li>
              <a href="#" className="cart">
                <img
                  src="./images/cart.svg"
                  alt="Kittivasal logo"
                  width="30"
                  height="auto"
                  className="d-inline-block align-text-top"
                />
              </a>
            </div>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
