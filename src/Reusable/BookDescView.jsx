import classes from "./BookDescView.module.css";

const BookDescView = () => {
  return (
    <>
      <div className={`${classes.BookDescView} row container-fluid m-auto`}>
        <div className={`${classes.BookDescView} col-md-4`}>
          <h3>Vadai Pochae</h3>
          <div>
            <img src="" alt="" />
            <p>Ramya - Sethuram</p>
          </div>
          <p>
            "வடை போச்சே" (Vadai Pochae) is the classic story with twisted end. 
            This beautifully illustrated and humorous book with interactive
            mechanisms like push, pull and slides invites children on an
            interactive journey. It helps to enhance their hand-eye
            coordination, fine motor skills, cognitive abilities, and
            vocabulary.
          </p>
          <div>
            <p>₹ 499</p>
            <p>₹599</p>
            <p>5%</p>
          </div>
          <div>
            <button></button>
            <button></button>
          </div>
          <p>
            Also Available On <img src="" alt="" />
          </p>
        </div>
        <div className={`${classes.BookDescView} col-md-8`}></div>
      </div>
    </>
  );
};

export default BookDescView;
