import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { showproductdetailmodal } from "../../../../../../utils/redux/slices/productdetailsmodal";
import { useDispatch } from "react-redux";

const Productcard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <Pressable style={styles.container}>
      <View style={styles.cardcon}>
        <Text style={styles.cardkey}>Product</Text>
        <Text style={styles.cardvalue}>Brand new Toyota Crank shaft</Text>
      </View>
      <View style={styles.cardcon}>
        <Text style={styles.cardkey}>Price</Text>
        <Text style={styles.cardvalue}> ₦ 5,000</Text>
      </View>
      <View style={styles.cardcon}>
        <Text style={styles.cardkey}>Quantity</Text>
        <Text style={styles.cardvalue}>10</Text>
      </View>
      <Pressable onPress={() => dispatch(showproductdetailmodal())}>
        <Text
          style={{
            fontFamily: "Lexend600",
            fontSize: 10,
            color: "#0059FF",
            textAlign: "center",
            marginTop: 12,
          }}
        >
          VIEW PRODUCT
        </Text>
      </Pressable>
    </Pressable>
  );
};

export default Productcard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    borderColor: "#EFEFEF",
    marginVertical: 4,
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
