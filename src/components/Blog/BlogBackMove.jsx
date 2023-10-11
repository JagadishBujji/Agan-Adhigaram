import classes from "./BlogBackMove.module.css"


const BlogBackMove = () => {
  return (
    <>
      <div className={classes.moveback}>
        <a href="" className={classes.home}>
          Home
        </a>
        <span className={classes.slash}>/</span>
        <a href="" className={classes.backblog}>
          Blog
        </a>
      </div>
    </>
  );
};

export default BlogBackMove;
