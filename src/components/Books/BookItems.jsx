import classes from "./BookItems.module.css";

const BookItems = () => {
  return (
    <>
      <div className={`${classes.bookitems} row `}>
        <div className={`${classes.items} col-md-4`}>
          <div className={classes.allimgicon}>
            <img src="./images/vadai.png" alt="" className={classes.bookimg} />
            <div className={classes.favheart}>
              <i className={`${classes.heart} fa-regular fa-heart`}></i>
              <i
                className={`${classes.cartshopping} fa-solid fa-cart-shopping`}
              ></i>
            </div>
          </div>
          <h5 className={classes.booktitle}>Humorous</h5>
          <h2 className={classes.bookbigtitle}>Vadai Pochae</h2>
          <p className={classes.namebookauthor}>Ramya - Sethuram</p>
          <p className={classes.bookprice}>
            ₹499<span className={classes.bookcancel}>₹599</span>
          </p>
        </div>
        <div className={`${classes.items} col-md-4`}>
          <div className={classes.allimgicon}>
            <img src="./images/ibook.png" alt="" className={classes.bookimg} />
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
        </div>
        <div className={`${classes.items} col-md-4`}>
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
        </div>
      </div>
      <div className={classes.load}>
        <button className={classes.loadmore}>Load more</button>
      </div>
    </>
  );
};

export default BookItems;
