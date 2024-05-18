import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { Button } from "@mui/material";
import { db } from "../services/firebase";
import { clearCart } from "../store/cartSlice";
// import ima from '../../public/images/'
import {
  errorNotification,
  successNotification,
  warningNotification,
} from "../utils/notifications";
import axios from "axios";
import classes from "./PaymentStatus.module.css";
import PaymentSuccess from "../Reusable/PaymentSuccess";
import { getTTFB } from "web-vitals";
import { get } from "jquery";

const PaymentStatus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState({
    code: "PAYMENT_INITIATED",
    message: "",
    desc: "",
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const txnId = searchParams.get("txnId");

  // console.log("txnId", txnId);

  async function updateStock(item) {
    const docSnap = doc(db, "books", item.id);
    const getDataBooks = await getDoc(docSnap);

    // console.log("test", item.qty);
    const getData = getDataBooks.data();
    // console.log("before", getData);
    const stockRemaining = parseInt(getData.stock) - item.qty;
    await updateDoc(docSnap, {
      stock: stockRemaining,
    });

    // console.log("after", getDataBooks.data());
  }

  useEffect(() => {
    if (txnId) {
      const docRef = doc(db, "orders", txnId);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Document data:", data);
          if (data.payment_status === "PAYMENT_SUCCESS") {
            setStatus({
              code: data.payment_status,
              message: "Success",
              desc: "",
            });
            dispatch(clearCart());
            successNotification("Order placed successfully!");
            // navigate("/orders");
          } else if (data.payment_status === "PAYMENT_ERROR") {
            // payment failed
            setStatus({
              code: data.payment_status,
              message: "Failure",
              desc: data.payment_transaction_details?.responseCodeDescription,
            });
            errorNotification("Payment Failed, Please try again later!");
          } else if (data.payment_status === "PAYMENT_INITIATED") {
            setStatus({
              code: data.payment_status,
              message: "Pending",
              desc: "",
            });
            warningNotification("Payment Pending, Please wait");
            // s2s callback not initiated, check status api and if payment is pending, then call 5seconds
            axios
              .get(
                // `http://127.0.0.1:5001/agan-adhigaram/us-central1/phonepe/payment-status?txnId=${docSnap.id}`
                `https://us-central1-agan-adhigaram.cloudfunctions.net/phonepe/payment-status?txnId=${docSnap.id}`
              )
              .then((res) => {
                console.log("result: ", res.data);
                if (
                  res.data.code === "PAYMENT_PENDING" ||
                  res.data.code === "INTERNAL_SERVER_ERROR"
                ) {
                  // going option 1: and not option 2, bcs no idea, whether we need to call refund, when payment is pending,
                  // website open - current doc is realtime, so once backend check is confirmed, automatically, this useeffect will run and change to success or failure
                  // website close - backend, call the retry api with 20mins timeout with reconcillation, check status api is checked and once the status is success, then close the function, else if pending, it will check the status until 20mins timeout, once that is done, timeout is returned and that is considered as failure
                  // startInterval(docSnap.id);
                  warningNotification(
                    "Payment Pending, Please wait for some more minutes or check order history after some time."
                  );
                  axios
                    .get(
                      `https://us-central1-agan-adhigaram.cloudfunctions.net/phonepeReconcillation?txnId=${docSnap.id}`
                    )
                    .then((res) => {
                      console.log("phonepeReconcillation result: ", res.data);
                    })
                    .catch((e) => console.log(e));
                } else {
                  // PAYMENT_SUCCESS, PAYMENT_ERROR, PAYMENT_DECLINED, TIMED_OUT - update order status
                  updateOrderStatus(docSnap.id, res.data);
                  // TRANSACTION_NOT_FOUND, AUTHORIZATION_FAILED, BAD_REQUEST - these are developing errors or hack errors, make it to developer concern
                }
              })
              .catch((e) => console.log(e));
          }
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      });

      return () => unsubscribe();
    }
  }, [txnId]);

  // const startInterval = (merchantTxnId) => {
  //   var timer = setInterval(() => {
  //     console.log("5 secs once");
  //     axios
  //       .get(
  //         `https://us-central1-agan-adhigaram.cloudfunctions.net/phonepe/payment-status?txnId=${merchantTxnId}`
  //       )
  //       .then((res) => {
  //         console.log("result: ", res.data);
  //         if (
  //           res.data.code === "PAYMENT_SUCCESS" ||
  //           res.data.code === "PAYMENT_ERROR"
  //         ) {
  //           clearInterval(timer);
  //           updateOrderStatus(merchantTxnId, res.data);
  //         }
  //       })
  //       .catch((e) => console.log(e));
  //   }, 5000);
  // };

  const updateOrderStatus = async (orderId, result) => {
    const orderRef = doc(db, "orders", orderId);
    const getData = await getDoc(orderRef);
    // console.log("get Doc ", getData);

    const getOrderBooksDetails = getData.data();

    getOrderBooksDetails.ordered_books.map((item) => {
      updateStock(item);
    });

    updateDoc(orderRef, {
      payment_status: result.code, // PAYMENT_SUCCESS, PAYMENT_ERROR -> only success/failure callback will be there
      payment_transaction_details: {
        ...result.data,
      },
    })
      .then(() => {
        console.log(
          "order updated... And observor will get the data, and update the status locally"
        );
        // setStatus({
        //   code: result.code,
        //   message: result.code === "PAYMENT_SUCCESS" ? "Success" : "Failure",
        //   desc:
        //     result.code === "PAYMENT_SUCCESS"
        //       ? ""
        //       : result.data.payment_transaction_details
        //           ?.responseCodeDescription,
        // });
        // dispatch(clearCart());
        // successNotification("Order placed successfully!");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className={`${classes.payment}`}>
        {status.code === "PAYMENT_INITIATED" ? (
          <>
            <h2 className={`${classes.pay}`}>Payment Status - Pending</h2>
            <p className={`${classes.pay}`}>
              Please don't close the website until payment is success or failed.
            </p>
            {/* payment loading*/}
            <script
              src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"
            ></script>
            <div className="loading">
              <dotlottie-player
                src="https://lottie.host/2ffbc400-cbca-4214-be86-9fcae02cdf2a/ImKw0dntL5.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                direction="1"
                mode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            {/* payment loading*/}
          </>
        ) : status.code === "PAYMENT_SUCCESS" ? (
          <>
            <h2 className={`${classes.pay}`}>Payment Status - Success</h2>
            {/* payment success */}
            {/* <img src="http://localhost:3000/images/fox_payment_success.webm" /> */}
            <PaymentSuccess />
            {/* <script
              src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"
            ></script>
            <div className="loading">
              <dotlottie-player
                src="https://lottie.host/b65903ba-8a59-4b52-bd47-b5cc785b2043/zkRe8jafuL.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                direction="1"
                mode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div> */}
            {/* payment success */}
            <Button variant="outlined" onClick={() => navigate("/orders")}>
              Go To Orders
            </Button>
          </>
        ) : status.code === "PAYMENT_ERROR" ? (
          <>
            <h2 className={`${classes.pay}`}>Payment Status - Failure</h2>
            <p className={`${classes.pay}`}>Failure Message: {status.desc}</p>
            {/* payment failed*/}
            <script
              src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"
            ></script>
            <div className="loading">
              <dotlottie-player
                src="https://lottie.host/e385d37a-9f97-48e8-a1df-3b9f036242c4/tFNW6AxhAG.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                direction="1"
                mode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            {/* payment failed*/}
            <Button
              variant="outlined"
              className={`${classes.go}`}
              onClick={() => navigate("/checkout")}
            >
              Go To Cart
            </Button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default PaymentStatus;
