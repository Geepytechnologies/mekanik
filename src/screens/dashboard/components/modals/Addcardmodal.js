import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { hidecardmodal } from "../../../../utils/redux/slices/addcardmodalslice";
import { heightPercentage } from "../../../../utils/dimensions";
import { showpaymentmodal } from "../../../../utils/redux/slices/Paymentmodalslice";

const Addcardmodal = ({ isVisible, closeModal }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlepress = () => {
    dispatch(hidecardmodal());

    setTimeout(() => {
      dispatch(showpaymentmodal());
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
            Confirm Payment
          </Text>
          <Text
            style={{
              fontFamily: "Lexend300",
              fontSize: 14,
              color: "#525252",
              marginTop: 4,
            }}
          >
            You are about to make payment to this mechanic. Please confirm
            below.
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
              Amount to be paid to Mechanic
            </Text>
          </View>
          <View style={styles.paymentoption}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Lexend300",
                  fontSize: 14,
                  color: "#525252",
                }}
              >
                Payment method:
              </Text>
              <Text
                style={{
                  fontFamily: "Lexend500",
                  fontSize: 14,
                  color: "#17191C",
                }}
              >
                Card
              </Text>
            </View>
            <View style={{ height: 1, backgroundColor: "#EFEFEF" }}></View>
            <Text>Add a card to make payment</Text>
          </View>
          <View style={styles.btncon}>
            <Pressable
              onPress={() => dispatch(hidecardmodal())}
              style={styles.transbtn}
            >
              <Text style={styles.transbtntext}>Go BACK</Text>
            </Pressable>
            <Pressable onPress={handlepress} style={styles.blackbtn}>
              <Text style={styles.btntext}>ADD CARD</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Addcardmodal;

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
