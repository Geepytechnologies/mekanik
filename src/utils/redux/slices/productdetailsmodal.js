// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productdetailsmodalSlice = createSlice({
  name: "productdetailmodal",
  initialState: {
    showproductdetail: false,
  },
  reducers: {
    showproductdetailmodal: (state) => {
      state.showproductdetail = true;
    },
    hideproductdetailmodal: (state) => {
      state.showproductdetail = false;
    },
  },
});

export const { showproductdetailmodal, hideproductdetailmodal } =
  productdetailsmodalSlice.actions;
export default productdetailsmodalSlice.reducer;
