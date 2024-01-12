import { useSelector } from "react-redux";
import Subscribe from "../Reusable/Subscribe";
import BlogBackMove from "../components/Blog/BlogBackMove";
import CheckOutItems from "../components/WishList/CheckOutItems";
import CheckOutSummary from "../components/WishList/CheckOutSummary";
import classes from "./CheckOut.module.css";
import { selectCartItems } from "../store/cartSlice";

const CheckOut = () => {
  const { cartItems, totalBookQuantity } = useSelector(selectCartItems);
  return (
    <>
      <section className={`${classes.CheckOut}`}>
        <BlogBackMove move="Cart" />
        <CheckOutItems cartItems={cartItems} />
        {cartItems.length > 0 && (
          <CheckOutSummary
            cartItems={cartItems}
            totalBookQuantity={totalBookQuantity}
          />
        )}
        <Subscribe
          circleimg="../images/circleElement (1).svg"
          circle1="../images/circleElement.svg"
        />
      </section>
    </>
  );
};

export default CheckOut;
