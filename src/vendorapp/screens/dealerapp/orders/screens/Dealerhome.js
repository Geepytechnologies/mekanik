import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Vehiclecard from "../components/cards/Ordercard";
import Ordercard from "../components/cards/Ordercard";
import { Ionicons } from "@expo/vector-icons";

const Dealerhome = ({ route }) => {
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
              New orders
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
              Completed
            </Text>
          </Pressable>
        </View>
        {/* black box */}
        <View style={styles.blackbox}>
          <View style={styles.boxcon}>
            <Text style={styles.total}>Total amount</Text>
            <Text style={styles.price}>₦ 10,000.00</Text>
          </View>
          <View style={styles.boxcon}>
            <Text style={styles.total}>New orders</Text>
            <Text style={styles.price}>2</Text>
          </View>
        </View>
        {/* searchbox */}
        <View style={styles.searchcon}>
          <Ionicons name="search" size={20} color="#AFAEAE" />
          <TextInput placeholder="Search" styles={styles.textinput} />
        </View>
        {activepage == 1 && (
          <View style={{ gap: 16 }}>
            <Ordercard gotopage={"orderinfo"} />
            <Ordercard gotopage={"orderinfo"} />
          </View>
        )}
        {activepage == 2 && (
          <View style={{ gap: 16 }}>
            <Ordercard gotopage={"orderinfo2"} />
            <Ordercard gotopage={"orderinfo2"} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dealerhome;

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
  total: {
    color: "#D9D9D9",
    fontFamily: "Lexend300",
    fontSize: 12,
  },
  price: {
    color: "#FFFFFF",
    fontFamily: "Lexend600",
    fontSize: 16,
  },
  blackbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1A1A1A",
    borderRadius: 4,
    padding: 16,
  },
  searchcon: {
    borderColor: "#E6E5E5",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginVertical: 16,
  },
});
