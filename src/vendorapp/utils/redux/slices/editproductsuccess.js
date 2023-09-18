// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const editproductsuccessmodalSlice = createSlice({
  name: "editproductsuccessmodal",
  initialState: {
    editproductsuccessmodal: false,
  },
  reducers: {
    showeditproductsuccess: (state) => {
      state.editproductsuccessmodal = true;
    },
    hideeditproductsuccess: (state) => {
      state.editproductsuccessmodal = false;
    },
  },
});

export const { showeditproductsuccess, hideeditproductsuccess } =
  editproductsuccessmodalSlice.actions;
export default editproductsuccessmodalSlice.reducer;
