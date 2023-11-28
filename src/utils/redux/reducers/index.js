import { combineReducers } from "redux";
import rsmReducer from "../slices/rsmslice";
import rmReducer from "../slices/rmslice";
import addcardReducer from "../slices/addcardmodalslice";
import paymentReducer from "../slices/Paymentmodalslice";
import paysuccessReducer from "../slices/paymentsuccessmodal";
import productdetail from "../slices/productdetailsmodal";
import emergencymodal from "../slices/emergencymodal";
import vehiclemodal from "../slices/addvehiclemodal";
import garagesuccessmodal from "../slices/garagesuccessmodal";
import editsuccessmodal from "../slices/editsuccessmodal";
import updatesuccessmodal from "../slices/updatesuccessmodal";
import userslice from "../slices/userslice";
import authslice from "../slices/authslice";
import chatslice from "../slices/chatslice";

const rootReducer = combineReducers({
  authslice: authslice,
  chatslice: chatslice,
  userslice: userslice,
  rsm: rsmReducer,
  rm: rmReducer,
  addcardmodal: addcardReducer,
  paymentmodal: paymentReducer,
  paymentsuccessmodal: paysuccessReducer,
  productdetail: productdetail,
  emergencymodal: emergencymodal,
  vehiclemodal: vehiclemodal,
  garagesuccessmodal: garagesuccessmodal,
  editsuccessmodal: editsuccessmodal,
  updatesuccessmodal: updatesuccessmodal,
});

export default rootReducer;
