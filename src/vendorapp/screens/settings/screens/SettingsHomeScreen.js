import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import Horizontalrule from "../../../../components/Horizontalrule";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Support from "../svgs/Support";
import Signout from "../svgs/Signout";

const SettingsHomeScreen = ({ navigation }) => {
  const [biometric, setBiometric] = useState(true);
  const [emailnotifications, setEmailnotifications] = useState(true);
  const [pushnotifications, setPushnotifications] = useState(true);
  const togglebiometric = () => {
    setBiometric(!biometric);
  };
  const toggleemailnotifications = () => {
    setEmailnotifications(!emailnotifications);
  };
  const togglepushnotifications = () => {
    setPushnotifications(!pushnotifications);
  };
  return (
    <SafeAreaView
      style={{
        padding: 16,
        flex: 1,
        position: "relative",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontFamily: "clashDisplaymedium",
            fontSize: 16,
            color: "#0D0D0D",
          }}
        >
          Settings
        </Text>
        <View style={styles.contentcontainer}>
          <View style={styles.profile}>
            <View>
              <Text style={styles.name}>John Olayinka</Text>
              <Text style={styles.email}>peter@gmail.com</Text>
            </View>
            <View style={styles.imgcontain}>
              <View style={styles.imgcon}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("../../../../../assets/images/mancartoon.png")}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
          <Horizontalrule />
          <View style={styles.profiles}>
            <Pressable
              onPress={() => navigation.navigate("editprofile")}
              style={styles.profilesingle}
            >
              <FontAwesome5 name="user-circle" size={20} color="#AFAEAE" />
              <Text style={styles.profiletext}>Edit profile</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("updatepassword")}
              style={styles.profilesingle}
            >
              <MaterialIcons name="lock-outline" size={20} color="#AFAEAE" />
              <Text style={styles.profiletext}>Update password</Text>
            </Pressable>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.profilesingle}>
                <Ionicons name="finger-print" size={20} color="#AFAEAE" />
                <Text style={styles.profiletext}>Use biometric</Text>
              </View>
              <Pressable onPress={togglebiometric}>
                <FontAwesome5
                  style={{ fontSize: 24 }}
                  color="#0059FF"
                  name={biometric ? "toggle-on" : "toggle-off"}
                />
              </Pressable>
            </View>
          </View>
          <Horizontalrule />
          <View style={styles.profiles}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.profilesingle}>
                <MaterialCommunityIcons
                  name="bell-ring-outline"
                  size={20}
                  color="#AFAEAE"
                />
                <Text style={styles.profiletext}>Allow push notifications</Text>
              </View>
              <Pressable onPress={togglepushnotifications}>
                <FontAwesome5
                  style={{ fontSize: 24 }}
                  color="#0059FF"
                  name={pushnotifications ? "toggle-on" : "toggle-off"}
                />
              </Pressable>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.profilesingle}>
                <MaterialIcons
                  name="mark-email-unread"
                  size={20}
                  color="#AFAEAE"
                />
                <Text style={styles.profiletext}>
                  Allow email notifications
                </Text>
              </View>
              <Pressable onPress={toggleemailnotifications}>
                <FontAwesome5
                  style={{ fontSize: 24 }}
                  color="#0059FF"
                  name={emailnotifications ? "toggle-on" : "toggle-off"}
                />
              </Pressable>
            </View>
          </View>
          <Horizontalrule />
          <View style={styles.profiles}>
            <View style={styles.profilesingle}>
              <Support />
              <Text style={styles.profiletext}>Contact support</Text>
            </View>
            <View style={styles.profilesingle}>
              <Signout />
              <Text style={styles.profiletextred}>Sign out</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsHomeScreen;

const styles = StyleSheet.create({
  contentcontainer: {
    marginTop: 24,
  },
  imgcon: {
    backgroundColor: "#ffc2bd",
    borderRadius: 50,
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  profiletext: {
    fontFamily: "Lexend300",
    fontSize: 14,
    color: "#0D0D0D",
  },
  profiletextred: {
    fontFamily: "Lexend300",
    fontSize: 14,
    color: "#DA1212",
  },
  profiles: {
    gap: 24,
    marginVertical: 24,
  },
  profilesingle: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  name: {
    color: "#1A1A1A",
    fontFamily: "Lexend500",
    fontSize: 16,
  },
  email: {
    fontFamily: "Lexend300",
    fontSize: 12,
    color: "#525252",
    letterSpacing: 0.24,
  },
});
