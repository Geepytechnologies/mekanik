// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const completejobmodalSlice = createSlice({
  name: "completejobmodal",
  initialState: {
    completejobmodal: false,
  },
  reducers: {
    showcompletejob: (state) => {
      state.completejobmodal = true;
    },
    hidecompletejob: (state) => {
      state.completejobmodal = false;
    },
  },
});

export const { showcompletejob, hidecompletejob } =
  completejobmodalSlice.actions;
export default completejobmodalSlice.reducer;
