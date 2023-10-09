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
import Requestinfo from "../screens/requests/Screens/Requestinfo";
import Editprofile from "../../screens/settings/screens/Editprofile";
import Updatepassword from "../../screens/settings/screens/Updatepassword";
import Chatmechanic from "../screens/home/screens/Chatmechanic";
import DealerTabNavigator from "./DealerTabNavigator";
import Orderinfo from "../screens/dealerapp/orders/screens/Orderinfo";
import Orderinfo2 from "../screens/dealerapp/orders/screens/Orderinfo2";

const Stack = createNativeStackNavigator();

const DealerNavigator = () => {
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
        initialRouteName="main"
        // screenOptions={{ headerStyle: { backgroundColor: 'red' } }}
      >
        <Stack.Screen
          name="main"
          component={DealerTabNavigator}
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
          name="orderinfo"
          component={Orderinfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="orderinfo2"
          component={Orderinfo2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="requestinfo"
          component={Requestinfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="chatmechanic"
          component={Chatmechanic}
          options={{ headerShown: false }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DealerNavigator;
