import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Google from "../../../components/svgs/Google";
import Ordivider from "../../../components/Ordivider";
import { Picker } from "@react-native-picker/picker";

const SignUpScreen = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innercon}>
          <View style={styles.options}>
            <View style={styles.option2}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#0D0D0D",
                  fontFamily: "Lexend500",
                }}
              >
                Car Owner
              </Text>
            </View>
            <View style={styles.option1}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#AFAEAE",
                  fontFamily: "Lexend500",
                }}
              >
                Vendor
              </Text>
            </View>
          </View>
          {/* form */}
          <View>
            <View style={styles.textbox}>
              <TextInput
                style={{ fontFamily: "Lexend300", fontSize: 14 }}
                placeholder="Full Name"
                keyboardType="default"
                placeholderTextColor="#AFAEAE"
              />
            </View>
            <View style={styles.textbox}>
              <TextInput
                style={{
                  fontFamily: "Lexend300",
                  fontSize: 14,
                }}
                placeholder="Phone Number"
                keyboardType="default"
                placeholderTextColor="#AFAEAE"
              />
            </View>
            <View style={styles.pickercon}>
              <Picker
                style={styles.picker}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item
                  style={styles.pickeritem}
                  label="Vendor type"
                  value=""
                />
                <Picker.Item
                  style={styles.pickeritem}
                  label="Option 1"
                  value="option1"
                />
                <Picker.Item
                  style={styles.pickeritem}
                  label="Option 2"
                  value="option2"
                />
              </Picker>
            </View>
            <View style={styles.textbox}>
              <TextInput
                style={{
                  fontFamily: "Lexend300",
                  fontSize: 14,
                }}
                placeholder="Business name"
                keyboardType="default"
                placeholderTextColor="#AFAEAE"
              />
            </View>
            <View style={styles.textbox}>
              <TextInput
                style={{
                  fontFamily: "Lexend300",
                  fontSize: 14,
                }}
                placeholder="Address"
                keyboardType="default"
                placeholderTextColor="#AFAEAE"
              />
            </View>
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
            <Pressable
              onPress={() =>
                navigation.navigate("signIn", { screen: "signIn" })
              }
              style={styles.blackbtn}
            >
              <Text style={styles.btntext}>CREATE ACCOUNT</Text>
            </Pressable>
          </View>
          <View style={styles.orCon}>
            <Ordivider />
          </View>
          <View style={styles.googlecon}>
            <Google />
            <Text style={styles.googletext}>SIGN UP WITH GOOGLE</Text>
          </View>
        </View>
        <View style={styles.account}>
          <Text style={styles.already}>Already have an account?</Text>
          <Text style={styles.signin}>SIGN IN</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    flex: 1,
    marginTop: 24,
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
  pickercon: {
    backgroundColor: "#F8F8F8",
    borderBottomColor: "#E6E5E5",
    borderBottomWidth: 1,
    borderStyle: "solid",
    marginBottom: 16,
  },
  picker: {
    backgroundColor: "#F8F8F8",
    color: "#AFAEAE",
  },
  pickeritem: {
    fontSize: 14,
    fontFamily: "Lexend300",
  },
  orCon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 24,
  },
  googlecon: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  googletext: {
    fontFamily: "Lexend700",
    fontSize: 12,
  },
  options: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginBottom: 24,
  },
  option1: {
    borderBottomColor: "#0059FF",
    borderBottomStyle: "solid",
    borderBottomWidth: 4,
    paddingBottom: 8,
  },
  option2: {
    borderBottomColor: "#0059FF",
    borderBottomStyle: "solid",
    borderBottomWidth: 0,
    paddingBottom: 8,
  },
  account: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'center',
    gap: 5,
    marginTop: "auto",
    backgroundColor: "#F8F8F8",
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  already: {
    color: "#0D0D0D",
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
