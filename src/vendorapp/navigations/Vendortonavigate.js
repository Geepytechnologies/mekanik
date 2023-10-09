import { View, Text } from "react-native";
import React from "react";
import AuthNavigator from "./AuthNavigator";
import { useAuthentication } from "../hooks/useAuthentication";
import DealerNavigator from "./DealerNavigator";
import VendorNavigator from ".";

const Vendortonavigate = () => {
  const { isAuthenticated, vendor } = useAuthentication();
  let screentorender;
  if (isAuthenticated && vendor == "dealer") {
    screentorender = <DealerNavigator />;
  }
  if (isAuthenticated && vendor == "mechanic") {
    screentorender = <VendorNavigator />;
  }
  if (!isAuthenticated) {
    screentorender = <AuthNavigator />;
  }
  return <>{screentorender}</>;
};

export default Vendortonavigate;
