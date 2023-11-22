import SideNav from "../../Reusable/SideNav";
import classes from "./BlogBackMove.module.css";

const BlogBackMove = (props) => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
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

        {/* <SideNav className={classes.side}/> */}
      </section>
    </>
  );
};

export default BlogBackMove;
