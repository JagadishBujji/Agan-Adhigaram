import classes from "./RelatedBooks.module.css";

const RelatedBooks = () => {
  return (
    <>
      <section>
        <h3 className={classes.realtedbooktitle}>Related books</h3>
        <div className={`${classes.card}`}>
          <img src="../images/rama.svg" alt=" " className={classes.kadi} />
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
          <img src="../images/rama.svg" alt=" " className={classes.kadi} />
          <div className={classes.contant}>
            {" "}
            <p className={classes.booktitle}>Kadai veedhi ka..</p>
            <p className={classes.amount}>₹499</p>
          </div>
        </div>
        <a href="" className={classes.view}>
          View More{" "}
          <i className={`${classes.arrow} fa-solid fa-arrow-right`}></i>
        </a>
      </section>
    </>
  );
};

export default RelatedBooks;
