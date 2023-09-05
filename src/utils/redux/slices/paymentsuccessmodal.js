// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const paymentsuccessmodalSlice = createSlice({
  name: "paymentsuccessmodal",
  initialState: {
    showpaysuccess: false,
  },
  reducers: {
    showpaysuccessmodal: (state) => {
      state.showpaysuccess = true;
    },
    hidepaysuccessmodal: (state) => {
      state.showpaysuccess = false;
    },
  },
});

export const { showpaysuccessmodal, hidepaysuccessmodal } =
  paymentsuccessmodalSlice.actions;
export default paymentsuccessmodalSlice.reducer;
