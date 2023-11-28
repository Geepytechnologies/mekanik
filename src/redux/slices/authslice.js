// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authslice",
  initialState: {
    usertype: null,
  },
  reducers: {
    SETUSERTYPE: (state, action) => {
      state.usertype = action.payload;
    },
  },
});

export const { SETUSERTYPE } = authSlice.actions;
export default authSlice.reducer;
