import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Purchasecard from "../cards/Purchasecard";

const Purchases = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <SafeAreaView style={{ padding: 16 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontFamily: "clashDisplaymedium",
            fontSize: 16,
            color: "#0D0D0D",
          }}
        >
          My Garage
        </Text>
        <View style={styles.options}>
          <Pressable
            onPress={() => handleNavigation("vehicles")}
            style={styles.option2}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#0D0D0D",
                fontFamily: "Lexend500",
              }}
            >
              Vehicles
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleNavigation("purchases")}
            style={styles.option1}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#AFAEAE",
                fontFamily: "Lexend500",
              }}
            >
              Purchases
            </Text>
          </Pressable>
        </View>
        <View style={{ gap: 16 }}>
          <Purchasecard />
          <Purchasecard />
          <Purchasecard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Purchases;

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
