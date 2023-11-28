import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Vehiclecard from "../components/cards/Vehiclecard";

const Home = ({ route }) => {
  let activepagenow;
  if (route.params) {
    const { activepageroute } = route.params;
    activepagenow = activepageroute;
  }
  const [activepage, setActivepage] = useState(activepagenow ?? 1);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (activepagenow) {
      setActivepage(activepagenow);
    }
  }, [route]);

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
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
        <View style={styles.options}>
          <Pressable
            onPress={() => setActivepage(1)}
            style={activepage == 1 ? styles.option1 : styles.option2}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#0D0D0D",
                fontFamily: "Lexend500",
              }}
            >
              Active jobs (5)
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActivepage(2)}
            style={activepage == 2 ? styles.option1 : styles.option2}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#AFAEAE",
                fontFamily: "Lexend500",
              }}
            >
              Completed jobs (4)
            </Text>
          </Pressable>
        </View>
        {activepage == 1 && (
          <View style={{ gap: 16 }}>
            <Vehiclecard />
            <Vehiclecard />
            <Vehiclecard />
          </View>
        )}
        {activepage == 2 && (
          <View style={{ gap: 16 }}>
            <Vehiclecard />
            <Vehiclecard />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  add: {
    position: "absolute",
    right: 10,
    zIndex: 100,
    bottom: "3%",
  },
  options: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginBottom: 24,
    marginTop: 24,
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
});
