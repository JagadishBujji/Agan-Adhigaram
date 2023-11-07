import BestQuality from "../Reusable/BestQuality";
import Subscribe from "../Reusable/Subscribe";
import Testimonials from "../Reusable/Testimonials";
import BlogBackMove from "../components/Blog/BlogBackMove";
import BookViewMore from "../components/Books/BookViewMore";
import BooksAndFilters from "../components/Books/BooksAndFilters";
import classes from "./Books.module.css";

const Books = () => {
  return (
    <>
      <div className={classes.booksmain}>
        <BlogBackMove move="Books" />
        <BooksAndFilters />
        <BookViewMore />
        <Testimonials />
        <BestQuality
          quick="./images/Quick.svg"
          Secure="./images/Secure.svg"
          Best="./images/bestquality.svg"
          Return="./images/return.svg"
        />
        <Subscribe
          circleimg="./images/circleElement (1).svg"
          circle1="./images/circleElement.svg"
        />
      </div>
    </>
  );
};

export default Books;
