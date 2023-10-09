import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { heightPercentage } from "../../../../utils/dimensions";
import { showpaysuccessmodal } from "../../../../utils/redux/slices/paymentsuccessmodal";
import { hideproductdetailmodal } from "../../../../utils/redux/slices/productdetailsmodal";

const Productdetailsmodal = ({ isVisible, closeModal }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const timeoutDuration = Platform.OS === "ios" ? 400 : 500;

  const handlemadepayment = () => {
    dispatch(hideproductdetailmodal());

    setTimeout(() => {
      dispatch(showpaysuccessmodal());
    }, timeoutDuration);
  };

  return (
    <Modal
      style={{ margin: 0, display: "flex", alignItems: "center" }}
      isVisible={isVisible}
      onBackdropPress={closeModal}
      swipeDirection={["down"]}
      onSwipeComplete={closeModal}
      propagateSwipe={true}
    >
      <View style={styles.modalcon}>
        <View style={styles.content}>
          <Text
            style={{
              fontFamily: "clashDisplaymedium",
              fontSize: 24,
              color: "#0D0D0D",
            }}
          >
            Product Details
          </Text>
          <Text
            style={{
              fontFamily: "Lexend300",
              fontSize: 14,
              color: "#525252",
              marginTop: 4,
            }}
          >
            Details about the part you want to buy.
          </Text>
          {/* image */}
          <View
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <View style={styles.displayimg}>
              <Image
                style={{ width: "100%", height: "100%", borderRadius: 8 }}
                source={require("../../../../../assets/images/engine.png")}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={styles.amount}>
            <Text
              style={{
                fontFamily: "Lexend600",
                fontSize: 24,
                color: "#0D0D0D",
              }}
            >
              ₦45,000
            </Text>
            <Text
              style={{
                fontFamily: "Lexend500",
                fontSize: 12,
                color: "#0D0D0D",
                borderRadius: 12,
                paddingVertical: 4,
                paddingHorizontal: 8,
                backgroundColor: "#EFEFEF",
              }}
            >
              Delivery in 10 days
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Lexend300",
              fontSize: 14,
              color: "#525252",
              marginTop: 4,
            }}
          >
            Brand new Ferrari Engine
          </Text>
          <View style={styles.productdesc}>
            <Text
              style={{
                fontFamily: "Lexend400",
                fontSize: 12,
                color: "#868585",
              }}
            >
              Product description
            </Text>
            <Text
              style={{
                fontFamily: "Lexend300",
                fontSize: 14,
                color: "#868585",
                marginTop: 5,
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Cursus tortor sapien purus
              justo venenatis ipsum habitant augue purus. Aliquet mattis odio
              sed phasellus. Tincidunt viverra sit vestibulum cursus consectetur
              ut.
            </Text>
          </View>
          <View style={styles.btncon}>
            <Pressable onPress={handlemadepayment} style={styles.blackbtn}>
              <Text style={styles.btntext}>PROCEED TO PAYMENT</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Productdetailsmodal;

const styles = StyleSheet.create({
  modalcon: {
    backgroundColor: "white",
    width: "100%",
    MinHeight: heightPercentage(50),
    marginTop: "auto",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 36,
    paddingHorizontal: 16,
  },
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  displayimg: {
    backgroundColor: "#ff",
    borderRadius: 8,
    width: 328,
    height: 200,

    marginTop: 24,
  },
  btncon: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginTop: 40,
  },
  blackbtn: {
    display: "flex",
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
    flex: 1,
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
  amount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  productdesc: {
    marginTop: 36,
  },
});
