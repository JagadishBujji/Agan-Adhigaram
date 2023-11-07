import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const updatedNewItem = {
        ...newItem,
        qty: 1,
        total_price: newItem.discounted_price,
      };
      state.cartItems.push(updatedNewItem);
    },
    clearCart: (state) => {
      state.cart = [];
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
      }
    },
  },
});

export const { addItem, addItemQty, clearCart, removeItemQty } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart;
export const selectCartSize = (state) => state.cart.cartItems.length;

export default cartSlice.reducer;
