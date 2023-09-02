import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainTabNavigator from './MainTabNavigator';
import SplashScreen from '../screens/auth/SplashScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordSreen from '../screens/auth/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/auth/NewPasswordScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen.js';
import SuccessModal from '../components/SuccessModal';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
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
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="splash"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <Stack.Screen name="signIn" component={SignInScreen} />
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
        <Stack.Screen name="newPassword" component={NewPasswordScreen} />
        <Stack.Screen name="resetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="success" component={SuccessModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
