import { useLocation, useParams } from "react-router-dom";
import BestQuality from "../Reusable/BestQuality";
import BookDescView from "../Reusable/BookDescView";
import Subscribe from "../Reusable/Subscribe";
import BlogBackMove from "../components/Blog/BlogBackMove";
import BookDetails from "../components/Books/BookDetails";
import classes from "./BooksDesc.module.css";

const BooksDesc = () => {
  const { state } = useLocation();
  const { id } = useParams();
  console.log("book: ", state, id);

  // if book is null, try to get id from useParams and get book from firestore else, just view the book details from state

  return (
    <>
      <section className={`${classes.BooksDesc}`}>
        <BlogBackMove move="Books" />
        <BookDescView />
        <BookDetails />
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

export default BooksDesc;
