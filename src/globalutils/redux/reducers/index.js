import { combineReducers } from "redux";
import usercheckslice from "../slices/usercheckslice";

const rootReducer = combineReducers({
  usercheckslice: usercheckslice,
});

export default rootReducer;
