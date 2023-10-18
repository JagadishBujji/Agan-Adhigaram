import React from "react";
import classes from "./UsePagination.module.css"; // Import your CSS module

function Pagination() {
  return (
    <div className={classes.column}>
      <div className={classes.pagination}>
        <a className={classes.suivant} href="#">
          Previous
        </a>
        <PageNumber number={1} className={classes.PageNumber} />
        <PageNumber number={2} />
        <PageNumber number={3} />
        <PageNumber number="...." />

        <a className={classes.suivant} href="#">
          Next
        </a>
      </div>
    </div>
  );
}

function PageNumber(props) {
  return (
    <a className={classes.nombre} href="#">
      {props.number}
    </a>
  );
}

export default Pagination;
