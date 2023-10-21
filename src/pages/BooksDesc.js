import BestQuality from "../Reusable/BestQuality";
import BookDescView from "../Reusable/BookDescView";
import Subscribe from "../Reusable/Subscribe";
import BlogBackMove from "../components/Blog/BlogBackMove";
import classes from "./BooksDesc.module.css"

const BooksDesc = () => {
  return (
    <>
      <section className={`${classes.BooksDesc}`}>
        <BlogBackMove move="Books" />
        <BookDescView />
        <BestQuality />
        <Subscribe
          circleimg="../images/circleElement (1).svg"
          circle1="../images/circleElement.svg"
        />
      </section>
    </>
  );
};

export default BooksDesc;
