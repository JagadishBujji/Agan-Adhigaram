import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, addDoc, doc } from "firebase/firestore";
import { selectUser } from "../../store/userSlice";
import classes from "./CheckOutSummary.module.css";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../services/firebase";
import {
  errorNotification,
  successNotification,
} from "../../utils/notifications";
import { clearCart } from "../../store/cartSlice";

const CheckOutSummary = ({ cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, userDetail } = useSelector(selectUser);
  const { address, email, id, name, phone } = userDetail;

  const delivery = 100;

  const discount = 0;
  //delivery_charge,logistics,order_id,ordered_books:[{author,book_id,genre,price,qty,title,total_price}],
  //ordered_timestamp,price_tax,status,tax_percentage,total_item_price,total_price,total_qty,
  //userDetails:{address,email,id,name,phone}
  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.total_price, 0);
  }, [cartItems]);
  const total = useMemo(() => subtotal + delivery, [subtotal]);

  const addDataToOrdersCollection = async () => {
    let ordered_books = [];
    cartItems.forEach((item) => {
      let temp = {
        id: item.id,
        author: item.author,
        genre: item.genre,
        qty: item.qty,
        title: item.title,
        item_price: item.discounted_price,
        total_price: item.total_price,
        book_format: item.book_format,
      };
      ordered_books.push(temp);
    });

    let ordered_timestamp = new Date().getTime();
    const order = {
      delivery_charge: delivery,
      logistics: "",
      order_id: "",
      ordered_books,
      ordered_timestamp,
      price_tax: 0,
      status: "booked",
      tax_percentage: 0,
      total_item_price: subtotal,
      total_price: total,
      total_qty: ordered_books.length,
      userDetail: { address, email, id, name, phone },
    };

    // console.log("order: ", order, userDetail);

    try {
      await addDoc(collection(db, "orders"), order);
      dispatch(clearCart());
      successNotification("Order placed successfully!");
      navigate("/orders");
    } catch (e) {
      errorNotification(e.message);
    }
  };

  const handleCheckoutButton = () => {
    if (isAuthenticated) {
      let text = "Are you sure to proceed?";
      if (window.confirm(text) === true) {
        addDataToOrdersCollection();
      }
    } else {
      // show login modal
      errorNotification("Please login to complete this order!!!");
    }
  };

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
            <button
              className={classes.checkoutbtn}
              onClick={handleCheckoutButton}
            >
              Checkout
            </button>
            <Link to="/books" className={classes.Continue}>
              {/* <a href="" > */}
              Continue Shopping
              {/* </a> */}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutSummary;
