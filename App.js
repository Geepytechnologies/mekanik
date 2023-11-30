import { StyleSheet, Text, View } from "react-native";
import { loadCustomFonts } from "./src/utils/fonts";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { usePushNotifications } from "./src/hooks/usePushNotifications";
import { QueryClient, QueryClientProvider } from "react-query";
import { ActivityIndicator } from "react-native";
import * as Device from "expo-device";
import SplashNavigator from "./src/components/navigators/SplashNavigator";
import VendorAppNavigator from "./src/components/navigators/VendorAppNavigator";
import UserAppNavigator from "./src/components/navigators/UserAppNavigator";
import globalstore from "./src/globalutils/redux/globalstore";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/components/SplashScreen";
import { Amplify, Auth } from "aws-amplify";
import config from "./src/aws-exports";

Amplify.configure(config);
// console.log({ device: Device });

const queryClient = new QueryClient();

export default function App() {
  const { sendPushNotification } = usePushNotifications();
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [usertype, setUsertype] = useState(null);

  useEffect(() => {
    const loadFonts = async () => {
      await loadCustomFonts();
      setIsFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!isFontLoaded) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  const Stack = createNativeStackNavigator();
  return (
    <>
      {usertype ? (
        usertype === "user" ? (
          <UserAppNavigator />
        ) : (
          <VendorAppNavigator />
        )
      ) : (
        // <SplashScreen setUsertype={setUsertype} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="splash">
            <Stack.Screen
              name="splash"
              options={{
                headerShown: false,
              }}
            >
              {(props) => <SplashScreen {...props} setUsertype={setUsertype} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
