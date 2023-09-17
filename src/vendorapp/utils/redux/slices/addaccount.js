// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const addaccountmodalSlice = createSlice({
  name: "addaccountmodal",
  initialState: {
    addaccountmodal: false,
  },
  reducers: {
    showaddaccount: (state) => {
      state.addaccountmodal = true;
    },
    hideaddaccount: (state) => {
      state.addaccountmodal = false;
    },
  },
});

export const { showaddaccount, hideaddaccount } = addaccountmodalSlice.actions;
export default addaccountmodalSlice.reducer;
