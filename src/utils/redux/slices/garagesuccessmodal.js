// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const garagesuccessmodalSlice = createSlice({
  name: "garagesuccessmodal",
  initialState: {
    showgaragesuccessmodal: false,
  },
  reducers: {
    showgaragesuccess: (state) => {
      state.showgaragesuccessmodal = true;
    },
    hidegaragesuccess: (state) => {
      state.showgaragesuccessmodal = false;
    },
  },
});

export const { showgaragesuccess, hidegaragesuccess } =
  garagesuccessmodalSlice.actions;
export default garagesuccessmodalSlice.reducer;
