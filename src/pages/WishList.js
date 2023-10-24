import BestQuality from "../Reusable/BestQuality";
import Subscribe from "../Reusable/Subscribe";
import Testimonials from "../Reusable/Testimonials";
import BlogBackMove from "../components/Blog/BlogBackMove";
import WishListItems from "../components/WishList/WishListItems";
import classes from "./WishList.module.css";

const WishList = () => {
  return (
    <>
      <section className={`${classes.wishlist}`}>
        <BlogBackMove move="Books" />
        <WishListItems />
        <Testimonials />
        <BestQuality
          quick="../images/Quick.svg"
          Secure="../images/Secure.svg"
          Best="../images/bestquality.svg"
          Return="../images/return.svg"
        />
        <Subscribe
          circleimg="../images/circleElement (1).svg"
          circle1="../images/circleElement.svg"
        />
      </section>
    </>
  );
};

export default WishList;
