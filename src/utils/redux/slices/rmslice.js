// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const rmSlice = createSlice({
  name: "rsm",
  initialState: {
    show: false,
  },
  reducers: {
    showrm: (state) => {
      state.show = true;
    },
    hiderm: (state) => {
      state.show = false;
    },
  },
});

export const { showrm, hiderm } = rmSlice.actions;
export default rmSlice.reducer;
