import BestQuality from "../Reusable/BestQuality";
import Subscribe from "../Reusable/Subscribe";
import BlogBackMove from "../components/Blog/BlogBackMove";
import BooksAndFilters from "../components/Books/BooksAndFilters";
import classes from "./Books.module.css"

const Books = () => {
  return (
    <>
      <div className={classes.booksmain}>
        <BlogBackMove move="Books" />
        <BooksAndFilters/>
        <BestQuality/>
        <Subscribe/>
      </div>
    </>
  );
};

export default Books;
