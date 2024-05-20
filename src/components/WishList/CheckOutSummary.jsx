import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import axios from "axios";
import { selectUser } from "../../store/userSlice";
import classes from "./CheckOutSummary.module.css";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase";
import {
  errorNotification,
  infoNotification,
  warningNotification,
} from "../../utils/notifications";
import { removeItem, setCartItems } from "../../store/cartSlice";

const CheckOutSummary = ({ cartItems, totalBookQuantity }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, userDetail } = useSelector(selectUser);
  const { address, email, id, name, phone, city, state, country, pincode } =
    userDetail;

  let delivery = 50; // for India

  const discount = 0;

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.total_price, 0);
  }, [cartItems]);

  const total = useMemo(() => subtotal + delivery, [delivery, subtotal]);

  const addDataToOrdersCollection = async () => {
    let ordered_books = [];
    cartItems.forEach((item) => {
      let temp = {
        id: item.id,
        author: item.author,
        genre: item.genre,
        qty: item.qty,
        title: item.title,
        title_tamil: item.title_tamil,
        mrp_price: item.mrp_price,
        item_price: item.discount_price,
        total_price: item.total_price,
        book_format: item.book_format,
        image: item.images[0],
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
      // total_qty: ordered_books.length,
      total_qty: totalBookQuantity,
      userDetail: {
        address,
        city,
        country,
        email,
        id,
        name,
        phone,
        state,
        pincode,
      },
      payment_method: "online-payment-gateway",
      payment_status: "PAYMENT_INITIATED",
    };

    // console.log("order: ", order, userDetail);

    try {
      const { id: orderId } = await addDoc(collection(db, "orders"), order);

      console.log("orderId: ", orderId);

      const res = await axios.post(
        `https://us-central1-agan-adhigaram.cloudfunctions.net/phonepe/pay`,
        // `http://127.0.0.1:5001/agan-adhigaram/us-central1/phonepe/pay`,
        {
          amount: total,
          userId: id,
          mobile: phone,
          txnId: orderId,
        }
      );

      const result = res.data;

      if (result.success) {
        console.log(
          "result.data: ",
          result.data,
          result.data.instrumentResponse.redirectInfo.url
        );
        infoNotification(result.message);
        window.location.replace(
          result.data.instrumentResponse.redirectInfo.url
        );
        // result.data
        // dispatch(clearCart());
        // successNotification("Order placed successfully!");
        // navigate("/orders");
      } else {
        // failed
        errorNotification(res.data.message);
      }
    } catch (e) {
      errorNotification(e.message);
    }
  };

  const handleCheckoutButton = async (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      let text = "Are you sure to proceed?";
      if (window.confirm(text) === true) {
        // check out of stock
        const promises = [];
        // console.log("cartItems: ", cartItems);
        cartItems.forEach((item) => {
          const docRef = doc(db, "books", item.id);
          promises.push(getDoc(docRef));
        });

        const result = await Promise.all(promises);
        result.forEach((docSnap, i) => {
          const currentProduct = docSnap.data();
          // console.log(
          //   "result-docSnap: ",
          //   cartItems[i],
          //   // currentProduct,
          //   currentProduct.stock
          // );

          if (currentProduct.stock === 0) {
            // out of stock, remove that item
            dispatch(removeItem(cartItems[i]));

            errorNotification(
              `${cartItems[i].title} (${cartItems[i].title_tamil}) is out of stock`
            );
          } else if (currentProduct.stock > 0) {
            // stock is there
            if (cartItems[i].qty > currentProduct.stock) {
              // stock is there but less the qty in cart, so re-calculate
              let currentCartItems = [...cartItems];

              const updatedCartItem = {
                ...currentCartItems[i],
                qty: currentProduct.stock,
                total_price:
                  currentProduct.stock * currentProduct.discount_price,
              };

              currentCartItems[i] = updatedCartItem;

              // currentCartItems = [...updatedCartItems];
              // console.log("cur: ", currentCartItems);

              dispatch(setCartItems(currentCartItems));

              warningNotification(
                `The selected number of quantity is not available lowering your quantity to available number`
              );
            } else {
              // less than available, so buy it directly
              addDataToOrdersCollection();
              // console.log("can buy");
            }
          }
        });
      }
    } else {
      // show login modal
      errorNotification("Please login to complete this order!!!");
    }
  };

  // console.log(subtotal, total);
  return (
    <>
      <div className={`${classes.summary} container`}>
        {country === "India" || country === "" ? (
          <div className={`${classes.CheckOutSummary} row`}>
            <div className={`${classes.CheckOutSummary1} col-md-6`}>
              <h3 className={classes.shoppingheading}>Shopping Summary</h3>
              <p className={classes.shoppingcontent}>
                Almost there! Your chosen books are ready to spark young
                imaginations. Review your selection and when you're all set,
                click 'Checkout' to confirm. Happy reading awaits!
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
                <p className={classes.subtotal}>Delivery (within India)</p>
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
        ) : (
          <>
            <h3 className={classes.shoppingheading}>Shopping Summary</h3>
            <p className={classes.shoppingcontent}>
              Almost there! Your chosen books are ready to spark young
              imaginations. For countries outside India or for any bulk orders,
              please reach out to us by <a href="/contact-us">clicking here</a>.
              Happy reading awaits!
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default CheckOutSummary;
