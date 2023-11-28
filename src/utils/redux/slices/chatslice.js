// src/redux/chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatslice",
  initialState: {
    messages: [],
  },
  reducers: {
    ADD_MESSAGE: (state, action) => {
      state.messages.push(action.payload);
    },
    CLEAR_MESSAGES: (state) => {
      state.messages = [];
    },
  },
});

export const { ADD_MESSAGE, CLEAR_MESSAGES } = chatSlice.actions;
export default chatSlice.reducer;
