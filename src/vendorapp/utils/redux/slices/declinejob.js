// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const declinejobmodalSlice = createSlice({
  name: "declinejobmodal",
  initialState: {
    declinejobmodal: false,
  },
  reducers: {
    showdeclinejob: (state) => {
      state.declinejobmodal = true;
    },
    hidedeclinejob: (state) => {
      state.declinejobmodal = false;
    },
  },
});

export const { showdeclinejob, hidedeclinejob } = declinejobmodalSlice.actions;
export default declinejobmodalSlice.reducer;
