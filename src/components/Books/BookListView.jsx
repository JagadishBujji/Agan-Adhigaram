import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";

import UsePagination from "../../Reusable/UsePagination";
import {
  addItem,
  addItemQty,
  removeItemQty,
  selectCartItems,
} from "../../store/cartSlice";
import classes from "./BookListView.module.css";

const BookListView = ({ book }) => {
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
    console.log("item", item);
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

  return (
    <>
      <section className={`${classes.listcard}`}>
        <div
          className={`${classes.listview} row container-fluid  `}
          key={book.id}
        >
          <div className={`${classes.list1} col-md-3 col-4`}>
            <Link
              to={`/books/${book.id}`}
              state={book}
              className={classes.openbookitems}
            >
              <img
                src={book.images[0]}
                alt=""
                className={`${classes.vadaiimage}`}
              />
            </Link>
          </div>
          <div className={`${classes.list2} col-md-6 col-4`}>
            <Link
              to={`/books/${book.id}`}
              state={book}
              className={classes.openbookitems}
            >
              <h4 className={classes.Humorous}>{book.genre}</h4>
              <h2 className={classes.vadai}>{book.title}({book.title_tamil})</h2>
              <p className={classes.bookram}>{book.author}</p>
              {/* <p className={classes.bookramdec}>{book.description}</p> */}
            </Link>
          </div>
          <div className={`${classes.list3} col-md-3 col-4`}>
            <p className={classes.amount}>₹{book.discount_price}</p>
            <div className={classes.amountstrickout}>
              <p className={classes.strickout}>₹{book.mrp_price}</p>
              <p className={classes.percentage}>{book.discount_percentage}%</p>
            </div>
            <div className={classes.checkout}>
              {/* <i className={`${classes.cart} fa-solid fa-cart-shopping`}></i> */}
              {noOfItems === 0 ? (
                <i
                  className={`${classes.cart} fa-solid fa-cart-shopping`}
                  onClick={handleAddCartItem}
                ></i>
              ) : (
                <div className={[classes.cartshopping]}>
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
              )}
              {/* <button className={classes.wishlist}>
                  <i className={`${classes.heart} fa-regular fa-heart`}></i>
                  WISHLIST
                </button> */}
            </div>
          </div>
        </div>

        {/* <div className={`${classes.listview} row container-fluid `}>
          <div className={`${classes.list1} col-md-3`}>
            <img
              src="./images/placeholderlistview.svg"
              alt=""
              className={`${classes.vadaiimage}`}
            />
          </div>
          <div className={`${classes.list2} col-md-6`}>
            <h4 className={classes.Humorous}>Humorous</h4>
            <h2 className={classes.vadai}>I</h2>
            <p className={classes.bookram}>Ramya - Sethu Ram</p>
            <p className={classes.bookramdec}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
          </div>
          <div className={`${classes.list3} col-md-3`}>
            <p className={classes.amount}>₹ 499</p>
            <div className={classes.amountstrickout}>
              <p className={classes.strickout}>₹599</p>
              <p className={classes.percentage}>5%</p>
            </div>
            <div className={classes.checkout}>
              <i className={`${classes.cart} fa-solid fa-cart-shopping`}></i>

              <button className={classes.wishlist}>
                <i className={`${classes.heart} fa-regular fa-heart`}></i>
                WISHLIST
              </button>
            </div>
          </div> */}
        {/* </div> */}

        {/* <div className={`${classes.listview} row container-fluid `}>
          <div className={`${classes.list1} col-md-3`}>
            <img
              src="./images/placeholderlistview.svg"
              alt=""
              className={`${classes.vadaiimage}`}
            />
          </div>
          <div className={`${classes.list2} col-md-6`}>
            <h4 className={classes.Humorous}>Humorous</h4>
            <h2 className={classes.vadai}>Kadai Veedhi Kalakalakkum</h2>
            <p className={classes.bookram}>Ramya - Sethu Ram</p>
            <p className={classes.bookramdec}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
          </div>
          <div className={`${classes.list3} col-md-3`}>
            <p className={classes.amount}>₹ 499</p>
            <div className={classes.amountstrickout}>
              <p className={classes.strickout}>₹599</p>
              <p className={classes.percentage}>5%</p>
            </div>
            <div className={classes.checkout}>
              <i className={`${classes.cart} fa-solid fa-cart-shopping`}></i>

              <button className={classes.wishlist}>
                <i className={`${classes.heart} fa-regular fa-heart`}></i>
                WISHLIST
              </button>
            </div>
          </div>
        </div> */}
        {/* <UsePagination /> */}
      </section>
    </>
  );
};

export default BookListView;
