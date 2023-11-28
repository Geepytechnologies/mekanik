// src/redux/usercheckSlice.js
import { createSlice } from "@reduxjs/toolkit";

const usercheckSlice = createSlice({
  name: "usercheckslice",
  initialState: {
    usertype: null,
  },
  reducers: {
    SETUSERTYPE: (state, action) => {
      state.usertype = action.payload;
    },
  },
});

export const { SETUSERTYPE } = usercheckSlice.actions;
export default usercheckSlice.reducer;
