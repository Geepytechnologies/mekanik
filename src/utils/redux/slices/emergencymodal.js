// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const emergencymodalSlice = createSlice({
  name: "emergencymodal",
  initialState: {
    showemergency: false,
  },
  reducers: {
    showemergencymodal: (state) => {
      state.showemergency = true;
    },
    hideemergencymodal: (state) => {
      state.showemergency = false;
    },
  },
});

export const { showemergencymodal, hideemergencymodal } =
  emergencymodalSlice.actions;
export default emergencymodalSlice.reducer;
