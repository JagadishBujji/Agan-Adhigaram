import classes from "./BookDescView.module.css";

const BookDescView = () => {
  return (
    <>
      <div className={`${classes.BookDescView} row container-fluid m-auto`}>
        <div className={`${classes.BookDescView1} col-md-5`}>
          <h3 className={classes.bookheading}>Vadai Pochae</h3>
          <div className={classes.ramya}>
            <img src="../images/rama.svg" alt="" className={classes.bookimg} />
            <p className={classes.ramyasethuram}>Ramya - Sethuram</p>
          </div>
          <p className={classes.Vadai}>
            "வடை போச்சே" (Vadai Pochae) is the classic story with twisted end. 
            This beautifully illustrated and humorous book with interactive
            mechanisms like push, pull and slides invites children on an
            interactive journey. It helps to enhance their hand-eye
            coordination, fine motor skills, cognitive abilities, and
            vocabulary.
          </p>
          <div className={classes.amount}>
            <p className={classes.amount1}>₹ 499</p>
            <p className={classes.amount2}>₹599</p>
            <p className={classes.amountpercentage}>5%</p>
          </div>
          <div className={classes.addedbtn}>
            <div className={classes.qty}>
              <i className={`${classes.minus} fa-solid fa-minus`}></i>
              <span className={classes.count}>0</span>
              <i className={`${classes.plus} fa-solid fa-plus`}></i>
            </div>
            <a href="wishlist" className={classes.wishlist}>
              <i className={`${classes.heart} fa-regular fa-heart`}></i>WISHLIST
            </a>
          </div>
          <p className={classes.Available}>
            Also Available On{" "}
            <a href="">
              <img
                src="../images/amazon.svg"
                alt=""
                className={classes.Amazon}
              />
            </a>
          </p>
        </div>
        <div className={`${classes.BookDescView2} col-md-7`}>
          <div className={`${classes.bookdescimg} row`}>
            <div className={`${classes.bookdescimg1} col-md-6`}></div>
            <div className={`${classes.bookdescimg2} col-md-4`}></div>
          </div>
          <img src="../images/vadai.png" alt="" className={classes.imgbook} />
          <img
            src="../images/vadaibook.png"
            alt=""
            className={classes.imgbook2}
          />
          <div className={classes.imgrow}>
            <img
              src="../images/smallvadibook.svg"
              alt=""
              className={classes.imgrowbook}
            />
            <img
              src="../images/vadaileaf.svg"
              alt=""
              className={classes.imgrowbook}
            />
            <img
              src="../images/backvadipostion.svg"
              alt=""
              className={classes.imgrowbook}
            />
            <img
              src="../images/frontvadaipostion.svg"
              alt=""
              className={classes.imgrowbook}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDescView;
