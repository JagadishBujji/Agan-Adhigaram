import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartSlice,
});

export default rootReducer;
