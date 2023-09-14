import { combineReducers } from "redux";
import setpaymentmodal from "../slices/setpaymentmodal";

const rootReducer = combineReducers({
  setpaymentmodal: setpaymentmodal,
});

export default rootReducer;
