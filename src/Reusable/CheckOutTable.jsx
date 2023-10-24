import classes from "./CheckOutTable.module.css";

const CheckOutTable = () => {
  return (
    <>
      <div className={`${classes.CheckOutTable}  container`}>
        <p className={classes.tablehead1}>Item</p>
        <p className={classes.tablehead2}>Quantity</p>
        <p className={classes.tablehead3}>Price</p>
        <p className={classes.tablehead4}>Total Price</p>
      </div>
      {/* <section className={classes.CheckOutoversize}> */}
      <div className={`${classes.CheckOutTablerow}  container`}>
        <p className={classes.tableheadrow1}>1</p>
        <p className={classes.tableheadrow2}>5</p>
        <p className={classes.tableheadrow3}>₹ 500</p>
        <p className={classes.tableheadrow4}>₹ 1500</p>
      </div>
      {/* </section> */}
    </>
  );
};

export default CheckOutTable;
