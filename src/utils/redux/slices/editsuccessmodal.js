// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const editsuccessmodalSlice = createSlice({
  name: "editsuccessmodal",
  initialState: {
    showeditsuccessmodal: false,
  },
  reducers: {
    showeditsuccess: (state) => {
      state.showeditsuccessmodal = true;
    },
    hideeditsuccess: (state) => {
      state.showeditsuccessmodal = false;
    },
  },
});

export const { showeditsuccess, hideeditsuccess } =
  editsuccessmodalSlice.actions;
export default editsuccessmodalSlice.reducer;
