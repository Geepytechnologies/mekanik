// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const successmodalSlice = createSlice({
  name: "successmodal",
  initialState: {
    showsuccessmodal: false,
  },
  reducers: {
    showsetpaymentsuccess: (state) => {
      state.showsuccessmodal = true;
    },
    hidesetpaymentsuccess: (state) => {
      state.showsuccessmodal = false;
    },
  },
});

export const { showsetpaymentsuccess, hidesetpaymentsuccess } =
  successmodalSlice.actions;
export default successmodalSlice.reducer;
