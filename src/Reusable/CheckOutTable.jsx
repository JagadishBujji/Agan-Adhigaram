import classes from "./CheckOutTable.module.css";

const CheckOutTable = ({ cartItems }) => {
  console.log("cartItems: ", cartItems);
  return (
    <>
      <div className={`${classes.CheckOutTable}  container`}>
        <p className={classes.tablehead1}>Item</p>
        <p className={classes.tablehead2}>Quantity</p>
        <p className={classes.tablehead3}>Price</p>
        <p className={classes.tablehead4}>Total Price</p>
      </div>
      <section className={classes.CheckOutoversize}>
        {cartItems.map((item) => (
          <div
            className={`${classes.CheckOutTablerow} container`}
            key={item.id}
          >
            <p className={classes.tableheadrow1}>{item.title}</p>
            <p className={classes.tableheadrow2}>{item.qty}</p>
            <p className={classes.tableheadrow3}>₹ {item.discounted_price}</p>
            <p className={classes.tableheadrow4}>₹ {item.total_price}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default CheckOutTable;
