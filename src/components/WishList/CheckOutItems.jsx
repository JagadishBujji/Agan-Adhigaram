import CheckOutTable from "../../Reusable/CheckOutTable";
import classes from "./CheckOutItems.module.css";

const CheckOutItems = ({ cartItems }) => {
  return (
    <>
      <section className={`${classes.item}`}>
        {cartItems.length === 0 ? (
          <div className={`${classes.sadfox}`}>
            <img src="../images/Sadfox.svg" alt="" className={classes.fox} />
            <p className={classes.noitem}>No item in you cart.</p>
            <p className={classes.additem}>Lets add some items from your</p>
            <button className={classes.bookbtn}>Wishlist</button>
          </div>
        ) : (
          <CheckOutTable cartItems={cartItems} />
        )}
      </section>
    </>
  );
};

export default CheckOutItems;
