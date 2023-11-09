import { useMemo } from "react";
import { useSelector } from "react-redux";
import { collection, addDoc, doc } from "firebase/firestore";
import { selectUser } from "../../store/userSlice";
import classes from "./CheckOutSummary.module.css";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase";

const CheckOutSummary = ({ cartItems }) => {
  const { userDetail } = useSelector(selectUser);
  const { address, email, id, name, phone } = userDetail;
  console.log("email from details",email)

  const delivery = 100;
  console.log("cartItems", cartItems);
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
      console.log("item", item);
      let temp = {
        author: item.author,
        book_id: item.book_id,
        genre: item.genre,
        qty: item.qty,
        title: item.title,
        total_price: item.total_price,
        item_price:item.discount_percentage
      };
      ordered_books.push(temp);
     
    });
    console.log("ordered_books",ordered_books)
    let ordered_timestamp = new Date().getTime();
    const tryTest= {
      delivery_charge: 0,
    logistics: "",
    order_id: "",
    ordered_books,
    ordered_timestamp,
    price_tax: "",
    status: "booked",
    tax_percentage:0,
    total_item_price: subtotal,
    total_price:  total ,
    total_qty: "",
    userDetail: { address, email, id, name, phone },
  }
  console.log("tryTest",tryTest)
    const docRef = await addDoc(collection(db, "orders"),tryTest);
  };

 
  const handleCheckoutButton = () => {
    addDataToOrdersCollection();
    // const confomationPrompt = prompt("Do you have to proceed?");
    // if (confomationPrompt.toLowerCase() === "yes") {
    //   console.log("success")
     
    // }
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
