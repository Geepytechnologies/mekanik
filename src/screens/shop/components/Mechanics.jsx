import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import Usercard from "./cards/Usercard";
import { Fontisto } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Mechanics = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState("");

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontFamily: "clashDisplaymedium",
            fontSize: 16,
            color: "#0D0D0D",
          }}
        >
          Auto Shop
        </Text>
        <View style={styles.options}>
          <Pressable
            onPress={() => handleNavigation("mechanics")}
            style={styles.option1}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#0D0D0D",
                fontFamily: "Lexend500",
              }}
            >
              Mechanics
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleNavigation("dealers")}
            style={styles.option2}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#AFAEAE",
                fontFamily: "Lexend500",
              }}
            >
              Dealers
            </Text>
          </Pressable>
        </View>
        {/* serach and filter */}
        <View style={styles.filtercon}>
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
          <View style={{ borderWidth: 1, borderColor: "#E6E5E5", flex: 1 }}>
            <Picker
              style={styles.picker}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Filter" value="" />
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker>
          </View>
        </View>
        <View style={{ gap: 16 }}>
          <Usercard />
          <Usercard />
          <Usercard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Mechanics;

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
  searchcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#E6E5E5",
    flex: 1.5,
  },
  textInput: {
    color: "#AFAEAE",
  },
  filtercon: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    marginVertical: 16,
  },
  picker: {
    color: "#0D0D0D",
    fontSize: 14,
    fontFamily: "Lexend400",
  },
});
