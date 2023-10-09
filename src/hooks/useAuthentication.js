import { useSelector } from "react-redux";

export const useAuthentication = () => {
  const { currentuser } = useSelector((state) => state.userslice);
  let isAuthenticated;
  if (currentuser) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  return { isAuthenticated };
};
