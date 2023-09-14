// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const setpaymentmodalSlice = createSlice({
  name: "setpaymentmodal",
  initialState: {
    setpaymentmodal: false,
  },
  reducers: {
    showsetpaymentmodal: (state) => {
      state.setpaymentmodal = true;
    },
    hidesetpaymentmodal: (state) => {
      state.setpaymentmodal = false;
    },
  },
});

export const { showsetpaymentmodal, hidesetpaymentmodal } =
  setpaymentmodalSlice.actions;
export default setpaymentmodalSlice.reducer;
