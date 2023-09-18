// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const editproductmodalSlice = createSlice({
  name: "editproductmodal",
  initialState: {
    editproductmodal: false,
  },
  reducers: {
    showeditproduct: (state) => {
      state.editproductmodal = true;
    },
    hideeditproduct: (state) => {
      state.editproductmodal = false;
    },
  },
});

export const { showeditproduct, hideeditproduct } =
  editproductmodalSlice.actions;
export default editproductmodalSlice.reducer;
