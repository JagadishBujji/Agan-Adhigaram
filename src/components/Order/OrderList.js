import { Button, Card, Divider, Grid, Stack } from "@mui/material";
import classes from "./OrderList.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

const Order = ({ order }) => {
  // console.log("order: ", order);
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

  function customTime(n) {
    const storeDate = new Date(n).toLocaleString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return storeDate;
  }

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
                  src={book?.image ? book.image : "./images/VP.jpg"}
                  alt={book.title}
                  className={classes.orderimage}
                />
              </Grid>
              <Grid md={8}>
                <h3 className={classes.title}>
                  {book.title}({book.title_tamil}) - {book.book_format}
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
                <>
                  <div>
                    <div className="row">
                      <div
                        className={`col-12 col-md-10 ${classes.hhGrayBox} ${classes.pt45} ${classes.pb20} `}
                      >
                        <div className={classes.container}>
                          <div
                            className={`${classes.orderTracking} ${classes.completed}`}
                          >
                            <span className={classes.isComplete}></span>
                            <p>
                              Ordered <br />
                              <span>{customTime(order.ordered_timestamp)}</span>
                            </p>
                          </div>
                          <div
                            className={`${classes.orderTracking} ${
                              order.status === "dispatched" && classes.completed
                            } ${
                              order.status === "delivered" && classes.completed
                            }`}
                          >
                            <span className={classes.isComplete}></span>
                            <p>
                              Dispatched <br />
                              <span>
                                {order.dispatched_timestamp
                                  ? customTime(order.dispatched_timestamp)
                                  : ""}
                              </span>
                            </p>
                          </div>
                          <div
                            className={`${classes.orderTracking} ${
                              order.status === "delivered" && classes.completed
                            } `}
                          >
                            <span className={classes.isComplete}></span>
                            <p>
                              Delivered <br />
                              <span>
                                {order.delivered_timestamp
                                  ? customTime(order.delivered_timestamp)
                                  : ""}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
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
              <b>Total Book Price:</b>
              <span className={classes.date}>₹ {order.total_item_price}</span>
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
              <span className={classes.date}>₹ {order.delivery_charge}</span>
            </p>
            <p className={classes.placed}>
              <b>Tax Price:</b>
              <span className={classes.date}>₹ {order.price_tax}</span>
              {/* <span className={classes.date}>₹ 100 (5%)</span> */}
            </p>

            <p className={classes.placed}>
              <b>Total Amount :</b>
              <span className={classes.date}>₹ {total_price}</span>
            </p>
            <p className={classes.placed}>
              <b>Payment Status:</b>
              <span className={classes.date}>
                {order.payment_status === "PAYMENT_SUCCESS"
                  ? "Success"
                  : order.payment_status === "PAYMENT_ERROR"
                  ? "Failure"
                  : order.payment_status}
              </span>
            </p>
            <p className={classes.placed}>
              <b>Order Status:</b>
              <span className={classes.date}>{order.status.toUpperCase()}</span>
            </p>
          </Stack>
        </Card>
      </Stack>
    </>
  );
};

export default Order;
