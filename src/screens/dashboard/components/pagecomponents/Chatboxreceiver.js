import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Chatboxreceiver = ({ message, time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.comment}>{message}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default Chatboxreceiver;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    paddingRight: 16,
    backgroundColor: "#F8F8F8",
    borderColor: "#EFEFEF",
    borderWidth: 1,
    maxWidth: 284,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  comment: {
    fontFamily: "Lexend300",
    fontSize: 14,
    marginBottom: 12,
    flexWrap: "wrap",
  },
  time: {
    fontFamily: "Lexend400",
    fontSize: 10,
  },
});
