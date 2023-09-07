import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Purchasecard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("contactmechanic")}
      style={styles.container}
    >
      <View style={styles.innercon}>
        <View style={{ flex: 2, gap: 8 }}>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: "#EEFBEE",
              padding: 8,
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                fontFamily: "Lexend500",
                color: "#28B328",
                fontSize: 12,
              }}
            >
              Delivered
            </Text>
          </View>
          <Text
            style={{ fontFamily: "Lexend400", fontSize: 12, color: "#AFAEAE" }}
          >
            11/12/2023
          </Text>
          <Text
            style={{ fontFamily: "Lexend300", fontSize: 12, color: "#525252" }}
          >
            Brand new Toyota Crank shaft
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text
              style={{
                fontFamily: "Lexend600",
                fontSize: 16,
                color: "#0D0D0D",
              }}
            >
              ₦ 45,000
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Text
              style={{
                fontFamily: "Lexend300",
                fontSize: 12,
                color: "#525252",
              }}
            >
              Vendor:
            </Text>
            <Text
              style={{
                fontFamily: "Lexend400",
                fontSize: 12,
                color: "#525252",
              }}
            >
              Peter Rufai
            </Text>
          </View>
        </View>
        <View style={styles.imgcontain}>
          <View style={styles.imgcon}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../../../../assets/images/engine.png")}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Purchasecard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    borderColor: "#E6E5E5",
  },
  innercon: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  imgcontain: {},
  imgcon: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
