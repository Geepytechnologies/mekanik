// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const acceptjobsuccessmodalSlice = createSlice({
  name: "acceptjobsuccessmodal",
  initialState: {
    acceptjobsuccessmodal: false,
  },
  reducers: {
    showacceptjobsuccess: (state) => {
      state.acceptjobsuccessmodal = true;
    },
    hideacceptjobsuccess: (state) => {
      state.acceptjobsuccessmodal = false;
    },
  },
});

export const { showacceptjobsuccess, hideacceptjobsuccess } =
  acceptjobsuccessmodalSlice.actions;
export default acceptjobsuccessmodalSlice.reducer;
