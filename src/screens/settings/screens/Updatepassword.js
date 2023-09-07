import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";
import Cameraicon from "../svgs/Cameraicon";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Updatesuccess from "../components/modals/Updatesuccess";
import {
  hideupdatesuccess,
  showupdatesuccess,
} from "../../../utils/redux/slices/updatesuccessmodal";
import { Ionicons } from "@expo/vector-icons";

const Updatepassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const { showupdatesuccessmodal } = useSelector(
    (state) => state.updatesuccessmodal
  );
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    input1: false,
    input2: false,
    input3: false,
  });
  const togglePasswordVisibility = (input) => {
    setIsPasswordVisible({
      ...isPasswordVisible,
      [input]: !isPasswordVisible[input],
    });
  };
  return (
    <SafeAreaView style={{ padding: 16 }}>
      <View style={styles.nav}>
        <FontAwesome
          onPress={() => navigation.goBack()}
          name="long-arrow-left"
          size={24}
          color="black"
        />
        <Text style={styles.navtext}>Update password</Text>
      </View>
      {/* form */}
      <View>
        <View style={styles.passwordbox}>
          <TextInput
            style={styles.passwordboxinput}
            placeholder="Current password"
            keyboardType="default"
            secureTextEntry={!isPasswordVisible.input1}
          />
          <Pressable onPress={() => togglePasswordVisibility("input1")}>
            <Ionicons
              style={{ fontSize: 20 }}
              name={isPasswordVisible.input1 ? "eye" : "eye-off"}
            />
          </Pressable>
        </View>
        <View style={styles.passwordbox}>
          <TextInput
            style={styles.passwordboxinput}
            placeholder="New password"
            keyboardType="default"
            secureTextEntry={!isPasswordVisible.input2}
          />
          <Pressable onPress={() => togglePasswordVisibility("input2")}>
            <Ionicons
              style={{ fontSize: 20 }}
              name={isPasswordVisible.input2 ? "eye" : "eye-off"}
            />
          </Pressable>
        </View>
        <View style={styles.passwordbox}>
          <TextInput
            style={styles.passwordboxinput}
            placeholder="Retype password"
            keyboardType="default"
            secureTextEntry={!isPasswordVisible.input3}
          />
          <Pressable onPress={() => togglePasswordVisibility("input3")}>
            <Ionicons
              style={{ fontSize: 20 }}
              name={isPasswordVisible.input3 ? "eye" : "eye-off"}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={() => dispatch(showupdatesuccess())}
          style={styles.blackbtn}
        >
          <Text style={styles.btntext}>SAVE CHANGES</Text>
        </Pressable>
      </View>
      <Updatesuccess
        isVisible={showupdatesuccessmodal}
        closeModal={() => dispatch(hideupdatesuccess())}
      />
    </SafeAreaView>
  );
};

export default Updatepassword;

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 40,
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
});
