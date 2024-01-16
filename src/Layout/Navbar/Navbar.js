// import logo from "../images/Frame.png";
// import cart from "../images/cart.png";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginModal from "../../Reusable/LoginModal";
import SignupModal from "../../Reusable/SignupModal";
import ProfileMenu from "../../Reusable/ProfileMenu";
import { selectUser } from "../../store/userSlice";

import "./Navbar.css";
import { selectCartSize } from "../../store/cartSlice";

import { logout } from "../../api/auth";

function Navbar(props) {
  const { isAuthenticated, userDetail } = useSelector(selectUser);
  const cartSize = useSelector(selectCartSize);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout(true);
    closeMenu();
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
      <nav className="navbar navbar-expand-lg  container-fluid ">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              src="./images/Logo_Agan.png"
              alt=" logo"
              width="60"
              height="80"
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
              isMenuOpen ? "show" : ""
            }`}
            id="myNavBar1"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item dropdown" onClick={closeMenu}>
                <Link
                  to="/"
                  className="blackColor nav-link  "
                  data-bs-toggle=""
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={closeMenu}>
                <a
                  href="#aboutus"
                  className="blackColor nav-link  "
                  data-bs-toggle=""
                >
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown" onClick={closeMenu}>
                <a
                  href="#gallery"
                  className="blackColor nav-link  "
                  data-bs-toggle=""
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item dropdown" onClick={closeMenu}>
                <Link
                  to="author-illustrator"
                  className="nav-link "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Creators
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={closeMenu}>
                <Link
                  to="/books"
                  className="nav-link "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Books
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={closeMenu}>
                <Link
                  to="/blog"
                  className="nav-link "
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  Blog
                </Link>
              </li>
              {isMenuOpen && (
                <li className="nav-item dropdown" onClick={closeMenu}>
                  <Link
                    to="checkout"
                    className="nav-link "
                    role="button"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    Cart
                  </Link>
                </li>
              )}
              {isMenuOpen &&
                (isAuthenticated ? (
                  <>
                    <li className="nav-item dropdown" onClick={closeMenu}>
                      <Link
                        to="profile"
                        className="nav-link "
                        role="button"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item dropdown" onClick={closeMenu}>
                      <Link
                        to="orders"
                        className="nav-link "
                        role="button"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        Orders
                      </Link>
                    </li>
                    <li className="nav-item dropdown" onClick={handleLogout}>
                      <Link
                        className="nav-link "
                        role="button"
                        data-bs-toggle=""
                        aria-expanded="false"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <LoginModal onClick={closeMenu} />
                ))}
            </ul>
            <div className="corner">
              {!isMenuOpen && (
                <>
                  <Link to="/checkout" className="cart">
                    <IconButton aria-label="cart">
                      <StyledBadge
                        badgeContent={cartSize}
                        sx={{ color: "#f19e38" }}
                      >
                        <ShoppingCartIcon />
                      </StyledBadge>
                    </IconButton>
                  </Link>
                  {isAuthenticated ? (
                    <ProfileMenu userDetail={userDetail} />
                  ) : (
                    <>
                      <LoginModal />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
