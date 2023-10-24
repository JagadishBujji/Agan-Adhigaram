import BestQuality from "../Reusable/BestQuality";
import Subscribe from "../Reusable/Subscribe";
import Testimonials from "../Reusable/Testimonials";
import BlogBackMove from "../components/Blog/BlogBackMove";
import CheckOutItems from "../components/WishList/CheckOutItems";
import CheckOutSummary from "../components/WishList/CheckOutSummary";
import WishListItems from "../components/WishList/WishListItems";
import classes from "./CheckOut.module.css";

const CheckOut = () => {
  return (
    <>
      <section className={`${classes.CheckOut}`}>
        <BlogBackMove move="Books" />
        <CheckOutItems />
        <CheckOutSummary />
        <Subscribe
          circleimg="../images/circleElement (1).svg"
          circle1="../images/circleElement.svg"
        />
      </section>
    </>
  );
};

export default CheckOut;
