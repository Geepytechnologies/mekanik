import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Vehicles from "../components/pagecomponents/Vehicles";
import Purchases from "../components/pagecomponents/Purchases";

const Stack = createNativeStackNavigator();

const GarageHomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="vehicles">
      <Stack.Screen
        name="vehicles"
        options={{ headerShown: false }}
        component={Vehicles}
      />
      <Stack.Screen
        name="purchases"
        options={{ headerShown: false }}
        component={Purchases}
      />
    </Stack.Navigator>
  );
};

export default GarageHomeScreen;

const styles = StyleSheet.create({
  options: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginBottom: 24,
    marginTop: 24,
  },
  option1: {
    borderBottomColor: "#0059FF",
    borderBottomStyle: "solid",
    borderBottomWidth: 4,
    paddingBottom: 8,
  },
  option2: {
    borderBottomColor: "#0059FF",
    borderBottomStyle: "solid",
    borderBottomWidth: 0,
    paddingBottom: 8,
  },
});
