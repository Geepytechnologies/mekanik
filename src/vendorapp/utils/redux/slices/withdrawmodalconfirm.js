// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const withdrawmodalconfirmSlice = createSlice({
  name: "withdrawmodalconfirm",
  initialState: {
    showwithdrawmodalconfirm: false,
  },
  reducers: {
    showpaymentwithdrawconfirm: (state) => {
      state.showwithdrawmodalconfirm = true;
    },
    hidepaymentwithdrawconfirm: (state) => {
      state.showwithdrawmodalconfirm = false;
    },
  },
});

export const { showpaymentwithdrawconfirm, hidepaymentwithdrawconfirm } =
  withdrawmodalconfirmSlice.actions;
export default withdrawmodalconfirmSlice.reducer;
