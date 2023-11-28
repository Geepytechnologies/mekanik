import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { heightPercentage } from "../../../../utils/dimensions";
import { hidepaymentmodal } from "../../../../utils/redux/slices/Paymentmodalslice";
import Customcheckbox from "../../../../components/Customcheckbox";
import { showcardmodal } from "../../../../utils/redux/slices/addcardmodalslice";
import { showpaysuccessmodal } from "../../../../utils/redux/slices/paymentsuccessmodal";
import { showproductdetailmodal } from "../../../../utils/redux/slices/productdetailsmodal";

const Paymentmodal = ({ isVisible, closeModal, currentScreenName }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlegoback = () => {
    dispatch(hidepaymentmodal());

    setTimeout(() => {
      if (currentScreenName == "chatmechanic") {
        dispatch(showcardmodal());
      }
      if (currentScreenName == "spareparts2") {
        dispatch(showproductdetailmodal());
      }
    }, 400);
  };
  const handlemadepayment = () => {
    dispatch(hidepaymentmodal());

    setTimeout(() => {
      dispatch(showpaysuccessmodal());
    }, 400);
  };
  const checkifmodalisclosed = () => {
    return true;
  };
  return (
    <Modal
      style={{ margin: 0, display: "flex", alignItems: "center" }}
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onModalHide={checkifmodalisclosed}
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
            <View>
              <Customcheckbox
                label="Use existing card – Visa ending in 4242, expires 01/24"
                isChecked={isChecked}
                toggleCheckbox={toggleCheckbox}
              />
            </View>
          </View>
          <View style={styles.btncon}>
            <Pressable onPress={handlegoback} style={styles.transbtn}>
              <Text style={styles.transbtntext}>Go BACK</Text>
            </Pressable>
            <Pressable onPress={handlemadepayment} style={styles.blackbtn}>
              <Text style={styles.btntext}>MAKE PAYMENT</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Paymentmodal;

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
