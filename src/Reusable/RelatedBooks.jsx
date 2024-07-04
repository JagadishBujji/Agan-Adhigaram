import { useEffect, useState } from "react";
import classes from "./RelatedBooks.module.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { errorNotification } from "../utils/notifications";
import { useNavigate } from "react-router-dom";

const RelatedBooks = ({ relatedBooks }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getRelatedBooks = () => {
      const promises = [];
      relatedBooks.forEach((bookId) => {
        const docRef = doc(db, "books", bookId);
        promises.push(getDoc(docRef));
      });

      Promise.all(promises)
        .then((res) => {
          const arr = [];
          res.forEach((docsnap) => {
            const data = docsnap.data();
            arr.push({
              ...data,
              id: docsnap.id,
            });
          });
          setBooks(arr);
        })
        .catch((e) => {
          console.log(e);
          errorNotification(e.message);
        });
    };

    getRelatedBooks();
  }, [relatedBooks]);

  return (
    <>
      <section>
        <h3 className={classes.realtedbooktitle}>Related books</h3>
        {books.map((book) => (
          <div
            className={`${classes.card}`}
            key={book.id}
            onClick={() => navigate(`/books/${book.id}`, { state: book })}
          >
            <img
              src={book.images[0]}
              alt={book.title}
              className={classes.kadi}
            />
            <div className={classes.contant}>
              <p className={classes.booktitle}>
                {book.title}({book.title_tamil})
              </p>
              <p className={classes.amount}>₹{book.discount_price}</p>
            </div>
          </div>
        ))}
        {/* <div className={`${classes.card}`}>
          <img src="../images/babybook.png" alt=" " className={classes.kadi} />
          <div className={classes.contant}>
            {" "}
            <p className={classes.booktitle}>Kadai veedhi ka..</p>
            <p className={classes.amount}>₹499</p>
          </div>
        </div>
        <div className={`${classes.card}`}>
          <img src="../images/ibook.png" alt=" " className={classes.kadi} />
          <div className={classes.contant}>
            {" "}
            <p className={classes.booktitle}>Kadai veedhi ka..</p>
            <p className={classes.amount}>₹499</p>
          </div>
        </div>
        <div className={`${classes.card}`}>
          <img src="../images/vadai.png" alt=" " className={classes.kadi} />
          <div className={classes.contant}>
            {" "}
            <p className={classes.booktitle}>Kadai veedhi ka..</p>
            <p className={classes.amount}>₹499</p>
          </div>
        </div> */}
        {/* <div className={classes.view}>
          View More{" "}
          <i className={`${classes.arrow} fa-solid fa-arrow-right`}></i>
        </div> */}
      </section>
    </>
  );
};

export default RelatedBooks;
