import { Link, useNavigate } from "react-router-dom";
import classes from "./BookItems.module.css";
import React from "react";

const BookItems = ({ books }) => {
  // const navigate = useNavigate();

  return (
    <>
      <div className={`${classes.bookitems} row`}>
        {books.map((book) => (
          <div className={`${classes.items} col-md-4`} key={book.id}>
            <div className={classes.allimgicon}>
              <Link
                to={`/books/${book.id}`}
                state={book}
                className={classes.openbookitems}
              >
                <img src={book.images[0]} alt="" className={classes.bookimg} />
              </Link>
              <div className={classes.favheart}>
                <i className={`${classes.heart} fa-regular fa-heart`}></i>
                <i
                  className={`${classes.cartshopping} fa-solid fa-cart-shopping`}
                ></i>
              </div>
            </div>
            <h5 className={classes.bookgenre}>{book.genre}</h5>
            <h2 className={classes.bookbigtitle}>{book.title}</h2>
            <p className={classes.namebookauthor}>{book.author}</p>
            <p className={classes.bookprice}>
              ₹{book.discounted_price}
              <span className={classes.bookcancel}>₹${book.mrp_price}</span>
            </p>
          </div>
        ))}

        {/* <div className={`${classes.items} col-md-4`}>
          <Link to="/books/2" className={classes.openbookitems}>
            <div className={classes.allimgicon}>
              <img
                src="./images/ibook.png"
                alt=""
                className={classes.bookimg}
              />
              <div className={classes.favheart}>
                <i className={`${classes.heart} fa-regular fa-heart`}></i>
                <i
                  className={`${classes.cartshopping} fa-solid fa-cart-shopping`}
                ></i>
              </div>
            </div>

            <h5 className={classes.booktitle}>Humorous</h5>
            <h2 className={classes.bookbigtitle}>I</h2>
            <p className={classes.namebookauthor}>Ramya - Steffi Stanley</p>
            <p className={classes.bookprice}>
              ₹499<span className={classes.bookcancel}>₹599</span>
            </p>
          </Link>
        </div>
        <div className={`${classes.items} col-md-4`}>
          <Link to="/books/2" className={classes.openbookitems}>
            <div className={classes.allimgicon}>
              <img
                src="./images/babybook.png"
                alt=""
                className={classes.bookimg}
              />
              <div className={classes.favheart}>
                <i className={`${classes.heart} fa-regular fa-heart`}></i>
                <i
                  className={`${classes.cartshopping} fa-solid fa-cart-shopping`}
                ></i>
              </div>
            </div>
            <h5 className={classes.booktitle}>Humorous</h5>
            <h2 className={classes.bookbigtitle}>Kadai Veedhi kalakalakkum</h2>
            <p className={classes.namebookauthor}>Ramya - Bhavya Desai</p>
            <p className={classes.bookprice}>
              ₹499<span className={classes.bookcancel}>₹599</span>
            </p>
          </Link>
        </div> */}
      </div>
      <div className={classes.load}>
        <button className={classes.loadmore}>Load more</button>
      </div>
    </>
  );
};

export default React.memo(BookItems);
