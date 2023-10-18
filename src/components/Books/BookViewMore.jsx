import { Stack, Typography } from "@mui/material";
import classes from "./BookViewMore.module.css";
import MayCarousel from "../../Reusable/MayCarosuel";

const BookViewMore = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={`${classes.BookViewMore} container m-auto`}
      >
        <Typography variant="h4" className={classes.maybe}>
          Maybe you like it
        </Typography>
        <a href="" className={classes.viewmore}>
          View more{" "}
          <i className={`${classes.arrow} fa-solid fa-arrow-right`}></i>
        </a>
      </Stack>
      <MayCarousel />
    </>
  );
};

export default BookViewMore;
