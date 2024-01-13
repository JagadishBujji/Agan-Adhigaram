import CheckOutTable from "../../Reusable/CheckOutTable";
import FoxVideo from "../../Reusable/FoxVideo";
import classes from "./CheckOutItems.module.css";
import { Link } from "react-router-dom";

const CheckOutItems = ({ cartItems }) => {
  return (
    <>
      <section className={`${classes.item}`}>
        {cartItems.length === 0 ? (
          <div className={`${classes.sadfox}`}>
            <FoxVideo />
            <p className={classes.noitem}>No item in you cart.</p>
            <p className={classes.additem}>Lets add some items from</p>
            <Link to="/books">
              <button className={classes.bookbtn}>Books</button>
            </Link>
          </div>
        ) : (
          <CheckOutTable cartItems={cartItems} />
        )}
      </section>
    </>
  );
};

export default CheckOutItems;
