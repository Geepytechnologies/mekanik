import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Ordercard = ({ gotopage }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container}>
      <View style={styles.cardcon}>
        <Text style={styles.cardkey}>Order ID</Text>
        <Text style={styles.cardvalue}>#01291</Text>
      </View>
      <View style={styles.cardcon}>
        <Text style={styles.cardkey}>Created</Text>
        <Text style={styles.cardvalue}>10/10/2022 • 11:23 AM</Text>
      </View>
      <View style={styles.cardcon}>
        <Text style={styles.cardkey}>Customer</Text>
        <Text style={styles.cardvalue}>James Peterson</Text>
      </View>
      <View style={styles.cardcon}>
        <Text style={styles.cardkey}>Product</Text>
        <Text style={styles.cardvalue}>Crank shaft</Text>
      </View>
      <View style={styles.cardcon}>
        <Text style={styles.cardkey}>Amount</Text>
        <Text style={styles.cardvalue}> ₦ 5,000</Text>
      </View>
      <View style={styles.cardcon}>
        <Text style={styles.cardkey}>Payment</Text>
        <View
          style={{
            borderRadius: 12,
            backgroundColor: "#EEFBEE",
            paddingHorizontal: 5,
            paddingVertical: 2,
          }}
        >
          <Text
            style={{
              fontFamily: "Lexend500",
              color: "#28B328",
              fontSize: 12,
            }}
          >
            Available
          </Text>
        </View>
      </View>
      <Pressable onPress={() => navigation.navigate(gotopage)}>
        <Text
          style={{
            fontFamily: "Lexend600",
            fontSize: 10,
            color: "#0059FF",
            textAlign: "center",
            marginTop: 12,
          }}
        >
          VIEW ORDER
        </Text>
      </Pressable>
    </Pressable>
  );
};

export default Ordercard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    borderColor: "#EFEFEF",
  },
  cardcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomColor: "#EFEFEF",
    borderBottomWidth: 1,
  },
  cardkey: {
    fontFamily: "Lexend300",
    fontSize: 12,
    color: "#525252",
  },
  cardvalue: {
    fontFamily: "Lexend300",
    fontSize: 12,
    color: "#0D0D0D",
  },
});
