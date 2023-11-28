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
import { heightPercentage } from "../../../../utils/dimensions";
import { useNavigation } from "@react-navigation/native";
import Successmodal from "./Successmodal";
import { useDispatch, useSelector } from "react-redux";
import {
  hidegaragesuccess,
  showgaragesuccess,
} from "../../../../utils/redux/slices/garagesuccessmodal";
import { hidevehiclemodal } from "../../../../utils/redux/slices/addvehiclemodal";

const Addvehiclemodal = ({ isVisible, closeModal }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const timeoutDuration = Platform.OS === "ios" ? 400 : 600;

  const handlepress = () => {
    closeModal();

    setTimeout(() => {
      dispatch(showgaragesuccess());
    }, timeoutDuration);
  };
  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      swipeDirection={["down"]}
      onSwipeComplete={closeModal}
      propagateSwipe={true}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        style={styles.modalcon}
      >
        {/* Modal content goes here */}
        <Text style={styles.hire}>Add a Vehicle</Text>
        <Text style={styles.hiredesc}>
          Fill in the details below to proceed.
        </Text>
        <View style={{ gap: 16, marginTop: 16 }}>
          <View style={styles.textinputcon}>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={1}
              placeholder="Vehicle name"
              // value={text}
              // onChangeText={(newText) => setText(newText)}
            />
          </View>
          <View style={styles.textinputcon}>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={1}
              placeholder="Vehicle model"
              // value={text}
              // onChangeText={(newText) => setText(newText)}
            />
          </View>
          <View style={styles.textinputcon}>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={1}
              placeholder="Year of production"
              // value={text}
              // onChangeText={(newText) => setText(newText)}
            />
          </View>
          <View style={styles.textinputcon}>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={1}
              placeholder="Registration number"
              // value={text}
              // onChangeText={(newText) => setText(newText)}
            />
          </View>
          <View style={styles.textinputcon}>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={1}
              placeholder="VIN/chassis number"
              // value={text}
              // onChangeText={(newText) => setText(newText)}
            />
          </View>
          <View style={styles.textinputcon}>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={1}
              placeholder="Image of vehicle"
              // value={text}
              // onChangeText={(newText) => setText(newText)}
            />
          </View>
          <Pressable onPress={handlepress} style={styles.btn}>
            <Text style={styles.btntext}>add vehicle</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default Addvehiclemodal;

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
  textinputcon: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: "#F8F8F8",
  },
  textInput: {
    display: "flex",
    color: "#AFAEAE",
    fontSize: 14,
    fontFamily: "Lexend300",
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
