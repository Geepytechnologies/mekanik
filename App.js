import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation";
import { loadCustomFonts } from "./src/utils/fonts";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./src/utils/redux/store";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

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
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigator />
        {/* <Text>hello</Text> */}
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
