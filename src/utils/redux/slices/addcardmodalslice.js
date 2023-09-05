// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const addcardmodalSlice = createSlice({
  name: "addcardmodal",
  initialState: {
    showcard: false,
  },
  reducers: {
    showcardmodal: (state) => {
      state.showcard = true;
    },
    hidecardmodal: (state) => {
      state.showcard = false;
    },
  },
});

export const { showcardmodal, hidecardmodal } = addcardmodalSlice.actions;
export default addcardmodalSlice.reducer;
