// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const updatesuccessmodalSlice = createSlice({
  name: "updatesuccessmodal",
  initialState: {
    showupdatesuccessmodal: false,
  },
  reducers: {
    showupdatesuccess: (state) => {
      state.showupdatesuccessmodal = true;
    },
    hideupdatesuccess: (state) => {
      state.showupdatesuccessmodal = false;
    },
  },
});

export const { showupdatesuccess, hideupdatesuccess } =
  updatesuccessmodalSlice.actions;
export default updatesuccessmodalSlice.reducer;
