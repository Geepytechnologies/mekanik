// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const declinejobsuccessmodalSlice = createSlice({
  name: "declinejobsuccessmodal",
  initialState: {
    declinejobsuccessmodal: false,
  },
  reducers: {
    showdeclinejobsuccess: (state) => {
      state.declinejobsuccessmodal = true;
    },
    hidedeclinejobsuccess: (state) => {
      state.declinejobsuccessmodal = false;
    },
  },
});

export const { showdeclinejobsuccess, hidedeclinejobsuccess } =
  declinejobsuccessmodalSlice.actions;
export default declinejobsuccessmodalSlice.reducer;
