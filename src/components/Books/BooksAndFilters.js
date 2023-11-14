import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  startAfter,
  orderBy,
} from "firebase/firestore";

import { db } from "../../services/firebase";

import BasicSelect from "../../Reusable/BasicSelect";
import Select from "../../Reusable/BasicSelect";
import BookItems from "./BookItems";
import BookListView from "./BookListView";

import { warningNotification } from "../../utils/notifications";

import classes from "./BooksAndFilters.module.css";

const BooksAndFilters = () => {
  const pageLimit = 10;
  const [books, setBooks] = useState(null);
  const [viewType, setViewType] = useState("grid");
  const [sort, setSort] = useState("new");
  const [lastDocument, setLastDocument] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    const getPublishedBooks = async () => {
      const booksRef = collection(db, "books");

      let bookQuery = query(
        booksRef,
        where("status", "==", "published"),
        limit(pageLimit)
      );

      if (sort === "new") {
        bookQuery = query(
          booksRef,
          where("status", "==", "published"),
          orderBy("date_published", "desc"),
          limit(pageLimit)
        );
      } else {
        bookQuery = query(
          booksRef,
          where("status", "==", "published"),
          orderBy("date_published", "asc"),
          limit(pageLimit)
        );
      }

      const querySnapshot = await getDocs(bookQuery);

      if (querySnapshot.empty) {
        setBooks([]);
        setShowLoadMore(false);
      } else {
        const bookArr = [];
        querySnapshot.forEach((doc) => {
          bookArr.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log("books: ", bookArr);
        setBooks(bookArr);

        // If there are more documents, update the lastDocument state
        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastDocument(lastVisible);
        if (querySnapshot.size < pageLimit) {
          setShowLoadMore(false);
        } else {
          setShowLoadMore(true);
        }
      }
    };

    const view = localStorage.getItem("viewType"); // if not, null will be there
    if (view) {
      setViewType(view);
    } else {
      localStorage.setItem("viewType", "grid");
      setViewType("grid");
    }

    getPublishedBooks();
  }, [sort]);

  const loadMoreBooks = async () => {
    const booksRef = collection(db, "books");

    let bookQuery;

    if (lastDocument) {
      bookQuery = query(
        booksRef,
        where("status", "==", "published"),
        startAfter(lastDocument),
        limit(pageLimit)
      );
    }

    const querySnapshot = await getDocs(bookQuery);

    if (querySnapshot.empty) {
      warningNotification("No more orders!!!");
      setShowLoadMore(false);
    } else {
      setBooks((prevState) => {
        const bookArr = [...prevState];
        querySnapshot.forEach((doc) => {
          bookArr.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        return [...bookArr];
      });

      // If there are more documents, update the lastDocument state
      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastDocument(lastVisible);
      if (querySnapshot.size < pageLimit) {
        setShowLoadMore(false);
      } else {
        setShowLoadMore(true);
      }
    }
  };

  const handleChangeViewType = (type) => {
    setViewType(type);
    localStorage.setItem("viewType", type);
  };

  return (
    <>
      <section className={`${classes.overallbook}`}>
        <div
          className={`${classes.BooksAndFilters} row container-fluid m-auto`}
        >
          <div className={`${classes.Bookfilters}  col-md-3`}>
            <h1 className={classes.fil}>Filters</h1>
            <div className={`${classes.category}`}>
              <h1>Categories</h1>
              <i class="fa-solid fa-chevron-down"></i>
            </div>

            <a href="" className={`${classes.Loadmore}`}>
              <i class="fa-solid fa-plus"></i> Load More
            </a>
            <a href="" className={`${classes.refine}`}>
              Refine Search
            </a>
            <a href="" className={`${classes.filter}`}>
              {" "}
              Reset Filter
            </a>
          </div>
          <div className={`${classes.Bookshowcase}  col-md-9`}>
            <h1 className={`${classes.booksheading}`}>Books</h1>
            <div className={`${classes.Bookshowcaseheading}`}>
              <p className={classes.interpara}>
                interactive books with push, pull and slide mechanisms !
              </p>
              <div className={`${classes.filtersbooks}`}>
                <BasicSelect
                  value={sort}
                  changeSortValue={(value) => setSort(value)}
                />
                <img
                  src={`./images/${
                    viewType === "grid" ? "ic_gridView" : "ic_gridViewnormal"
                  }.svg`}
                  alt="grid"
                  className={classes.gridviewimgs}
                  onClick={() => handleChangeViewType("grid")}
                />
                {/* src="./images/ic_gridView.svg" */}

                <img
                  src={`./images/${
                    viewType === "list" ? "ic_listVieworange" : "ic_listView"
                  }.svg`}
                  alt="list"
                  className={classes.gridlistimgs}
                  onClick={() => handleChangeViewType("list")}
                />
                {/* src="./images/ic_listVieworange.svg" */}
              </div>
            </div>
            {books === null ? (
              <p>Loading!!!</p>
            ) : books.length === 0 ? (
              <p>No Data Found!!!</p>
            ) : viewType === "grid" ? (
              <div className={`${classes.bookitems} row`}>
                {books.map((book) => (
                  <div key={book.id}>
                    <BookItems book={book} />
                  </div>
                ))}
              </div>
            ) : (
              <div className={`${classes.bookitems} row`}>
                {books.map((book) => (
                  <div key={book.id}>
                    <BookListView book={book} />
                  </div>
                ))}
              </div>
            )}
            {showLoadMore && (
              <div className={classes.load}>
                <button className={classes.loadmore} onClick={loadMoreBooks}>
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BooksAndFilters;
