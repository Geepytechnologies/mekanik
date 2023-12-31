import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation";
import { loadCustomFonts } from "./src/utils/fonts";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./src/utils/redux/store";
import SplashScreen from "./src/components/SplashScreen";
import VendorNavigator from "./src/vendorapp/navigations";
import { NavigationContainer } from "@react-navigation/native";
import vendorstore from "./src/vendorapp/utils/redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DealerNavigator from "./src/vendorapp/navigations/DealerNavigator";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [mekanik, setMekanik] = useState(null);

  useEffect(() => {
    const loadFonts = async () => {
      await loadCustomFonts();
      setIsFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!isFontLoaded) {
    // You can render a loading indicator here
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View>
    );
  }
  const Stack = createNativeStackNavigator();

  return (
    <>
      {mekanik ? (
        mekanik === "user" ? (
          <Provider store={store}>
            <View style={styles.container}>
              <Navigator />
              <StatusBar style="auto" />
            </View>
          </Provider>
        ) : (
          <Provider store={vendorstore}>
            <View style={styles.container}>
              {/* <VendorNavigator /> */}
              <DealerNavigator />
              <StatusBar style="auto" />
            </View>
          </Provider>
        )
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="splash">
            <Stack.Screen
              name="splash"
              options={{
                headerShown: false,
              }}
            >
              {(props) => <SplashScreen {...props} setMekanik={setMekanik} />}
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
