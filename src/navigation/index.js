import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MainTabNavigator from "./MainTabNavigator";
import SplashScreen from "../screens/auth/SplashScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import ForgotPasswordSreen from "../screens/auth/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/auth/NewPasswordScreen";
import ResetPasswordScreen from "../screens/auth/ResetPasswordScreen.js";
import SuccessModal from "../components/SuccessModal";
import AvailableMechanics from "../screens/dashboard/AvailableMechanics";
import ContactMechanic from "../screens/dashboard/ContactMechanic";
import Chatmechanic from "../screens/dashboard/Chatmechanic";
import Spareparts from "../screens/dashboard/Spareparts";
import Spareparts2 from "../screens/dashboard/Spareparts2";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="splash"
        // screenOptions={{ headerStyle: { backgroundColor: 'red' } }}
      >
        <Stack.Screen
          name="main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="splash"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
