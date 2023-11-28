import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { ScrollView } from "react-native";
import { hidesetpaymentmodal } from "../../../../../utils/redux/slices/setpaymentmodal";
import { showsetpaymentsuccess } from "../../../../../utils/redux/slices/successmodal";
import { heightPercentage } from "../../../../../../utils/dimensions";

const Setpayment = ({ isVisible, closeModal }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const timeoutDuration = Platform.OS === "ios" ? 400 : 500;

  const handlesetpayment = () => {
    dispatch(hidesetpaymentmodal());

    setTimeout(() => {
      dispatch(showsetpaymentsuccess());
    }, timeoutDuration);
  };

  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      //   onModalHide={() => dispatch(showrsm())}
      onBackdropPress={closeModal}
      swipeDirection={["down"]}
      onSwipeComplete={closeModal}
      propagateSwipe={true}
    >
      <KeyboardAvoidingView
        style={{ backgroundColor: "black", marginTop: "auto" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.modalcon}>
          {/* Modal content goes here */}
          <Text style={styles.hire}>Set Payment</Text>
          <Text style={styles.hiredesc}>
            Set the cost of fixing the vehicle below..
          </Text>
          <View style={{ gap: 16, marginTop: 16 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 16,
                backgroundColor: "#F8F8F8",
              }}
            >
              <TextInput
                style={styles.textInput}
                multiline={true}
                numberOfLines={1}
                placeholder="Amount to fix vehicle"
                value={text}
                onChangeText={(newText) => setText(newText)}
              />
              <Text>NGN</Text>
            </View>
            <View
              style={{
                backgroundColor: "#FFF1EC",
                paddingVertical: 12,
                paddingHorizontal: 16,
              }}
            >
              <Text style={styles.info}>
                30% will be sent to you once payment is received and the balance
                will be paid once job is done.
              </Text>
            </View>
            <Pressable onPress={handlesetpayment} style={styles.btn}>
              <Text style={styles.btntext}>save payment</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Setpayment;

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
  picker: {
    backgroundColor: "#F8F8F8",
    borderBottomColor: "#E6E5E5",
    borderBottomWidth: 1,
    borderStyle: "solid",
    color: "#AFAEAE",
    fontSize: 14,
    fontFamily: "Lexend300",
  },
  textInput: {
    color: "#AFAEAE",
    fontSize: 14,
    fontFamily: "Lexend300",
    flex: 1,
  },
  btn: {
    backgroundColor: "#0D0D0D",
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  btntext: {
    textTransform: "uppercase",
    fontFamily: "Lexend700",
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  info: {
    color: "#0D0D0D",
    fontFamily: "Lexend300",
    fontSize: 12,
    lineHeight: 16,
  },
});
