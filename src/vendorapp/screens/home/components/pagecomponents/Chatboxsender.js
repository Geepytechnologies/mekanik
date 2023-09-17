import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Read from "../../../../../screens/dashboard/svgs/Read";

const Chatboxsender = ({ message, time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.comment}>{message}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Text style={styles.time}>{time}</Text>
        <Read />
      </View>
    </View>
  );
};

export default Chatboxsender;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    paddingRight: 16,
    backgroundColor: "#EEFBEE",
    maxWidth: 284,
    alignSelf: "flex-end",
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
