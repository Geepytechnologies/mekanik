import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercon}>
        <View style={styles.options}>
          <Text style={styles.welcome}>Reset Password</Text>
          <Text style={styles.subtitle}>
            Enter the 6 digit code sent to 08065******* to reset your password.
          </Text>
        </View>
        {/* form */}
        <View>
          <View style={styles.textbox}>
            <TextInput
              placeholder="Code"
              keyboardType="default"
              placeholderTextColor="#AFAEAE"
            />
          </View>
          <Pressable
            onPress={() => navigation.navigate("newPassword")}
            style={styles.blackbtn}
          >
            <Text style={styles.btntext}>RESET PASSWORD</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

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
    fontFamily: "Lexend700",
    fontStyle: "normal",
    lineHeight: 20,
    textTransform: "uppercase",
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
});
