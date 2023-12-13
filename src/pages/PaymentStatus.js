import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Button } from "@mui/material";
import { db } from "../services/firebase";
import { clearCart } from "../store/cartSlice";
import {
  errorNotification,
  successNotification,
  warningNotification,
} from "../utils/notifications";
import axios from "axios";

const PaymentStatus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState({
    code: "PAYMENT_ERROR",
    message: "",
    desc: "",
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const txnId = searchParams.get("txnId");

  console.log("txnId", txnId);

  useEffect(() => {
    if (txnId) {
      const docRef = doc(db, "orders", txnId);
      getDoc(docRef)
        .then((docSnap) => {
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
                    res.data.code === "PAYMENT_SUCCESS" ||
                    res.data.code === "PAYMENT_ERROR"
                  ) {
                    // update the status in firestore
                    updateOrderStatus(docSnap.id, res.data);
                  } else if (
                    res.data.code === "PAYMENT_PENDING" ||
                    res.data.code === "INTERNAL_SERVER_ERROR"
                  ) {
                    startInterval(docSnap.id);
                  }
                })
                .catch((e) => console.log(e));
            }
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((e) => console.log(e));
    }
  }, [txnId]);

  const startInterval = (merchantTxnId) => {
    var timer = setInterval(() => {
      console.log("5 secs once");
      axios
        .get(
          `https://us-central1-agan-adhigaram.cloudfunctions.net/phonepe/payment-status?txnId=${merchantTxnId}`
        )
        .then((res) => {
          console.log("result: ", res.data);
          if (
            res.data.code === "PAYMENT_SUCCESS" ||
            res.data.code === "PAYMENT_ERROR"
          ) {
            clearInterval(timer);
            updateOrderStatus(merchantTxnId, res.data);
          }
        })
        .catch((e) => console.log(e));
    }, 5000);
  };

  const updateOrderStatus = (orderId, result) => {
    const orderRef = doc(db, "orders", orderId);

    updateDoc(orderRef, {
      payment_status: result.code, // PAYMENT_SUCCESS, PAYMENT_ERROR -> only success/failure callback will be there
      payment_transaction_details: {
        ...result.data,
      },
    })
      .then(() => {
        setStatus({
          code: result.code,
          message: result.code === "PAYMENT_SUCCESS" ? "Success" : "Failure",
          desc:
            result.code === "PAYMENT_SUCCESS"
              ? ""
              : result.data.payment_transaction_details
                  ?.responseCodeDescription,
        });
        dispatch(clearCart());
        successNotification("Order placed successfully!");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {status.code === "PAYMENT_INITIATED" ? (
        <>
          <h2>Payment Status - Pending</h2>
          <p>
            Please don't close the website until payment is success or failure.
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
          <h2>Payment Status - Success</h2>
          {/* payment success */}
          <script
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
          </div>
          {/* payment success */}
          <Button variant="outlined" onClick={() => navigate("/orders")}>
            Go To Orders
          </Button>
        </>
      ) : status.code === "PAYMENT_ERROR" ? (
        <>
          <h2>Payment Status - Failure</h2>
          <p>Failure Message: {status.desc}</p>
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
          <Button variant="outlined" onClick={() => navigate("/checkout")}>
            Go To Cart
          </Button>
        </>
      ) : null}
    </>
  );
};

export default PaymentStatus;
