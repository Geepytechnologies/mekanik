// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"; // Optional middleware for async actions
import rootReducer from "./reducers";

const middleware = [thunk]; // Add any middleware you need

const store = configureStore({
  reducer: rootReducer,
});

export default store;
