import { combineReducers } from "redux";
import setpaymentmodal from "../slices/setpaymentmodal";
import successmodal from "../slices/successmodal";
import completejobmodal from "../slices/completejobmodal";
import completedjobmodal from "../slices/completedjobmodal";
import declinejobsuccess from "../slices/declinejobsuccess";
import declinejob from "../slices/declinejob";
import acceptjobsuccess from "../slices/acceptjobsuccess";
import acceptjob from "../slices/acceptjob";
import withdrawmodal from "../slices/withdrawmodal";
import withdrawmodalconfirm from "../slices/withdrawmodalconfirm";
import withdrawmodalsuccess from "../slices/withdrawmodalsuccess";
import addaccount from "../slices/addaccount";
import addaccountsuccess from "../slices/addaccountsuccess";
import editsuccessmodal from "../slices/editsuccessmodal";
import updatesuccessmodal from "../slices/updatesuccessmodal";
import paymentrequest from "../slices/paymentrequest";
import paymentrequestsuccess from "../slices/paymentrequestsuccess";
import productdetailsmodal from "../slices/productdetailsmodal";
import editproduct from "../slices/editproduct";
import editproductsuccess from "../slices/editproductsuccess";
import userslice from "../slices/userslice";

const rootReducer = combineReducers({
  userslice: userslice,
  setpaymentmodal: setpaymentmodal,
  successmodal: successmodal,
  completejobmodal: completejobmodal,
  completedjobmodal: completedjobmodal,
  declinejobsuccessmodal: declinejobsuccess,
  declinejobmodal: declinejob,
  acceptjobsuccessmodal: acceptjobsuccess,
  acceptjobmodal: acceptjob,
  withdrawmodal: withdrawmodal,
  withdrawmodalconfirm: withdrawmodalconfirm,
  withdrawmodalsuccess: withdrawmodalsuccess,
  addaccountmodal: addaccount,
  addaccountsuccessmodal: addaccountsuccess,
  editsuccessmodal: editsuccessmodal,
  updatesuccessmodal: updatesuccessmodal,
  paymentrequestmodal: paymentrequest,
  paymentrequestsuccessmodal: paymentrequestsuccess,
  productdetail: productdetailsmodal,
  editproduct: editproduct,
  editproductsuccess: editproductsuccess,
});

export default rootReducer;
