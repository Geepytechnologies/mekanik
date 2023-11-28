import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { heightPercentage } from "../../../../../utils/dimensions";
import { hidepaymentrequestmodal } from "../../../../utils/redux/slices/paymentrequest";
import { showpaymentrequestsuccessmodal } from "../../../../utils/redux/slices/paymentrequestsuccess";

const PaymentRequestmodal = ({ isVisible, closeModal }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlepress = () => {
    dispatch(hidepaymentrequestmodal());

    setTimeout(() => {
      dispatch(showpaymentrequestsuccessmodal());
    }, 400);
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
            Send Request?
          </Text>
          <Text
            style={{
              fontFamily: "Lexend300",
              fontSize: 14,
              color: "#525252",
              marginTop: 4,
            }}
          >
            You are about to send a payment request to this car owner. Please
            confirm below.
          </Text>
          <View style={styles.amount}>
            <View style={{ flex: 1 }}>
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
                  fontFamily: "Lexend300",
                  fontSize: 12,
                  color: "#525252",
                  marginTop: 4,
                }}
              >
                Withdrawal amount
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Lexend700",
                fontSize: 10,
                color: "#0059FF",
              }}
            >
              EDIT AMOUNT
            </Text>
          </View>
          <View style={styles.btncon}>
            <Pressable
              onPress={() => dispatch(hidepaymentrequestmodal())}
              style={styles.transbtn}
            >
              <Text style={styles.transbtntext}>Go BACK</Text>
            </Pressable>
            <Pressable onPress={handlepress} style={styles.blackbtn}>
              <Text style={styles.btntext}>SEND</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentRequestmodal;

const styles = StyleSheet.create({
  modalcon: {
    backgroundColor: "white",
    width: "100%",
    MinHeight: heightPercentage(60),
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
  btncon: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginTop: 40,
  },
  transbtn: {
    display: "flex",
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    flex: 1,
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
  transbtntext: {
    color: "black",
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Lexend700",
    fontStyle: "normal",
    lineHeight: 20,
    textTransform: "uppercase",
  },
  amount: {
    borderRadius: 8,
    marginTop: 24,
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderColor: "#EFEFEF",
    padding: 16,
    display: "flex",
    flexDirection: "row",
  },
});
