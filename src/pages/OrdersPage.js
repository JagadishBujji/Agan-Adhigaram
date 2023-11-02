import Subscribe from "../Reusable/Subscribe";
import BlogBackMove from "../components/Blog/BlogBackMove";
import Order from "../components/Order/OrderList";
import classes from "./OrdersPage.module.css";

const OrdersPage = () => {
  return (
    <>
      <div className={classes.order}>
        <BlogBackMove move="Orders" />
        <Order />
        <Subscribe
          circleimg="./images/circleElement (1).svg"
          circle1="./images/circleElement.svg"
        />
      </div>
    </>
  );
};

export default OrdersPage;
