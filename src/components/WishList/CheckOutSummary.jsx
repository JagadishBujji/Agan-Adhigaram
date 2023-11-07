import { useMemo } from "react";
import classes from "./CheckOutSummary.module.css";

const CheckOutSummary = ({ cartItems }) => {
  const delivery = 100;

  const discount = 0;

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.total_price, 0);
  }, [cartItems]);

  const total = useMemo(() => subtotal + delivery, [subtotal]);

  // console.log(subtotal, total);
  return (
    <>
      <div className={`${classes.summary}  container`}>
        <div className={`${classes.CheckOutSummary} row`}>
          <div className={`${classes.CheckOutSummary1} col-md-6`}>
            <h3 className={classes.shoppingheading}>Shopping Summary</h3>
            <p className={classes.shoppingcontent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* <p className={classes.shoppingcode}>Have a coupon code?</p>
            <from className={classes.text}>
              <i className="fa-solid fa-ticket"></i>
              <input
                type="text"
                placeholder="Enter promo code here"
                className={classes.promocodeinput}
              />
              <button className={classes.btncode}>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </from> */}
          </div>
          <div className={`${classes.CheckOutSummary2} col-md-6`}>
            <div className={`${classes.total}`}>
              <p className={classes.subtotal}>Subtotal</p>
              <p className={classes.amount}>₹ {subtotal}</p>
            </div>
            {discount !== 0 && (
              <div className={`${classes.total}`}>
                <p className={classes.subtotal}>Discount</p>
                <p className={classes.amount}>₹ 0</p>
              </div>
            )}
            <div className={`${classes.total}`}>
              <p className={classes.subtotal}>delivery</p>
              <p className={classes.amount}>₹ {delivery}</p>
            </div>
            <hr />
            <div className={`${classes.total}`}>
              <p className={classes.subtotal}>Total</p>
              <p className={classes.amount}>₹ {total}</p>
            </div>
            <button className={classes.checkoutbtn}>Checkout</button>
            <a href="" className={classes.Continue}>
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutSummary;
