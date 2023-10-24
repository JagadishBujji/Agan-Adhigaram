import classes from "./WishListItems.module.css";

const WishListItems = () => {
  return (
    <>
      <section className={`${classes.item}`}>
        <div className={`${classes.wishlistheading}`}>
          <h3 className={classes.wishlist}>
            <span className={classes.wish}> My Wishlist</span>{" "}
            <span className={classes.items}>0 items</span>
          </h3>
        </div>
        <div className={`${classes.sadfox}`}>
          <img src="../images/Sadfox.svg" alt="" className={classes.fox} />
          <p className={classes.noitem}>No item in your Wishlist.</p>
          <p className={classes.additem}>Lets add some items from your</p>
          <button className={classes.bookbtn}>Book</button>
        </div>
      </section>
    </>
  );
};

export default WishListItems;
