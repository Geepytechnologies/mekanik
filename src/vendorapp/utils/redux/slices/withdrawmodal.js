// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const withdrawmodalSlice = createSlice({
  name: "withdrawmodal",
  initialState: {
    showwithdrawmodal: false,
  },
  reducers: {
    showpaymentwithdraw: (state) => {
      state.showwithdrawmodal = true;
    },
    hidepaymentwithdraw: (state) => {
      state.showwithdrawmodal = false;
    },
  },
});

export const { showpaymentwithdraw, hidepaymentwithdraw } =
  withdrawmodalSlice.actions;
export default withdrawmodalSlice.reducer;
