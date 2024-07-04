import { createSlice } from "@reduxjs/toolkit";
import { errorNotification } from "../utils/notifications";

const initialState = {
  cartItems: [],
  totalBookQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // console.log("totalQuantity-ad1:", state.totalBookQuantity);
      if (state.totalBookQuantity <= 5 - 1) {
        const newItem = action.payload;
        const index = state.cartItems.findIndex(
          (item) => item.id === newItem.id
        );
        if (index === -1 || state.cartItems.length === 0) {
          const updatedNewItem = {
            ...newItem,
            qty: 1,
            discount_price: newItem.discount_price || newItem.item_price, // from orders page
            total_price: newItem.discount_price || newItem.item_price, // item_price - from orders page
          };
          state.totalBookQuantity += 1;
          // console.log("totalQuantity-ad:", state.totalBookQuantity);
          state.cartItems.push(updatedNewItem);
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        } else {
          errorNotification("Already added, check cart page!!!");
        }
      } else {
        errorNotification(
          "Only 5 items, you can add. For bulk/foriegn orders, please contact Agan Adhigaram (+91 9363123828)"
        );
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalBookQuantity = 0;
      localStorage.clear();
    },
    addItemQty: (state, action) => {
      // console.log("totalQuantity-ad:", state.totalBookQuantity);
      if (state.totalBookQuantity <= 5 - 1) {
        const cartItem = action.payload;
        const index = state.cartItems.findIndex((item) => {
          return item.id === cartItem.id;
        });

        if (index !== -1) {
          state.totalBookQuantity += 1;
          state.cartItems[index].qty += 1;
          state.cartItems[index].total_price =
            state.cartItems[index].qty * state.cartItems[index].discount_price;

          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
      } else {
        errorNotification(
          "Only 5 items, you can add. For bulk/foriegn orders, please contact Agan Adhigaram (+91 9363123828)"
        );
      }
    },
    removeItem: (state, action) => {
      const cartItem = action.payload;
      // console.log("removeItem:", cartItem);
      const index = state.cartItems.findIndex(
        (item) => item.id === cartItem.id
      );

      if (index !== -1) {
        const qty = state.cartItems[index].qty;

        state.cartItems = state.cartItems.filter(
          (item) => item.id !== cartItem.id
        );
        state.totalBookQuantity -= qty;

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeItemQty: (state, action) => {
      // console.log("totalQuantity-re:", state.totalBookQuantity);
      const cartItem = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.id === cartItem.id
      );

      if (index !== -1) {
        const qty = state.cartItems[index].qty;
        if (qty === 1) {
          // Use filter to remove the item from the array
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          state.totalBookQuantity -= 1;
        } else {
          // Create a new array with the quantity decremented
          // state.cartItems[index] = {
          //   ...state.cartItems[index],
          //   qty: qty - 1,
          // };
          state.cartItems[index].qty -= 1;
          state.cartItems[index].total_price =
            state.cartItems[index].qty * state.cartItems[index].discount_price;
          state.totalBookQuantity -= 1;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    setCartItems: (state, action) => {
      const cartItems = action.payload;

      if (cartItems) {
        if (cartItems.length > 0) {
          if (cartItems.length === 1) {
            state.totalBookQuantity = cartItems[0].qty;
          } else {
            const totalQty = cartItems.reduce(
              (accumulator, item) => accumulator + item.qty,
              0
            );

            // console.log("totalQuantity: ", totalQty);
            state.totalBookQuantity = totalQty;
          }
        }
        state.cartItems = [...cartItems];
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
      // console.log("cartItems--:", cartItems, state.totalBookQuantity);
    },
  },
});

export const {
  addItem,
  addItemQty,
  clearCart,
  removeItem,
  removeItemQty,
  setCartItems,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart;
export const selectCartSize = (state) => state.cart.totalBookQuantity;

export default cartSlice.reducer;
