// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const acceptjobmodalSlice = createSlice({
  name: "acceptjobmodal",
  initialState: {
    acceptjobmodal: false,
  },
  reducers: {
    showacceptjob: (state) => {
      state.acceptjobmodal = true;
    },
    hideacceptjob: (state) => {
      state.acceptjobmodal = false;
    },
  },
});

export const { showacceptjob, hideacceptjob } = acceptjobmodalSlice.actions;
export default acceptjobmodalSlice.reducer;
