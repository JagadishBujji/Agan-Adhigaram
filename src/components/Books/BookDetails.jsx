import classes from "./BookDetails.module.css";

const BookDetails = () => {
  return (
    <>
      <section>
        <div className={`${classes.bookdetail} row container-fluid m-auto`}>
          <div className={`${classes.bookdetailhalf} col-md-9`}>
            <h4 className={classes.headingdetails}>Details</h4>
            <div className={classes.titlebook}>
              <ul className={classes.details}>
                <li>Book Title</li>
                <li>Author</li>
                <li>Illustrator</li>
                <li>Ediiton Language</li>
                <li>Book Format</li>
                <li>Date Published</li>
                <li>Publisher</li>
                <li>Pages</li>
                <li>Reading Age</li>
              </ul>
              <ul className={classes.details2}>
                <li>Vadai pochae</li>
                <li>Ramya - Sethuram</li>
                <li> Ida Bernice</li>
                <li>Tamil</li>
                <li> Interactive board book</li>
                <li>August 10th 2022</li>
                <li>Agan Adhigaram</li>
                <li>10</li>
                <li>6 months  to 6 years</li>
              </ul>
            </div>
          </div>
          <div className={`${classes.bookdetailcard} col-md-3`}>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
