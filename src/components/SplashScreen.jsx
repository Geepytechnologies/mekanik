import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = ({ setUsertype }) => {
  const navigation = useNavigation();
  const handleUserTypeSelection = (userType) => {
    setUsertype(userType);
  };
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate("signUp");
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.logocon}>
          <Text style={styles.logo}>mekanik</Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.aboutText}>
            We are here to connect mechanics and spare-part dealers to car
            owners, any day, anytime, anywhere.
          </Text>
        </View>
        {/* buttons */}
        <View style={styles.buttonCon}>
          <Pressable
            onPress={() => handleUserTypeSelection('user')}
            style={styles.blackbtn}
          >
            <Text style={styles.btntext}>I&apos;m a car owner</Text>
          </Pressable>
          <Pressable
            onPress={() => handleUserTypeSelection('vendor')}
            style={styles.whitebtn}
          >
            <Text>I&apos;m a vendor</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.subtext}>
            *Vendors include: mechanics & spare-part dealers*
          </Text>
        </View>
        {/* image */}
        <View style={styles.imgcon}>
          <Image
            source={require("../../assets/images/splashgif-min.gif")}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  logo: {
    fontFamily: "clashDisplaybold",
    fontSize: 20,
    lineHeight: 24,
  },
  logocon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 104,
    marginTop: 16,
  },
  aboutText: {
    color: "#0D0D0D",
    textAlign: "center",
    fontSize: 24,
    fontFamily: "clashDisplay",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 32,
    width: 304,
  },
  buttonCon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 40,
    marginBottom: 16,
  },
  blackbtn: {
    display: "flex",
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  whitebtn: {
    display: "flex",
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderStyle: "solid",
  },
  btntext: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Lexend",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 20,
    textTransform: "uppercase",
  },
  subtext: {
    color: "#868585",
    textAlign: "center",
    fontSize: 10,
    fontFamily: "Lexend",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 16,
    marginBottom: 56,
  },
  imgcon: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 40,
  },
  image: {
    width: 400,
    height: 264,
  },
});
