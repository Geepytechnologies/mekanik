// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const addvehiclemodal = createSlice({
  name: "addvehiclemodal",
  initialState: {
    showvehicle: false,
  },
  reducers: {
    showvehiclemodal: (state) => {
      state.showvehicle = true;
    },
    hidevehiclemodal: (state) => {
      state.showvehicle = false;
    },
  },
});

export const { showvehiclemodal, hidevehiclemodal } = addvehiclemodal.actions;
export default addvehiclemodal.reducer;
