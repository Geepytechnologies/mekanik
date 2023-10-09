import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { heightPercentage } from "../../../../utils/dimensions";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const Hiremodal = ({ isVisible, closeModal }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const handlepress = () => {
    closeModal();
    navigation.navigate("availablemechanics");
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
        <Text style={styles.hire}>Hire a Mechanic</Text>
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
            <Picker.Item label="Select your car" value="" />
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            <Picker.Item label="Option 3" value="option3" />
          </Picker>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={4}
            placeholder="Input other details you want to share with the mechanic"
            value={text}
            onChangeText={(newText) => setText(newText)}
          />
          <View>
            <Picker
              style={styles.picker}
              selectedValue2={selectedValue2}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue2(itemValue)
              }
            >
              <Picker.Item label="Your location" value="" />
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker>
          </View>
          <Pressable onPress={handlepress} style={styles.btn}>
            <Text style={styles.btntext}>see available mechanics</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Hiremodal;

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
