import React, { Component } from "react";
import classes from "./SideNav.module.css"; // Import your CSS module

class SideNav extends Component {
  state = {
    isSidenavOpen: false,
  };

  openNav = () => {
    this.setState({ isSidenavOpen: true });
  };

  closeNav = () => {
    this.setState({ isSidenavOpen: false });
  };

  render() {
    return (
      <div>
        <span className={classes.openButton} onClick={this.openNav}>
          <i class="fa-solid fa-filter"></i>
        </span>

        {/* Sidebar */}
        <div
          id="mySidenav"
          className={`${classes.sidenav} ${
            this.state.isSidenavOpen ? classes.open : ""
          }`}
        >
          <a
            href="javascript:void(0)"
            className={classes.closebtn}
            onClick={this.closeNav}
          >
            <i class="fa-solid fa-filter-circle-xmark"></i>
          </a>
          <div className={`${classes.Bookfilters}  col-md-3`}>
            <h1 className={classes.fil}>Filters</h1>
            <div className={`${classes.category}`}>
              <h1>Categories</h1>
              <i class="fa-solid fa-chevron-down"></i>
            </div>

            <a href="" className={`${classes.Loadmore}`}>
              <i class="fa-solid fa-plus"></i> Load More
            </a>
            <a href="" className={`${classes.refine}`}>
              Refine Search
            </a>
            <a href="" className={`${classes.filter}`}>
              {" "}
              Reset Filter
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
