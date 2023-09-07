import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mechanics from "../components/Mechanics";
import Dealers from "../components/Dealers";

const Stack = createNativeStackNavigator();

const ShopHomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="mechanics">
      <Stack.Screen
        name="mechanics"
        options={{ headerShown: false }}
        component={Mechanics}
      />
      <Stack.Screen
        name="dealers"
        options={{ headerShown: false }}
        component={Dealers}
      />
    </Stack.Navigator>
  );
};

export default ShopHomeScreen;

const styles = StyleSheet.create({});
