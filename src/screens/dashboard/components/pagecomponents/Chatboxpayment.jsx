import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Read from "../../svgs/Read";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { showcardmodal } from "../../../../utils/redux/slices/addcardmodalslice";

const Chatboxpayment = ({ time, price }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlemodalshow = () => {
    dispatch(showcardmodal());
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Lexend300", fontSize: 12 }}>Car repair:</Text>
      <Text style={{ fontFamily: "Lexend500" }}>NGN {price}</Text>
      <Pressable
        onPress={handlemodalshow}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 24,
          backgroundColor: "#0D0D0D",
          marginTop: 16,
          marginBottom: 20,
          alignSelf: "flex-start",
        }}
      >
        <Text
          style={{
            fontFamily: "Lexend700",
            fontSize: 12,
            color: "white",
            textAlign: "center",
          }}
        >
          MAKE PAYMENT
        </Text>
      </Pressable>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Text style={styles.time}>{time}</Text>
        <Read />
      </View>
    </View>
  );
};

export default Chatboxpayment;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    paddingRight: 16,
    backgroundColor: "#EEFBEE",
    maxWidth: 284,
    minWidth: 284,
    alignSelf: "flex-end",
    marginBottom: 12,
  },
  comment: {
    fontFamily: "Lexend300",
    fontSize: 14,
    marginBottom: 12,
    flexWrap: "wrap",
  },
  time: {
    fontFamily: "Lexend400",
    fontSize: 10,
  },
});
