import RelatedBooks from "../../Reusable/RelatedBooks";
import classes from "./BookDetails.module.css";

const BookDetails = ({ book }) => {
  // console.log("inside bookdesc view", book.images[1]);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  
  return (
    <>
      <section className={classes.bookdetailoverall}>
        <div className={`${classes.bookdetail} row container-fluid m-auto`}>
          <div className={`${classes.bookdetailhalf} col-md-9`}>
            <h4 className={classes.headingdetails}>Details</h4>
            <div className={classes.titlebook}>
              <ul className={classes.details}>
                <li>Book Title</li>
                <li>Author</li>
                <li>Illustrator</li>
                <li>Edition Language</li>
                <li>Book Format</li>
                <li>Date Published</li>
                <li>Publisher</li>
                <li>Pages</li>
                <li>Reading Age</li>
              </ul>
              <ul className={classes.details2}>
                <li>{book.title} ({book.title_tamil})</li>
                <li>{book.author}</li>
                <li>{book.illustrator}</li>
                <li>{book.language}</li>
                <li>{book.book_format}</li>
                <li>
                  {new Date(book.date_published).toLocaleString(
                    "en-IN",
                    options
                  )}
                </li>
                <li>{book.publisher}</li>
                <li>{book.pages}</li>
                <li>{book.reading_age}</li>
              </ul>
            </div>
          </div>
          <div className={`${classes.bookdetailcard} col-md-3`}>
            {book?.related_books && (
              <RelatedBooks relatedBooks={book?.related_books} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
