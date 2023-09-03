import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

const Reachoutsuccessmodal = ({ isVisible, closeModal }) => {
  const navigation = useNavigation();
  return (
    <Modal
      style={{ margin: 0, display: "flex", alignItems: "center" }}
      isVisible={isVisible}
      onBackdropPress={closeModal}
    >
      <View style={styles.popup}>
        <View style={styles.content}>
          <Image source={require("../../../../assets/images/checkmark.png")} />
          <Text
            style={{
              marginBottom: 8,
              marginTop: 40,
              fontWeight: "600",
              fontSize: 24,
            }}
          >
            Success!
          </Text>
          <Text
            style={{
              marginBottom: 40,
              fontWeight: "300",
              fontSize: 14,
              color: "#525252",
              textAlign: "center",
            }}
          >
            You have successfully sent an emergency message. Someone will reach
            out to you now!
          </Text>
          <Pressable
            onPress={() => navigation.navigate("main")}
            style={styles.blackbtn}
          >
            <Text style={styles.btntext}>SIGN IN</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Reachoutsuccessmodal;

const styles = StyleSheet.create({
  popup: {
    marginTop: "auto",
    backgroundColor: "white",
    padding: 2,
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 16,
    minHeight: 312,
  },
  content: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blackbtn: {
    display: "flex",
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
    width: "100%",
  },
  btntext: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Lexend",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 20,
    textTransform: "uppercase",
  },
});