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
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { makeRedirectUri } from "expo-auth-session";
import { signin, signinwithgoogle } from "../../utils/usermethods";
import { ActivityIndicator } from "react-native";
import { savetostore } from "../../utils/storage";
import { useDispatch } from "react-redux";
import { SIGNIN } from "../../utils/redux/slices/userslice";

WebBrowser.maybeCompleteAuthSession();

const SignInScreen = () => {
  const [user, setUser] = useState();
  const navigation = useNavigation();
  const [userdetails, setUserdetails] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      androidClientId:
        "907851189600-m3jflgmmid8r17uofllp1n2idr33mpud.apps.googleusercontent.com",
      expoClientId:
        "907851189600-fehuhselu25c58vq4fpngkua7g98ad1s.apps.googleusercontent.com",
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
    await handleGoogleSignIn(userinfo);
    setUser(userinfo);
  };
  const handleEmailChange = (text) => {
    setUserdetails({ ...userdetails, email: text });
  };

  const handlePasswordChange = (text) => {
    setUserdetails({ ...userdetails, password: text });
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signin(userdetails.email, userdetails.password);
      dispatch(SIGNIN(response.others));
      savetostore("vendoraccessToken", response?.accessToken);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (data) => {
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
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.subtitle}>
            Fill in your details to sign in to your account.
          </Text>
        </View>
        {/* form */}
        <View>
          <View style={styles.textbox}>
            <TextInput
              onChangeText={(text) => handleEmailChange(text)}
              placeholder="Email address"
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
          <Pressable onPress={handleSignIn} style={styles.blackbtn}>
            {loading ? (
              <ActivityIndicator size={"large"} color={"white"} />
            ) : (
              <Text style={styles.btntext}>SiGN In</Text>
            )}
          </Pressable>
        </View>
        <View style={{ marginVertical: 24 }}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>
        <View style={styles.orCon}>
          <Ordivider />
        </View>
        <Pressable onPress={() => promptAsync()} style={styles.googlecon}>
          <Googlelogo />
          <Text style={styles.googletext}>SIGN IN WITH GOOGLE</Text>
        </Pressable>
      </View>
      <View style={styles.account}>
        <Text style={styles.already}>New here?</Text>
        <Text style={styles.signin}>CREATE ACCOUNT</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
    fontFamily: "Lexend",
    fontStyle: "normal",
    fontWeight: "700",
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
    justifyContent: "center",
    gap: 4,
    marginBottom: 24,
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
  forgot: {
    color: "#0059FF",
    fontSize: 12,
    fontFamily: "Lexend600",
    textTransform: "uppercase",
    lineHeight: 20,
  },
  welcome: {
    color: "#0D0D0D",
    fontSize: 24,
    fontFamily: "clashDisplaymedium",
    fontStyle: "normal",
    fontWeight: "500",
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
