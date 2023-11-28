import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { showaddaccount } from "../../../utils/redux/slices/addaccount";

const Bankaccounts = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.bank}>0021459845 – GTBank</Text>
        <FontAwesome name="check-circle" size={24} color="#28B328" />
      </View>
      <Pressable onPress={() => dispatch(showaddaccount())}>
        <Text style={styles.add}>ADD NEW ACCOUNT</Text>
      </Pressable>
    </View>
  );
};

export default Bankaccounts;

const styles = StyleSheet.create({
  bank: {
    fontFamily: "Lexend300",
    color: "#525252",
    fontSize: 14,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#EFEFEF",
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  add: {
    fontFamily: "Lexend700",
    color: "#0059FF",
    fontSize: 10,
    marginVertical: 16,
  },
});
