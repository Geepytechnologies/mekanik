import { useSelector } from "react-redux";

export const useAuthentication = () => {
  const { currentuser } = useSelector((state) => state.userslice);
  let isAuthenticated;
  let vendor;
  if (currentuser) {
    if (currentuser.vendortype == "dealer") {
      (isAuthenticated = true), (vendor = "dealer");
    }
    if (currentuser.vendortype == "mechanic") {
      (isAuthenticated = true), (vendor = "mechanic");
    }
  } else {
    isAuthenticated = false;
    vendor = null;
  }

  return { isAuthenticated, vendor };
};
