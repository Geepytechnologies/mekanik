import { combineReducers } from "redux";
import rsmReducer from "../slices/rsmslice";
import rmReducer from "../slices/rmslice";

const rootReducer = combineReducers({
  rsm: rsmReducer,
  rm: rmReducer,
});

export default rootReducer;
