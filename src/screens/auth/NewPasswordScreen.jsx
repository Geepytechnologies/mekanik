import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SuccessModal from "../../components/SuccessModal";

const NewPasswordScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercon}>
        <View style={styles.options}>
          <Text style={styles.welcome}>New Password?</Text>
          <Text style={styles.subtitle}>
            Create a new password for your account
          </Text>
        </View>
        {/* form */}
        <View>
          <View style={styles.passwordbox}>
            <TextInput
              style={styles.passwordboxinput}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
            />
            <Pressable onPress={togglePasswordVisibility}>
              <Ionicons
                style={{ fontSize: 20 }}
                name={isPasswordVisible ? "eye" : "eye-off"}
              />
            </Pressable>
          </View>
          <View style={styles.passwordbox}>
            <TextInput
              style={styles.passwordboxinput}
              placeholder="Confirm Password"
              keyboardType="default"
              secureTextEntry={!isConfirmPasswordVisible}
            />
            <Pressable onPress={toggleConfirmPasswordVisibility}>
              <Ionicons
                style={{ fontSize: 20 }}
                name={isConfirmPasswordVisible ? "eye" : "eye-off"}
              />
            </Pressable>
          </View>
          <Pressable onPress={toggleModal} style={styles.blackbtn}>
            <Text style={styles.btntext}>Create Password</Text>
          </Pressable>
        </View>
      </View>
      {/* modal */}
      <SuccessModal isVisible={isModalVisible} closeModal={toggleModal} />
    </SafeAreaView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    flex: 1,
  },
  innercon: {
    padding: 16,
  },
  blackbtn: {
    display: "flex",
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  btntext: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 12,
    fontStyle: "normal",
    fontFamily: "Lexend700",
    lineHeight: 20,
    textTransform: "uppercase",
  },
  passwordbox: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    borderBottomColor: "#E6E5E5",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 16,
  },
  passwordboxinput: {
    flex: 1,
  },
  textbox: {
    backgroundColor: "#F8F8F8",
    borderBottomColor: "#E6E5E5",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  options: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 24,
  },
  welcome: {
    color: "#0D0D0D",
    fontSize: 24,
    fontFamily: "clashDisplaymedium",
    lineHeight: 32,
  },
  subtitle: {
    color: "#525252",
    fontSize: 14,
    fontFamily: "Lexend300",
    fontStyle: "normal",
    lineHeight: 20,
  },
  signin: {
    color: "#0059FF",
    fontSize: 12,
    fontFamily: "Lexend600",
    fontStyle: "normal",
    lineHeight: 20,
  },
});
