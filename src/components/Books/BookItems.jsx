import { Link } from "react-router-dom";
import classes from "./BookItems.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  addItemQty,
  removeItemQty,
  selectCartItems,
} from "../../store/cartSlice";

const BookCard = ({ book }) => {
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

  return (
    <div className={`${classes.items} col-md-4`}>
      <div className={classes.allimgicon}>
        <Link
          to={`/books/${book.id}`}
          state={book}
          className={classes.openbookitems}
        >
          <img src={book.images[0]} alt="" className={classes.bookimg} />
        </Link>
        <div className={classes.favheart}>
          {/* <i className={`${classes.heart} fa-regular fa-heart`}></i> */}
          {noOfItems === 0 ? (
            <i
              className={`${classes.cartshopping} fa-solid fa-cart-shopping`}
              onClick={handleAddCartItem}
            ></i>
          ) : (
            <div className={[classes.cartshopping1]}>
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
        </div>
      </div>
      <h5 className={classes.bookgenre}>{book.genre}</h5>
      <h2 className={classes.bookbigtitle}>{book.title}</h2>
      <p className={classes.namebookauthor}>{book.author}</p>
      <p className={classes.bookprice}>
        ₹{book.discount_price}
        <span className={classes.bookcancel}>₹{book.mrp_price}</span>
      </p>
    </div>
  );
};

const BookItems = ({ books }) => {
  return (
    <>
      <div className={`${classes.bookitems} row`}>
        {books?.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>

      {/* <div className={classes.load}>
        <button className={classes.loadmore}>Load more</button>
      </div> */}
    </>
  );
};

export default React.memo(BookItems);
