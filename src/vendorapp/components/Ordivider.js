import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Ordivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
    backgroundColor: "#AFAEAE",
  },
  text: {
    marginHorizontal: 8,
    color: "#AFAEAE",
  },
});

export default Ordivider;
