import { useEffect, useState } from "react";
import Subscribe from "../Reusable/Subscribe";
import BlogBackMove from "../components/Blog/BlogBackMove";
import Order from "../components/Order/OrderList";
import classes from "./OrdersPage.module.css";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { useSelector } from "react-redux";
import { selectUserDetail } from "../store/userSlice";
import { warningNotification } from "../utils/notifications";

const OrdersPage = () => {
  const pageLimit = 5;
  const userDetail = useSelector(selectUserDetail);
  const [orders, setOrders] = useState(null);
  const [lastDocument, setLastDocument] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState(false);

  console.log("last:", lastDocument);

  useEffect(() => {
    const getOrders = async () => {
      const ordersRef = collection(db, "orders");

      const q = query(
        ordersRef,
        where("userDetail.id", "==", userDetail.id),
        orderBy("ordered_timestamp", "desc"),
        limit(pageLimit)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setOrders([]);
        setShowLoadMore(false);
      } else {
        const arr = [];
        querySnapshot.forEach((doc) => {
          arr.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setOrders(arr);

        // If there are more documents, update the lastDocument state
        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastDocument(lastVisible);
        if (querySnapshot.size < pageLimit) {
          setShowLoadMore(false);
        } else {
          setShowLoadMore(true);
        }
      }
    };

    getOrders();
  }, [userDetail.id]);

  const loadMoreData = async () => {
    const ordersRef = collection(db, "orders");

    let q;
    if (lastDocument) {
      q = query(
        ordersRef,
        where("userDetail.id", "==", userDetail.id),
        orderBy("ordered_timestamp", "desc"),
        startAfter(lastDocument),
        limit(pageLimit)
      );

      const querySnapshot = await getDocs(q);
      console.log(querySnapshot.size, pageLimit);

      if (querySnapshot.empty) {
        warningNotification("No more orders!!!");
        setShowLoadMore(false);
      } else {
        setOrders((prevState) => {
          const arr = [...prevState];
          querySnapshot.forEach((doc) => {
            arr.push({
              id: doc.id,
              ...doc.data(),
            });
          });

          return [...arr];
        });

        // If there are more documents, update the lastDocument state
        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastDocument(lastVisible); // when final reached, this becomes undefined, but we are not setting this, if its empty
        if (querySnapshot.size < pageLimit) {
          setShowLoadMore(false);
        } else {
          setShowLoadMore(true);
        }
      }
    }
  };

  return (
    <>
      <div className={classes.order}>
        <BlogBackMove move="Orders" />
        <div style={{ margin: "50px 0px" }}>
          {orders === null ? (
            <p>Loading!!!</p>
          ) : orders?.length === 0 ? (
            <p>No orders placed yet!!!</p>
          ) : (
            orders.map((order) => <Order key={order.id} order={order} />)
          )}
          {showLoadMore && (
            <div className={classes.load}>
              <button className={classes.loadmore} onClick={loadMoreData}>
                Load more
              </button>
            </div>
          )}
        </div>
        <Subscribe
          circleimg="./images/circleElement (1).svg"
          circle1="./images/circleElement.svg"
        />
      </div>
    </>
  );
};

export default OrdersPage;
