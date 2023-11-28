import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Usercard = () => {
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
              Available
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text style={{ fontFamily: "Lexend500", fontSize: 14 }}>
              Suraju James Alimi
            </Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={16}
              color="#0059FF"
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Lexend300",
                fontSize: 12,
                fontWeight: "300",
              }}
            >
              {`Specialist: Toyota • Cars fixed: 12 Location: Ikeja, Lagos`}
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <MaterialIcons name="star" size={16} color="#0059FF" />
            <MaterialIcons name="star" size={16} color="#0059FF" />
            <MaterialIcons name="star" size={16} color="#0059FF" />
            <MaterialIcons name="star-half" size={16} color="#0059FF" />
            <MaterialIcons name="star-outline" size={16} color="#0059FF" />
          </View>
        </View>
        <View style={styles.imgcontain}>
          <View style={styles.imgcon}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../../../../assets/images/mancartoon.png")}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Usercard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderColor: "#E6E5E5",
  },
  innercon: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  imgcontain: {},
  imgcon: {
    backgroundColor: "#ffc2bd",
    borderRadius: 50,
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
