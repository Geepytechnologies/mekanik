import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { hidecompletejob } from "../../../../../utils/redux/slices/completejobmodal";
import { heightPercentage } from "../../../../../../utils/dimensions";
import { showcompletedjob } from "../../../../../utils/redux/slices/completedjobmodal";

const Completeorder = ({ isVisible, closeModal }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlepress = () => {
    dispatch(hidecompletejob());

    setTimeout(() => {
      dispatch(showcompletedjob());
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
            Complete Order?
          </Text>
          <Text
            style={{
              fontFamily: "Lexend300",
              fontSize: 14,
              color: "#525252",
              marginTop: 4,
            }}
          >
            You are about to complete this order, indicating the product has
            been delivered. Once confirmed, your payment will be credited into
            your wallet.
          </Text>
          <View style={styles.btncon}>
            <Pressable
              onPress={() => dispatch(hidecompletejob())}
              style={styles.transbtn}
            >
              <Text style={styles.transbtntext}>Go BACK</Text>
            </Pressable>
            <Pressable onPress={handlepress} style={styles.blackbtn}>
              <Text style={styles.btntext}>COMPLETE</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Completeorder;

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
});
