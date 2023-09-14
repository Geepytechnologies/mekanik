import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Vehiclecard from "../components/cards/Vehiclecard";

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <SafeAreaView
      style={{
        padding: 16,
        flex: 1,
        position: "relative",
      }}
    >
      <Pressable
        style={styles.add}
        onPress={() => dispatch(showvehiclemodal())}
      >
        <Image source={require("../../../../../assets/images/add.png")} />
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.options}>
          <Pressable
            onPress={() => handleNavigation("vehicles")}
            style={styles.option1}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#0D0D0D",
                fontFamily: "Lexend500",
              }}
            >
              Active jobs (5)
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleNavigation("purchases")}
            style={styles.option2}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#AFAEAE",
                fontFamily: "Lexend500",
              }}
            >
              Completed jobs (4)
            </Text>
          </Pressable>
        </View>
        <View style={{ gap: 16 }}>
          <Vehiclecard />
          <Vehiclecard />
          <Vehiclecard />
        </View>
      </ScrollView>
      {/* <Addvehiclemodal
        isVisible={showvehicle}
        closeModal={() => dispatch(hidevehiclemodal())}
      />
      <Successmodal
        isVisible={showgaragesuccessmodal}
        closeModal={() => dispatch(hidegaragesuccess())}
      /> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  add: {
    position: "absolute",
    right: 10,
    zIndex: 100,
    bottom: "3%",
  },
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
