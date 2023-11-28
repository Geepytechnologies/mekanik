import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { hideaddaccount } from "../../../../utils/redux/slices/addaccount";
import { showaddaccountsuccess } from "../../../../utils/redux/slices/addaccountsuccess";
import { heightPercentage } from "../../../../../utils/dimensions";

const Addaccount = ({ isVisible, closeModal }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlepress = () => {
    dispatch(hideaddaccount());

    setTimeout(() => {
      dispatch(showaddaccountsuccess());
    }, 400);
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
        <Text style={styles.hire}>Add Account</Text>
        <Text style={styles.hiredesc}>
          Fill in the details below to proceed.
        </Text>
        <View style={{ gap: 16, marginTop: 16 }}>
          <Picker
            style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Select bank" value="" />
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            <Picker.Item label="Option 3" value="option3" />
          </Picker>
          <View
            style={{
              paddingVertical: 18,
              paddingHorizontal: 16,
              backgroundColor: "#F8F8F8",
            }}
          >
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={1}
              placeholder="Account no"
              value={text}
              onChangeText={(newText) => setText(newText)}
            />
          </View>
          <Text
            style={{ fontFamily: "Lexend300", fontSize: 12, color: "#868585" }}
          >
            Suraju James Peters
          </Text>
          <Pressable onPress={handlepress} style={styles.btn}>
            <Text style={styles.btntext}>ADD ACCOUNT</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Addaccount;

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
