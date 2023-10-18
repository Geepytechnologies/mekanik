import { useDispatch } from "react-redux";
import { validateaccesstoken } from "../utils/usermethods";
import { SIGNIN } from "../utils/redux/slices/userslice";
import { AUTHENTICATE } from "../utils/redux/slices/authslice";

export const useAuthentication = async () => {
  const response = validateaccesstoken();
  const dispatch = useDispatch();
  if (response.status == true) {
    dispatch(SIGNIN(response.others));
    dispatch(AUTHENTICATE(true));
  } else {
    dispatch(AUTHENTICATE(false));
  }
};
