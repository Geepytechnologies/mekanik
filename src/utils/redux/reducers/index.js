import { combineReducers } from "redux";
import rsmReducer from "../slices/rsmslice";
import rmReducer from "../slices/rmslice";
import addcardReducer from "../slices/addcardmodalslice";
import paymentReducer from "../slices/Paymentmodalslice";
import paysuccessReducer from "../slices/paymentsuccessmodal";
import productdetail from "../slices/productdetailsmodal";
import emergencymodal from "../slices/emergencymodal";

const rootReducer = combineReducers({
  rsm: rsmReducer,
  rm: rmReducer,
  addcardmodal: addcardReducer,
  paymentmodal: paymentReducer,
  paysuccess: paysuccessReducer,
  productdetail: productdetail,
  emergencymodal: emergencymodal,
});

export default rootReducer;
