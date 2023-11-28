import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { hidepaymentwithdrawconfirm } from "../../../../utils/redux/slices/withdrawmodalconfirm";
import { showpaymentwithdrawsuccess } from "../../../../utils/redux/slices/withdrawmodalsuccess";
import { heightPercentage } from "../../../../../utils/dimensions";

const Withdrawconfirm = ({ isVisible, closeModal }) => {
  const dispatch = useDispatch();

  const handlegoback = () => {
    dispatch(hidepaymentwithdrawconfirm());
  };
  const handlewithdrawal = () => {
    dispatch(hidepaymentwithdrawconfirm());

    setTimeout(() => {
      dispatch(showpaymentwithdrawsuccess());
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
            Confirm Withdrawal
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
          <View style={styles.amount}>
            <Text
              style={{
                fontFamily: "Lexend600",
                fontSize: 24,
                color: "#0D0D0D",
              }}
            >
              Jamiu Akanni
            </Text>
            <Text
              style={{
                fontFamily: "Lexend300",
                fontSize: 12,
                color: "#525252",
                marginTop: 4,
              }}
            >
              GTBank
            </Text>
          </View>
          <View style={styles.btncon}>
            <Pressable onPress={handlegoback} style={styles.transbtn}>
              <Text style={styles.transbtntext}>Go BACK</Text>
            </Pressable>
            <Pressable onPress={handlewithdrawal} style={styles.blackbtn}>
              <Text style={styles.btntext}>WITHDRAW</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Withdrawconfirm;

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
  },
  paymentoption: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    backgroundColor: "white",
    gap: 12,
    borderRadius: 8,
  },
});
