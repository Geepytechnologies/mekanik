import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
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
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { AUTHENTICATE, SETLOADING } from "../utils/redux/slices/authslice";
import { validateaccesstoken } from "../utils/usermethods";
import { getValueFromstore } from "../utils/storage";
import ResetPasswordScreen from "../screens/auth/ResetPasswordScreen";
import { ActivityIndicator } from "react-native";
import { API_URL } from "../../env";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { sendPushNotification } = usePushNotifications();
  // const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  const authenticate = async () => {
    try {
      const response = await validateaccesstoken();

      if (response.status === true) {
        dispatch(SIGNIN(response.others));
        dispatch(AUTHENTICATE(true));
      } else {
        dispatch(AUTHENTICATE(false));
      }

    } catch (error) {

      // Handle error (optional)
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  const { isAuthenticated } = useSelector((state) => state.authslice);

  const [socket, setSocket] = useState(null);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };
  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io(API_URL); // Change the URL to your server's URL
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    // Listen for the 'disconnect' event to check if the socket disconnected
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    // Listen for incoming messages
    socket.on("chat message", (message) => {
      // Check if the event is "chat message"
      if (message.event === "chat message") {
        // Check if the chat screen is not active
        if (activeScreen !== "ChatScreen") {
          // Send the push notification
          sendPushNotification("New Chat", message, {});
        }
        // Handle the chat message
        handleChatMessage(message);
      }
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);
  const Customloader = () => {
    return (
      <View style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
        // initialRouteName="signIn"
        // screenOptions={{ headerStyle: { backgroundColor: 'red' } }}
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
    </>
  );
};

export default Navigator;
