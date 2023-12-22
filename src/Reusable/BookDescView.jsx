import React, { useEffect, useState } from "react";
import { Avatar, AvatarGroup, Button, Modal } from "@mui/material";
import classes from "./BookDescView.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  addItemQty,
  removeItemQty,
  selectCartItems,
} from "../store/cartSlice";
import { Link } from "react-router-dom";

// import {}

const BookDescView = ({ book }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCartItems);
  const [noOfItems, setNoOfItems] = useState(0);
  const [onImageClick, setOnImageClick] = useState(false);
  const [active, setActive] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(0);

  useEffect(() => {
    const item = cartItems.find((item) => item.id === book.id);
    if (item) {
      setNoOfItems(item.qty);
    } else {
      setNoOfItems(0);
    }
  }, [cartItems, book.id]);

  const handleAddCartItem = () => {
    dispatch(addItem(book));
  };

  const handleOnImageClick = () => {
    setOnImageClick(true);
  };

  const handleAddItemQty = () => {
    dispatch(addItemQty(book));
  };

  const handleRemoveItemQty = () => {
    dispatch(removeItemQty(book));
  };
  // console.log("inside bookdesc view", book.images[1]);

  book.images.map((image, index) =>
    console.log("image and index from book", image, index)
  );
  // gallery
  const slides = [
    {
      eachSlide: "url(book.images[0])",
    },
    {
      eachSlide: "url(book.images[1])",
    },
    {
      eachSlide: "url(book.images[2])",
    },
    {
      eachSlide: "url(book.images[3])",
    },
    {
      eachSlide: "url(book.images[4])",
    },
    {
      eachSlide: "url(book.images[5])",
    },
  ];
  const max = slides.length;

  const intervalBetweenSlides = () =>
    autoplay && setActive(active === max - 1 ? 0 : active + 1);

  React.useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3000);
    return () => clearInterval(interval);
  });

  const toggleAutoPlay = () => setAutoplay(!autoplay);

  const nextOne = () => active < max - 1 && setActive(active + 1);

  const prevOne = () => active > 0 && setActive(active - 1);

  const isActive = (value) => active === value && "active";

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    };
  };

  const renderSlides = () =>
    // {
    // <>
    // <img
    //   src={book.images[0]}
    //   alt=""
    //   className={classes.imgbook}
    //   onClick={handleOnImageClick}
    // />
    // <img
    //   src={book.images[1]}
    //   alt=""
    //   className={classes.imgbook2}
    //   onClick={handleOnImageClick}
    // />

    //   <img
    //     src={book.images[2]}
    //     alt=""
    //     className={classes.imgrowbook}
    //     onClick={handleOnImageClick}
    //   />
    //   <img
    //     src={book.images[3]}
    //     alt=""
    //     className={classes.imgrowbook}
    //     onClick={handleOnImageClick}
    //   />
    //   <img
    //     src={book.images[4]}
    //     alt=""
    //     className={classes.imgrowbook}
    //     onClick={handleOnImageClick}
    //   />
    //   <img
    //     src={book.images[5]}
    //     alt=""
    //     className={classes.imgrowbook}
    //     onClick={handleOnImageClick}
    //   />
    //   </>}
    book.images.map((item, index) => (
      <img src={item} className={classes.eachSlides} key={index} />
    ));

  const renderDots = () =>
    slides.map(
      (
        silde,
        index // check index
      ) => (
        <li className={isActive(index) + " dots"} key={index}>
          <button onClick={() => setActive(index)}>
            <span>&#9679;</span>
          </button>
        </li>
      )
    );

  const cancelSlide = () => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        viewBox="0 0 32 32"
        enable-background="new 0 0 32 32"
        style={{ background: "#fff", borderRadius: "10px" }}
      >
        <circle
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-miterlimit="10"
          cx="16"
          cy="16"
          r="12"
        />
        <line
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-miterlimit="10"
          x1="11.5"
          y1="11.5"
          x2="20.5"
          y2="20.5"
        />
        <line
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-miterlimit="10"
          x1="20.5"
          y1="11.5"
          x2="11.5"
          y2="20.5"
        />
      </svg>
    );
  };

  const renderPlayStop = () =>
    autoplay ? (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ) : (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    );

  const renderArrows = () => (
    <React.Fragment>
      <button
        type="button"
        className={`${classes.arrows} ${classes.prev}`}
        onClick={() => prevOne()}
      >
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button
        type="button"
        className={`${classes.arrows} ${classes.next}`}
        onClick={() => nextOne()}
      >
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </React.Fragment>
  );

  //gallery -end
  return (
    <>
      <div className={`${classes.BookDescView} row container-fluid m-auto`}>
        <div className={`${classes.BookDescView1} col-md-5`}>
          <h3 className={classes.bookheading}>{book.title}</h3>
          <div className={classes.ramya}>
            <AvatarGroup max={2}>
              <Avatar alt="" src="../images/ramya.svg" />
              <Avatar alt="Travis Howard" src="../images/sethu.svg" />
            </AvatarGroup>

            <p className={classes.ramyasethuram}>{book.author}</p>
          </div>
          <p className={classes.Vadai}>{book.description}</p>
          <div className={classes.amount}>
            <p className={classes.amount1}>₹{book.discount_price}</p>
            <p className={classes.amount2}>₹{book.mrp_price}</p>
            <p className={classes.amountpercentage}>
              {book.discount_percentage}%
            </p>
          </div>
          <div className={classes.addedbtn}>
            {noOfItems === 0 ? (
              <Button
                sx={{
                  backgroundColor: "#f19e38",
                  "&:hover": {
                    backgroundColor: "#ffae58", // Change the background color on hover
                  },
                }}
                variant="contained"
                onClick={handleAddCartItem}
              >
                Add
              </Button>
            ) : (
              <>
                <div className={classes.qty}>
                  <i
                    className={`${classes.minus} fa-solid fa-minus`}
                    onClick={handleRemoveItemQty}
                  ></i>
                  <span className={classes.count}>{noOfItems}</span>
                  <i
                    className={`${classes.plus} fa-solid fa-plus`}
                    onClick={handleAddItemQty}
                  ></i>
                </div>

                <Link to="/checkout">
                  <Button
                    sx={{
                      backgroundColor: "#f19e38",
                      marginLeft: "10px",
                      "&:hover": {
                        backgroundColor: "#ffae58", // Change the background color on hover
                      },
                    }}
                    variant="contained"
                  >
                    Go to Cart
                  </Button>
                </Link>
              </>
            )}
           
            {/* <a href="wishlist" className={classes.wishlist}>
              <i className={`${classes.heart} fa-regular fa-heart`}></i>WISHLIST
            </a> */}
          </div>
          <p className={classes.Available}>
            Also Available On{" "}
            <a href="">
              <img
                src="../images/amazon.svg"
                alt=""
                className={classes.Amazon}
              />
            </a>
          </p>
        </div>
        <div className={`${classes.BookDescView2} col-md-7`}>
          {/* <div className={`${classes.bookdescimg} row`}>
            <div className={`${classes.bookdescimg1} col-md-6`}></div>
            <div className={`${classes.bookdescimg2} col-md-4`}></div>
          </div> */}
          <img
            src={book.images[0]}
            alt=""
            className={classes.imgbook}
            onClick={handleOnImageClick}
          />
          <img
            src={book.images[1]}
            alt=""
            className={classes.imgbook2}
            onClick={handleOnImageClick}
          />
          <div className={classes.imgrow}>
            <img
              src={book.images[2]}
              alt=""
              className={classes.imgrowbook}
              onClick={handleOnImageClick}
            />
            <img
              src={book.images[3]}
              alt=""
              className={classes.imgrowbook}
              onClick={handleOnImageClick}
            />
            <img
              src={book.images[4]}
              alt=""
              className={classes.imgrowbook}
              onClick={handleOnImageClick}
            />
            <img
              src={book.images[5]}
              alt=""
              className={classes.imgrowbook}
              onClick={handleOnImageClick}
            />
          </div>
          {onImageClick && (
            <Modal open={onImageClick} onClose={onImageClick}>
              <section className={classes.slider}>
                <div className={classes.wrapper} style={setSliderStyles()}>
                  {renderSlides()}
                </div>
                {renderArrows()}
                <ul className={classes.dotsContainer}>{renderDots()}</ul>
                <button
                  type="button"
                  className={classes.togglePlay}
                  onClick={toggleAutoPlay}
                >
                  {renderPlayStop()}
                </button>
                <span
                  className={classes.cancel}
                  onClick={() => setOnImageClick(false)}
                >
                  {cancelSlide()}
                </span>
              </section>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(BookDescView);
