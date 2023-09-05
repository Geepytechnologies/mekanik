import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Reviewcard = ({ name, comment, rating }) => {
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
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text
              style={{
                fontFamily: "Lexend500",
                fontSize: 14,
                color: "#0D0D0D",
              }}
            >
              {name}
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <MaterialIcons name="star" size={16} color="#AFAEAE" />
            <MaterialIcons name="star" size={16} color="#AFAEAE" />
            <MaterialIcons name="star" size={16} color="#AFAEAE" />
            <MaterialIcons name="star-half" size={16} color="#AFAEAE" />
            <MaterialIcons name="star-outline" size={16} color="#AFAEAE" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Lexend300",
                fontSize: 12,
                fontWeight: "300",
                flexWrap: "wrap",
              }}
            >
              {comment}
            </Text>
          </View>
          <Text
            style={{ fontFamily: "Lexend600", color: "#0059FF", fontSize: 10 }}
          >
            VIEW ALL
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Reviewcard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    borderColor: "#E6E5E5",
    marginTop: 12,
    minWidth: 264,
    maxWidth: 264,
    marginRight: 12,
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
