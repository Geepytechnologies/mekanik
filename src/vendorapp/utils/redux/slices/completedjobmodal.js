// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const completedjobmodalSlice = createSlice({
  name: "completedjobmodal",
  initialState: {
    completedjobmodal: false,
  },
  reducers: {
    showcompletedjob: (state) => {
      state.completedjobmodal = true;
    },
    hidecompletedjob: (state) => {
      state.completedjobmodal = false;
    },
  },
});

export const { showcompletedjob, hidecompletedjob } =
  completedjobmodalSlice.actions;
export default completedjobmodalSlice.reducer;
