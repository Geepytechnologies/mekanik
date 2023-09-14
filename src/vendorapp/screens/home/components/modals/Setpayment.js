import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { heightPercentage } from "../../../../../utils/dimensions";

const Setpayment = ({ isVisible, closeModal }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  //   const showsuccessmodal = () => {
  //     dispatch(hiderm());
  //   };
  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      //   onModalHide={() => dispatch(showrsm())}
      onBackdropPress={closeModal}
    >
      <View style={styles.modalcon}>
        {/* Modal content goes here */}
        <Text style={styles.hire}>Set Payment</Text>
        <Text style={styles.hiredesc}>
          Set the cost of fixing the vehicle below..
        </Text>
        <View style={{ gap: 16, marginTop: 16 }}>
          <View style={{}}>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={4}
              placeholder="Amount to fix vehicle"
              value={text}
              onChangeText={(newText) => setText(newText)}
            />
            <Text>NGN</Text>
          </View>

          <Pressable onPress={() => dispatch()} style={styles.btn}>
            <Text style={styles.btntext}>save payment</Text>
          </Pressable>
        </View>
      </View>
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
    padding: 16,
    backgroundColor: "#F8F8F8",
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
});
