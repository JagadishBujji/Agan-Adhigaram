import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetail: {
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode:"",
    role: "",
  },
  isAuthenticated: false,
  sort: "",
  filter: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userDetail = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userDetail = {
        id: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        pincode:"",
        country:"",
        state:"",
        city:"",
        role: "",
      };
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectUserDetail = (state) => state.user.userDetail;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer;
