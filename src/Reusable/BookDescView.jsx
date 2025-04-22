import React, { useEffect, useState } from "react";
import "./BookGallerySlider.css";
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
import BookGallerySlider from "./BookGallerySlider";
// import {}

const BookDescView = ({ book }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCartItems);
  const [noOfItems, setNoOfItems] = useState(0);
  const [onImageClick, setOnImageClick] = useState(false);
  const [active, setActive] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handleOnImageClick = (index) => {
    setOnImageClick(true);
  };

  const handleAddItemQty = () => {
    dispatch(addItemQty(book));
  };

  const handleRemoveItemQty = () => {
    dispatch(removeItemQty(book));
  };

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(book.images[index]);
  };

  const handelRotationRight = () => {
    const totalLength = book.images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = book.images[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = book.images.filter((item) => {
      return book.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = book.images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = book.images[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = book.images.filter((item) => {
      return book.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className={`${classes.BookDescView} row container-fluid m-auto`}>
        <div className={`${classes.BookDescView1} col-md-5`}>
          <h3 className={classes.bookheading}>
            {book.title}({book.title_tamil})
          </h3>
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

            {book.discount_price !== book.mrp_price && (
              <>
                <p className={classes.amount2}>₹{book.mrp_price}</p>
                <p className={classes.amountpercentage}>
                  {book.discount_percentage}%
                </p>
              </>
            )}
          </div>
          <div className={classes.addedbtn}>
            {book.stock <= 0 ? (
              <p className={`${classes.outofstock}`}>Out of Stock</p>
            ) : noOfItems === 0 ? (
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
            <a href={book.amazon_link} target="_blank">
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
            onClick={() => handleClick(book.images[0], 0)}
          />
          <img
            src={book.images[1]}
            alt=""
            className={classes.imgbook2}
            onClick={() => handleClick(book.images[1], 1)}
          />
          <div className={classes.imgrow}>
            <img
              src={book.images[2]}
              alt=""
              className={classes.imgrowbook}
              onClick={() => handleClick(book.images[2], 2)}
            />
            <img
              src={book.images[3]}
              alt=""
              className={classes.imgrowbook}
              onClick={() => handleClick(book.images[3], 3)}
            />
            <img
              src={book.images[4]}
              alt=""
              className={classes.imgrowbook}
              onClick={() => handleClick(book.images[4], 4)}
            />
            <img
              src={book.images[5]}
              alt=""
              className={classes.imgrowbook}
              onClick={() => handleClick(book.images[5], 5)}
            />
          </div>
          {/* <BookGallerySlider book={book}  /> */}
          {clickedImg && (
            <BookGallerySlider
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(BookDescView);
