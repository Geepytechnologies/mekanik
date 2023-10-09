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
import { useNavigation } from "@react-navigation/native";
import Googlelogo from "../../components/svgs/Google";
import Ordivider from "../../components/Ordivider";
import { signinwithgoogle, signup } from "../../utils/usermethods";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { savetostore } from "../../utils/storage";
import { useDispatch } from "react-redux";
import { SIGNIN } from "../../utils/redux/slices/userslice";

WebBrowser.maybeCompleteAuthSession();

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userdetails, setUserdetails] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      androidClientId: process.env.EXPO_PUBLIC_ANDROIDCLIENTID,
      expoClientId: process.env.EXPO_PUBLIC_EXPOCLIENTID,
      scopes: ["profile", "email", "openid"],
    }
    // { authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth" }
  );
  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  useEffect(() => {
    signInWithGoogle();
  }, [response]);

  const signInWithGoogle = async () => {
    if (response?.type === "success") {
      const token =
        response.authentication?.accessToken ||
        response.params?.access_token ||
        response.params?.id_token;
      await getUserInfo(token);
    }
  };

  const getUserInfo = async (accessToken) => {
    if (!accessToken) return;
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userinfo = await response.json();
    await handleGoogleSignUp(userinfo);
    setUser(userinfo);
  };

  const handleFullnameChange = (text) => {
    setUserdetails({ ...userdetails, fullname: text });
  };
  const handleEmailChange = (text) => {
    setUserdetails({ ...userdetails, email: text });
  };
  const handlePhoneChange = (text) => {
    setUserdetails({ ...userdetails, phone: text });
  };

  const handlePasswordChange = (text) => {
    setUserdetails({ ...userdetails, password: text });
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await signup(
        userdetails.fullname,
        userdetails.email,
        userdetails.phone,
        userdetails.password
      );
      if (response) {
        navigation.replace("signIn");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async (data) => {
    try {
      const response = await signinwithgoogle(data);
      dispatch(SIGNIN(response.others));
      savetostore("accessToken", response?.accessToken);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercon}>
        <View style={styles.options}>
          <View style={styles.option1}>
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
          <View style={styles.option2}>
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
              onChangeText={(text) => handleFullnameChange(text)}
              style={{ fontFamily: "Lexend300", fontSize: 14 }}
              placeholder="Full Name"
              keyboardType="default"
              placeholderTextColor="#AFAEAE"
            />
          </View>
          <View style={styles.textbox}>
            <TextInput
              onChangeText={(text) => handlePhoneChange(text)}
              styles={{ fontFamily: "Lexend300", fontSize: 14 }}
              placeholder="Phone Number"
              keyboardType="default"
              placeholderTextColor="#AFAEAE"
            />
          </View>
          <View style={styles.textbox}>
            <TextInput
              onChangeText={(text) => handleEmailChange(text)}
              styles={{ fontFamily: "Lexend300", fontSize: 14 }}
              placeholder="Email"
              keyboardType="default"
              placeholderTextColor="#AFAEAE"
            />
          </View>
          <View style={styles.passwordbox}>
            <TextInput
              onChangeText={(text) => handlePasswordChange(text)}
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
          <Pressable onPress={handleSignUp} style={styles.blackbtn}>
            {loading ? (
              <ActivityIndicator size={"large"} color={"white"} />
            ) : (
              <Text style={styles.btntext}>CREATE ACCOUNT</Text>
            )}
          </Pressable>
        </View>
        <View style={styles.orCon}>
          <Ordivider />
        </View>
        <Pressable onPress={() => promptAsync()} style={styles.googlecon}>
          <Googlelogo />
          <Text style={styles.googletext}>SIGN UP WITH GOOGLE</Text>
        </Pressable>
      </View>
      <View style={styles.account}>
        <Text style={styles.already}>Already have an account?</Text>
        <Pressable onPress={() => navigation.replace("signIn")}>
          <Text style={styles.signin}>SIGN IN</Text>
        </Pressable>
      </View>
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
