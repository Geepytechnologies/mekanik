import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserRequestcard from "../components/cards/UserRequestcard";

const Requests = () => {
  return (
    <SafeAreaView style={{ padding: 16 }}>
      <Text style={styles.header}>Requests (6)</Text>
      <ScrollView style={{ marginVertical: 16 }}>
        <UserRequestcard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Requests;

const styles = StyleSheet.create({
  header: {
    color: "#0D0D0D",
    fontFamily: "clashDisplaymedium",
    fontSize: 16,
  },
});
