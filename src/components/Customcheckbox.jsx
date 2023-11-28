import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Customcheckbox = ({ label, isChecked, toggleCheckbox }) => {
  return (
    <View style={styles.checkboxContainer}>
      <Pressable onPress={toggleCheckbox}>
        <MaterialCommunityIcons
          name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"}
          size={24}
          color={isChecked ? "#0047CC" : "#525252"}
        />
      </Pressable>
      <Text style={styles.checkboxLabel}>{label}</Text>
    </View>
  );
};

export default Customcheckbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkboxLabel: {
    fontFamily: "Lexend300",
    fontSize: 12,
    color: "#525252",
  },
});
