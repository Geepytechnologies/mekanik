import { combineReducers } from "redux";
import authslice from "../slices/authslice";

const rootReducer = combineReducers({
  authslice: authslice,
});

export default rootReducer;
