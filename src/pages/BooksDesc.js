import { useLocation, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import BestQuality from "../Reusable/BestQuality";
import BookDescView from "../Reusable/BookDescView";
import Subscribe from "../Reusable/Subscribe";
import BlogBackMove from "../components/Blog/BlogBackMove";
import BookDetails from "../components/Books/BookDetails";
import classes from "./BooksDesc.module.css";
import { db } from "../services/firebase";
import { useEffect, useState } from "react";

const BooksDesc = () => {
  let { state } = useLocation();
  const [book, setBook] = useState(null);
  const { id } = useParams();
  // console.log("book in books desc: ", state, id);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "books", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBook(docSnap.data()); //use State
      } else {
        setBook(null);
      }
    };
    if (state) {
      setBook(state);
    } else {
      fetchData();
    }
    window.scrollTo(0, 0); // when related book is clicked, it will go top
  }, [id, state]);

  return (
    <>
      <section className={`${classes.BooksDesc}`}>
        <BlogBackMove move="Books" />
        {book ? (
          <>
            <BookDescView book={book} />
            <BookDetails book={book} />
          </>
        ) : (
          <p className="text-center p-5 ">No Such data exists</p>
        )}
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
