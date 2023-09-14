import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MainTabNavigator from "./MainTabNavigator";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import ResetPasswordScreen from "../screens/auth/ResetPasswordScreen";
import NewPasswordScreen from "../screens/auth/NewPasswordScreen";
import Jobinfo from "../screens/home/screens/Jobinfo";

const Stack = createNativeStackNavigator();

const VendorNavigator = () => {
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
        initialRouteName="signUp"
        // screenOptions={{ headerStyle: { backgroundColor: 'red' } }}
      >
        <Stack.Screen
          name="main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
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
          component={ForgotPasswordScreen}
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
        <Stack.Screen
          name="jobinfo"
          component={Jobinfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default VendorNavigator;
