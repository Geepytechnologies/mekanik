import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MainTabNavigator from "./MainTabNavigator";
import SplashScreen from "../components/SplashScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import ForgotPasswordSreen from "../screens/auth/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/auth/NewPasswordScreen";
import SuccessModal from "../components/SuccessModal";
import AvailableMechanics from "../screens/dashboard/screens/AvailableMechanics";
import ContactMechanic from "../screens/dashboard/screens/ContactMechanic";
import Chatmechanic from "../screens/dashboard/screens/Chatmechanic";
import Spareparts from "../screens/dashboard/screens/Spareparts";
import Spareparts2 from "../screens/dashboard/screens/Spareparts2";
import Vehicleinfo from "../screens/garage/screens/Vehicleinfo";
import Editprofile from "../screens/settings/screens/Editprofile";
import Updatepassword from "../screens/settings/screens/Updatepassword";
import { usePushNotifications } from "../hooks/usePushNotifications";
import { useDispatch, useSelector } from "react-redux";
import { AUTHENTICATE } from "../utils/redux/slices/authslice";
import { SIGNIN } from "../utils/redux/slices/userslice";

import ResetPasswordScreen from "../screens/auth/ResetPasswordScreen";
import { ActivityIndicator } from "react-native";
import { Auth } from "aws-amplify"

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { sendPushNotification } = usePushNotifications();
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  const authenticate = async () => {
    try {
      setLoading(true)
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true })
      dispatch(SIGNIN(authUser.attributes));
      dispatch(AUTHENTICATE(true));
    } catch (error) {
      dispatch(SIGNIN(null));
      dispatch(AUTHENTICATE(false));
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  const { isAuthenticated } = useSelector((state) => state.authslice);
  // console.warn({ auth: isAuthenticated })


  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };

  const Customloader = () => {
    return (
      <View style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <>
      {loading ? <Customloader /> :
        <NavigationContainer theme={theme}>
          <Stack.Navigator
          >
            {!isAuthenticated ? (
              <>
                <Stack.Screen
                  name="signIn"
                  component={SignInScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="signUp"
                  options={{ headerShown: false }}
                  component={SignUpScreen}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="main"
                  component={MainTabNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="forgot"
                  options={{ headerShown: false }}
                  component={ForgotPasswordSreen}
                />
                <Stack.Screen
                  name="availablemechanics"
                  options={{ headerShown: false }}
                  component={AvailableMechanics}
                />
                <Stack.Screen
                  name="contactmechanic"
                  options={{ headerShown: false }}
                  component={ContactMechanic}
                />
                <Stack.Screen
                  name="chatmechanic"
                  options={{ headerShown: false }}
                  component={Chatmechanic}
                />
                <Stack.Screen
                  name="spareparts"
                  options={{ headerShown: false }}
                  component={Spareparts}
                />
                <Stack.Screen
                  name="spareparts2"
                  options={{ headerShown: false }}
                  component={Spareparts2}
                />
                <Stack.Screen
                  name="vehicleinfo"
                  options={{ headerShown: false }}
                  component={Vehicleinfo}
                />
                <Stack.Screen
                  name="editprofile"
                  options={{ headerShown: false }}
                  component={Editprofile}
                />
                <Stack.Screen
                  name="updatepassword"
                  options={{ headerShown: false }}
                  component={Updatepassword}
                />
                <Stack.Screen
                  name="newPassword"
                  component={NewPasswordScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="resetPassword"
                  component={ResetPasswordScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="success" component={SuccessModal} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      }
    </>
  );
};

export default Navigator;
