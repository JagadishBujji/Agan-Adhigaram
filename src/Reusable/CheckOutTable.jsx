import { useDispatch } from "react-redux";
import classes from "./CheckOutTable.module.css";
import { addItemQty, removeItemQty } from "../store/cartSlice";

const CheckOutTable = ({ cartItems }) => {
  const dispatch = useDispatch();
  console.log("cartItems: ", cartItems);
  const handleAddItemQty = (book) => {
    dispatch(addItemQty(book));
  };

  const handleRemoveItemQty = (book) => {
    dispatch(removeItemQty(book));
  };
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
            <div className={classes.qty}>
              <i
                className={`${classes.minus} fa-solid fa-minus`}
                onClick={() => handleRemoveItemQty(item)}
              ></i>
              <span className={classes.tableheadrow2}>{item.qty}</span>
              <i
                className={`${classes.plus} fa-solid fa-plus`}
                onClick={() => handleAddItemQty(item)}
              ></i>
            </div>
            {/* <p className={classes.tableheadrow2}>{item.qty}</p> */}
            <p className={classes.tableheadrow3}>₹ {item.discounted_price}</p>
            <p className={classes.tableheadrow4}>₹ {item.total_price}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default CheckOutTable;
