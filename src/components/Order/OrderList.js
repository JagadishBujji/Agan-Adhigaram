import { Button, Card, Divider, Grid, Stack } from "@mui/material";
import classes from "./OrderList.module.css";
import { ButtonGroup } from "react-bootstrap";

const Order = () => {
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
  return (
    <>
      <Stack className={`${classes.pro} container`}>
        <Card className={classes.cardview}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <p className={classes.placed}>
              <b>Order Placed :</b>
              <span className={classes.date}>09 november 2023</span>
            </p>
            <p className={classes.placed}>
              <b>Total Amount :</b>
              <span className={classes.date}>₹ 599</span>
            </p>
            <p className={classes.placed}>
              <b>Shipping to :</b>
              <span className={classes.date}>Jagadish</span>
            </p>
            <p className={classes.placed}>
              <b>ORDER :</b>
              <span className={classes.date}>1234567mimpmin</span>
            </p>
          </Stack>
          <Divider sx={{ borderColor: "#000" }} />
          <Grid container sx={{ mt: 2 }}>
            <Grid md={4} sx={{ display: "flex" }}>
              <img
                src="./images/VP.jpg"
                alt=""
                className={classes.orderimage}
              />
            </Grid>
            <Grid md={8}>
              <h3 className={classes.title}>
                Vadai Pochae (வடை போச்சே) - Tamil interactive board book for
                children
              </h3>
              <p className={classes.author}>by Ramya</p>
              <p className={classes.price}>₹ 599</p>
              <p className={classes.qty}>
                <b>Qty :</b>
                <span className={classes.number}>2</span>
              </p>
              <Stack spacing={2} direction="row" sx={{ ml: 1 }}>
                <Button variant="contained" sx={cart}>
                  Add to cart
                </Button>
                <Button variant="outlined" sx={viewitem}>
                  View Item
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Stack>
    </>
  );
};

export default Order;
