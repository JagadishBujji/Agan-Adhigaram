import { Button, Card, Divider, Grid, Stack } from "@mui/material";
import classes from "./OrderList.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

const Order = ({ order }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = { year: "numeric", month: "long", day: "2-digit" };

  const { ordered_timestamp, total_price, userDetail, id, ordered_books } =
    order;

  const cart = {
    background: "#f19e38",
    color: "#fff",
    "&:hover": {
      background: "#f19e38",
      color: "#fff",
    },
  };
  const viewitem = {
    border: "1px solid #f19e38",
    color: "#f19e38",
    "&:hover": {
      border: "1px solid #f19e38",
      color: "#f19e38",
    },
  };
  const stack = {
    marginTop: "10px",
    "@media (max-width: 768px)": {
      display: "flex",
      justifyContent: "start",
      alignItems: "start",
      flexDirection: "column",
      marginTop: "10px",
    },
  };

  return (
    <>
      <Stack className={`${classes.pro} container`}>
        <Card className={classes.cardview}>
          {/* <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={stack}
          >
            <p className={classes.placed}>
              <b>Order Placed :</b>
              <span className={classes.date}>
                {new Date(ordered_timestamp).toLocaleDateString(
                  "en-US",
                  options
                )}
              </span>
            </p>
            <p className={classes.placed}>
              <b>Total Amount :</b>
              <span className={classes.date}>₹ {total_price}</span>
            </p>
            <p className={classes.placed}>
              <b>Shipping to :</b>
              <span className={classes.date}>{userDetail.name}</span>
            </p>
            <p className={classes.placed}>
              <b>ORDER ID:</b>
              <span className={classes.date}>{id}</span>
            </p>
          </Stack> */}
          {/* <Divider sx={{ borderColor: "#000" }} /> */}
          {ordered_books.map((book) => (
            <Grid container sx={{ mt: 2 }} key={book.id}>
              <Grid
                md={4}
                sx={{ display: "flex" }}
                onClick={() => navigate(`/books/${book.id}`)}
              >
                <img
                  src="./images/VP.jpg"
                  alt=""
                  className={classes.orderimage}
                />
              </Grid>
              <Grid md={8}>
                <h3 className={classes.title}>
                  {book.title} - {book.book_format}
                </h3>
                <p className={classes.author}>by {book.author}</p>
                <p className={classes.price}>₹ {book.total_price}</p>
                <p className={classes.qty}>
                  <b>Qty :</b>
                  <span className={classes.number}>{book.qty}</span>
                </p>

                <Stack spacing={2} direction="row" sx={{ ml: 1 }}>
                  <Button
                    variant="contained"
                    sx={cart}
                    onClick={() => {
                      dispatch(addItem(book));
                    }}
                  >
                    Add to cart
                  </Button>
                  <Button
                    variant="outlined"
                    sx={viewitem}
                    onClick={() => navigate(`/books/${book.id}`)}
                  >
                    View Item
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          ))}
          <Divider sx={{ borderColor: "#000", mt: 1 }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            sx={stack}
          >
            <p className={classes.placed}>
              <b>Order Placed :</b>
              <span className={classes.date}>
                {new Date(ordered_timestamp).toLocaleDateString(
                  "en-US",
                  options
                )}
              </span>
            </p>
            <p className={classes.placed}>
              <b>Total Amount :</b>
              <span className={classes.date}>₹ {total_price}</span>
            </p>
            <p className={classes.placed}>
              <b>Shipping to :</b>
              <span className={classes.date}>{userDetail.name}</span>
            </p>
            <p className={classes.placed}>
              <b>ORDER ID:</b>
              <span className={classes.date}>{id}</span>
            </p>
            <p className={classes.placed}>
              <b>Delivery Charge:</b>
              <span className={classes.date}>₹ 100</span>
            </p>
            <p className={classes.placed}>
              <b>Tax Price:</b>
              <span className={classes.date}>₹ 100 (5%)</span>
            </p>
            <p className={classes.placed}>
              <b>Total Price:</b>
              <span className={classes.date}>₹ 100</span>
            </p>
          </Stack>
        </Card>
      </Stack>
    </>
  );
};

export default Order;
