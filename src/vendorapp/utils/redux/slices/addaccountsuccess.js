// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const addaccountsuccessmodalSlice = createSlice({
  name: "addaccountsuccessmodal",
  initialState: {
    addaccountsuccessmodal: false,
  },
  reducers: {
    showaddaccountsuccess: (state) => {
      state.addaccountsuccessmodal = true;
    },
    hideaddaccountsuccess: (state) => {
      state.addaccountsuccessmodal = false;
    },
  },
});

export const { showaddaccountsuccess, hideaddaccountsuccess } =
  addaccountsuccessmodalSlice.actions;
export default addaccountsuccessmodalSlice.reducer;
