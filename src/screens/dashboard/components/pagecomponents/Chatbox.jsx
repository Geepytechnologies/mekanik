import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Read from "../../svgs/Read";

const Chatbox = ({ message, time, isMyMessage }) => {
  return (
    <View style={isMyMessage ? styles.containersender : styles.containerReceiver}>
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

export default Chatbox;

const styles = StyleSheet.create({
  containersender: {
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
  containerReceiver: {
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
