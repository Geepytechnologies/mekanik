import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { useDispatch } from "react-redux";
import { heightPercentage } from "../../../../../utils/dimensions";
import { showpaymentwithdrawconfirm } from "../../../../utils/redux/slices/withdrawmodalconfirm";
import { FontAwesome } from "@expo/vector-icons";

const Withdraw = ({ isVisible, closeModal }) => {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const timeoutDuration = Platform.OS === "ios" ? 400 : 500;

  const handlepress = () => {
    closeModal();
    setTimeout(() => {
      dispatch(showpaymentwithdrawconfirm());
    }, timeoutDuration);
  };
  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      onBackdropPress={closeModal}
      swipeDirection={["down"]}
      onSwipeComplete={closeModal}
      propagateSwipe={true}
    >
      <View style={styles.modalcon}>
        {/* Modal content goes here */}
        <Text style={styles.hire}>Withdraw</Text>
        <Text style={styles.hiredesc}>
          Fill in the details below to proceed.
        </Text>
        <View style={styles.inputcon}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={1}
            placeholder="Amount to withdraw"
            value={text}
            onChangeText={(newText) => setText(newText)}
          />
          <Text
            style={{ fontFamily: "Lexend400", fontSize: 14, color: "#AFAEAE" }}
          >
            NGN
          </Text>
        </View>
        {/* wallet balance */}
        <View style={{ marginVertical: 5 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Lexend300",
                fontSize: 12,
                color: "#868585",
              }}
            >
              Wallet balance:
            </Text>
            <Text
              style={{
                fontFamily: "Lexend500",
                fontSize: 12,
                color: "#525252",
              }}
            >
              ₦45,000.00
            </Text>
          </View>
        </View>
        {/* select banks */}
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontFamily: "Lexend400",
              fontSize: 12,
              color: "#868585",
            }}
          >
            Select bank account
          </Text>
          <View>
            <View style={styles.card}>
              <Text style={styles.bank}>0021459845 – GTBank</Text>
              <FontAwesome name="check-circle" size={24} color="#28B328" />
            </View>
            <View style={styles.card}>
              <Text style={styles.bank}>0021459845 – GTBank</Text>
              <FontAwesome name="check-circle" size={24} color="#28B328" />
            </View>
          </View>
        </View>
        <Pressable onPress={handlepress} style={styles.btn}>
          <Text style={styles.btntext}>CONTINUE</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  modalcon: {
    backgroundColor: "white",
    MinHeight: heightPercentage(50),
    marginTop: "auto",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 36,
    paddingHorizontal: 16,
  },
  hire: {
    fontFamily: "clashDisplaymedium",
    fontSize: 24,
    marginBottom: 4,
  },
  hiredesc: {
    fontFamily: "Lexend300",
    fontSize: 14,
    color: "#525252",
    marginBottom: 8,
  },
  inputcon: {
    gap: 16,
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E5E5",
  },
  textInput: {
    color: "#AFAEAE",
    fontSize: 14,
    fontFamily: "Lexend300",
    backgroundColor: "#F8F8F8",
    flex: 1,
  },
  btn: {
    backgroundColor: "#0D0D0D",
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  btntext: {
    textTransform: "uppercase",
    fontFamily: "Lexend700",
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
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
});
