// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const rsmSlice = createSlice({
  name: "rsm",
  initialState: {
    show: false,
  },
  reducers: {
    showrsm: (state) => {
      state.show = true;
    },
    hidersm: (state) => {
      state.show = false;
    },
  },
});

export const { showrsm, hidersm } = rsmSlice.actions;
export default rsmSlice.reducer;
