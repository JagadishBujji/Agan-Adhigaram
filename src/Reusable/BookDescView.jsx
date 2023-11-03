import { Avatar, AvatarGroup } from "@mui/material";
import classes from "./BookDescView.module.css";
// import {}

const BookDescView = ({ book }) => {
  // console.log("inside bookdesc view", book.images[1]);
  return (
    <>
      <div className={`${classes.BookDescView} row container-fluid m-auto`}>
        <div className={`${classes.BookDescView1} col-md-5`}>
          <h3 className={classes.bookheading}>{book.title}</h3>
          <div className={classes.ramya}>
            <AvatarGroup max={2}>
              <Avatar alt="" src="../images/ramya.svg" />
              <Avatar alt="Travis Howard" src="../images/sethu.svg" />
            </AvatarGroup>

            <p className={classes.ramyasethuram}>{book.author}</p>
          </div>
          <p className={classes.Vadai}>{book.description}</p>
          <div className={classes.amount}>
            <p className={classes.amount1}>₹{book.discounted_price}</p>
            <p className={classes.amount2}>₹{book.mrp_price}</p>
            <p className={classes.amountpercentage}>
              {book.discount_percentage}%
            </p>
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
          <img src={book.images[0]} alt="" className={classes.imgbook} />
          <img src={book.images[1]} alt="" className={classes.imgbook2} />
          <div className={classes.imgrow}>
            <img src={book.images[2]} alt="" className={classes.imgrowbook} />
            <img src={book.images[3]} alt="" className={classes.imgrowbook} />
            <img src={book.images[4]} alt="" className={classes.imgrowbook} />
            <img src={book.images[5]} alt="" className={classes.imgrowbook} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDescView;
