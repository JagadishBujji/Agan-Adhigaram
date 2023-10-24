import CheckOutTable from "../../Reusable/CheckOutTable";
import classes from "./CheckOutItems.module.css";

const CheckOutItems = () => {
  return (
    <>
      <section className={`${classes.item}`}>
        <CheckOutTable />
        <div className={`${classes.sadfox}`}>
          <img src="../images/Sadfox.svg" alt="" className={classes.fox} />
          <p className={classes.noitem}>No item in you cart.</p>
          <p className={classes.additem}>Lets add some items from your</p>
          <button className={classes.bookbtn}>Wishlist</button>
        </div>
      </section>
    </>
  );
};

export default CheckOutItems;
