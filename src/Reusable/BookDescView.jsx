import React, { useEffect, useState } from "react";
import "./BookGallerySlider.css";
import { Button } from "@mui/material";
import classes from "./BookDescView.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  addItemQty,
  removeItemQty,
  selectCartItems,
} from "../store/cartSlice";
import { getPreorderLabel, isOutOfStock } from "../utils/preorder";
import { Link } from "react-router-dom";
import BookGallerySlider from "./BookGallerySlider";
// import {}

const BookDescView = ({ book }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCartItems);
  const [noOfItems, setNoOfItems] = useState(0);

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

  const handleAddItemQty = () => {
    dispatch(addItemQty(book));
  };

  const handleRemoveItemQty = () => {
    dispatch(removeItemQty(book));
  };

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // page shows 6 images at a time (2 big, 4 small), the arrows move through all of them
  const images = (book.images || []).filter(Boolean);
  const [firstImage, setFirstImage] = useState(0);
  const indexedImages = images.map((url, index) => ({ url, index }));
  const visibleImages = [
    ...indexedImages.slice(firstImage),
    ...indexedImages.slice(0, firstImage),
  ].slice(0, 6);
  const showPrevImage = () =>
    setFirstImage((i) => (i - 1 + images.length) % images.length);
  const showNextImage = () => setFirstImage((i) => (i + 1) % images.length);

  useEffect(() => {
    setFirstImage(0);
  }, [book.id]);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(images[index]);
  };

  // big image view: next / previous, going round at the ends
  const handelRotationRight = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setClickedImg(images[newIndex]);
  };

  const handelRotationLeft = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setClickedImg(images[newIndex]);
  };

  return (
    <>
      <div className={`${classes.BookDescView} row container-fluid m-auto`}>
        <div className={`${classes.BookDescView1} col-md-5`}>
          <h3 className={classes.bookheading}>
            {book.title}({book.title_tamil})
          </h3>
          <div className={classes.creators}>
            {book.author && (
              <p className={classes.ramyasethuram}>
                Written by <b>{book.author}</b>
              </p>
            )}
            {book.illustrator && (
              <p className={classes.ramyasethuram}>
                Illustrated by <b>{book.illustrator}</b>
              </p>
            )}
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
          {book.is_preorder && (
            <div className={classes.preorderBox}>
              <p className={classes.preorderTitle}>{getPreorderLabel(book)}</p>
              {book.preorder_remark && (
                <p className={classes.preorderRemark}>{book.preorder_remark}</p>
              )}
            </div>
          )}
          <div className={classes.addedbtn}>
            {isOutOfStock(book) ? (
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
                {book.is_preorder ? "Pre-order" : "Add"}
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
          {/* books without an amazon listing have an empty link */}
          {book.amazon_link && (
            <p className={classes.Available}>
              Also Available On{" "}
              <a
                href={book.amazon_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/amazon.svg"
                  alt="Amazon"
                  className={classes.Amazon}
                />
              </a>
            </p>
          )}
        </div>
        <div className={`${classes.BookDescView2} col-md-7`}>
          {/* <div className={`${classes.bookdescimg} row`}>
            <div className={`${classes.bookdescimg1} col-md-6`}></div>
            <div className={`${classes.bookdescimg2} col-md-4`}></div>
          </div> */}
          {images.length > 1 && (
            <button
              type="button"
              className={`${classes.galleryArrow} ${classes.galleryArrowLeft}`}
              onClick={showPrevImage}
              aria-label="Previous image"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}
          {visibleImages.slice(0, 2).map(({ url, index }, i) => (
            <img
              key={index}
              src={url}
              alt={`${book.title} ${index + 1}`}
              className={i === 0 ? classes.imgbook : classes.imgbook2}
              onClick={() => handleClick(url, index)}
            />
          ))}
          {visibleImages.length > 2 && (
            <div className={classes.imgrow}>
              {visibleImages.slice(2).map(({ url, index }) => (
                <img
                  key={index}
                  src={url}
                  alt={`${book.title} ${index + 1}`}
                  className={classes.imgrowbook}
                  onClick={() => handleClick(url, index)}
                />
              ))}
            </div>
          )}
          {images.length > 1 && (
            <button
              type="button"
              className={`${classes.galleryArrow} ${classes.galleryArrowRight}`}
              onClick={showNextImage}
              aria-label="Next image"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}
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
