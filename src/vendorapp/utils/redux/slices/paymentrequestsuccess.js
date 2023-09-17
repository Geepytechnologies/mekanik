// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const paymentrequestsuccessmodalSlice = createSlice({
  name: "paymentrequestsuccessmodal",
  initialState: {
    paymentrequestsuccessmodal: false,
  },
  reducers: {
    showpaymentrequestsuccessmodal: (state) => {
      state.paymentrequestsuccessmodal = true;
    },
    hidepaymentrequestsuccessmodal: (state) => {
      state.paymentrequestsuccessmodal = false;
    },
  },
});

export const {
  showpaymentrequestsuccessmodal,
  hidepaymentrequestsuccessmodal,
} = paymentrequestsuccessmodalSlice.actions;
export default paymentrequestsuccessmodalSlice.reducer;
