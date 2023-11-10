import { useEffect, useState } from "react";
import Subscribe from "../Reusable/Subscribe";
import BlogBackMove from "../components/Blog/BlogBackMove";
import Order from "../components/Order/OrderList";
import classes from "./OrdersPage.module.css";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import { useSelector } from "react-redux";
import { selectUserDetail } from "../store/userSlice";

const OrdersPage = () => {
  const userDetail = useSelector(selectUserDetail);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      const ordersRef = collection(db, "orders");
      const q = query(
        ordersRef,
        where("userDetail.id", "==", userDetail.id),
        orderBy("ordered_timestamp", "desc")
      );
      const querySnapshot = await getDocs(q);
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setOrders(arr);
    };

    getOrders();
  }, []);

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
