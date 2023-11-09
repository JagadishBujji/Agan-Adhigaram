import { createSlice } from "@reduxjs/toolkit";
import { errorNotification } from "../utils/notifications";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === newItem.id);
      if (index === -1 || state.cartItems.length === 0) {
        const updatedNewItem = {
          ...newItem,
          qty: 1,
          discounted_price: newItem.discounted_price || newItem.item_price, // from orders page
          total_price: newItem.discounted_price || newItem.item_price, // item_price - from orders page
        };
        state.cartItems.push(updatedNewItem);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        errorNotification("Already added, check cart page!!!");
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.clear();
    },
    addItemQty: (state, action) => {
      const cartItem = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.id === cartItem.id
      );

      if (index !== -1) {
        state.cartItems[index].qty += 1;
        state.cartItems[index].total_price =
          state.cartItems[index].qty * state.cartItems[index].discounted_price;

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeItemQty: (state, action) => {
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
        } else {
          // Create a new array with the quantity decremented
          // state.cartItems[index] = {
          //   ...state.cartItems[index],
          //   qty: qty - 1,
          // };
          state.cartItems[index].qty -= 1;
          state.cartItems[index].total_price =
            state.cartItems[index].qty *
            state.cartItems[index].discounted_price;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    setCartItems: (state, action) => {
      const cartItems = action.payload;
      if (cartItems) {
        state.cartItems = [...cartItems];
      }
    },
  },
});

export const { addItem, addItemQty, clearCart, removeItemQty, setCartItems } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart;
export const selectCartSize = (state) => state.cart.cartItems.length;

export default cartSlice.reducer;
