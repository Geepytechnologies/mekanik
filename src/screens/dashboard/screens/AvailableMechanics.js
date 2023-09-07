import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import Usercard from "../components/cards/Usercard";
import { useNavigation } from "@react-navigation/native";

const AvailableMechanics = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ padding: 16 }}>
      <View style={styles.nav}>
        <FontAwesome
          onPress={() => navigation.goBack()}
          name="long-arrow-left"
          size={24}
          color="black"
        />
        <Text style={styles.navtext}>Available Mechanics</Text>
      </View>
      <View style={styles.searchcon}>
        <Fontisto name="search" size={20} color="#AFAEAE" />
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={1}
          placeholder="Search"
          value={text}
          onChangeText={(newText) => setText(newText)}
        />
      </View>
      <Text
        style={{
          marginVertical: 16,
          fontFamily: "Lexend",
          fontSize: 12,
          color: "#868585",
          fontWeight: "500",
        }}
      >
        Favourites (2):
      </Text>
      <Usercard />
      <Usercard />
      <Text
        style={{
          marginVertical: 16,
          fontFamily: "Lexend",
          fontSize: 12,
          color: "#868585",
          fontWeight: "500",
        }}
      >
        Recommended (2):
      </Text>
      <Usercard />
      <Usercard />
    </SafeAreaView>
  );
};

export default AvailableMechanics;

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  navtext: {
    fontFamily: "clashDisplaymedium",
  },
  searchcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#E6E5E5",
    marginTop: 24,
  },
  textInput: {
    color: "#AFAEAE",
  },
});
