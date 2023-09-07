import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Repairhistorycard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("contactmechanic")}
      style={styles.container}
    >
      <View style={styles.innercon}>
        <View style={{ flex: 2, gap: 8 }}>
          <Text
            style={{ fontFamily: "Lexend400", fontSize: 12, color: "#AFAEAE" }}
          >
            11/12/2023
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
              Toyota Corolla Fix
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
              Mechanic:
            </Text>
            <Text
              style={{
                fontFamily: "Lexend400",
                fontSize: 12,
                color: "#525252",
              }}
            >
              James Peterson
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Repairhistorycard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#F8F8F8",
    borderColor: "#EFEFEF",
    marginBottom: 12,
  },
  innercon: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
});
