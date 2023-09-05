// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const paymentmodalSlice = createSlice({
  name: "paymentmodal",
  initialState: {
    show: false,
  },
  reducers: {
    showpaymentmodal: (state) => {
      state.show = true;
    },
    hidepaymentmodal: (state) => {
      state.show = false;
    },
  },
});

export const { showpaymentmodal, hidepaymentmodal } = paymentmodalSlice.actions;
export default paymentmodalSlice.reducer;
