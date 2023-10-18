// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authslice",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    AUTHENTICATE: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { AUTHENTICATE } = authSlice.actions;
export default authSlice.reducer;
