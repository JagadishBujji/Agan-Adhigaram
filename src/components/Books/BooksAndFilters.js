import BasicSelect from "../../Reusable/BasicSelect";
import Select from "../../Reusable/BasicSelect";
import BookItems from "./BookItems";
import BookListView from "./BookListView";
import classes from "./BooksAndFilters.module.css";

const BooksAndFilters = () => {
  return (
    <>
      <section className={`${classes.overallbook}`}>
        <div className={`${classes.BooksAndFilters} row container-fluid`}>
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
          <div className={`${classes.Bookshowcase}  col-md-9`}>
            <h1 className={`${classes.booksheading}`}>Books</h1>
            <div className={`${classes.Bookshowcaseheading}`}>
              <p className={classes.interpara}>
                interactive books with push, pull and slide mechanisms !
              </p>
              <div className={`${classes.filtersbooks}`}>
                <BasicSelect />
                <img
                  src="./images/ic_gridViewnormal.svg"
                  alt=""
                  className={classes.gridviewimgs}
                />
                {/* src="./images/ic_gridView.svg" */}

                <img
                  src="./images/ic_listView.svg"
                  alt=""
                  className={classes.gridlistimgs}
                />
                {/* src="./images/ic_listVieworange.svg" */}
              </div>
            </div>
            {/* <BookItems /> */}
            <BookListView />
          </div>
        </div>
      </section>
    </>
  );
};

export default BooksAndFilters;
