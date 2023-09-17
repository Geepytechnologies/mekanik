// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const withdrawmodalsuccessSlice = createSlice({
  name: "withdrawmodalsuccess",
  initialState: {
    showwithdrawmodalsuccess: false,
  },
  reducers: {
    showpaymentwithdrawsuccess: (state) => {
      state.showwithdrawmodalsuccess = true;
    },
    hidepaymentwithdrawsuccess: (state) => {
      state.showwithdrawmodalsuccess = false;
    },
  },
});

export const { showpaymentwithdrawsuccess, hidepaymentwithdrawsuccess } =
  withdrawmodalsuccessSlice.actions;
export default withdrawmodalsuccessSlice.reducer;
