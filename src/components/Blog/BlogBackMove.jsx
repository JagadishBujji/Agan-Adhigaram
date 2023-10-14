import classes from "./BlogBackMove.module.css";

const BlogBackMove = (props) => {
  return (
    <>
      <section className={classes.movebackmove}>
        <div className={classes.moveback}>
          <a href="" className={classes.home}>
            Home
          </a>
          <span className={classes.slash}>/</span>
          <a href="" className={classes.backblog}>
            {props.move}
          </a>
        </div>
      </section>
    </>
  );
};

export default BlogBackMove;
