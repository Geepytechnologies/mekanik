// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const paymentrequestmodalSlice = createSlice({
  name: "paymentrequestmodal",
  initialState: {
    paymentrequestmodal: false,
  },
  reducers: {
    showpaymentrequestmodal: (state) => {
      state.paymentrequestmodal = true;
    },
    hidepaymentrequestmodal: (state) => {
      state.paymentrequestmodal = false;
    },
  },
});

export const { showpaymentrequestmodal, hidepaymentrequestmodal } =
  paymentrequestmodalSlice.actions;
export default paymentrequestmodalSlice.reducer;
