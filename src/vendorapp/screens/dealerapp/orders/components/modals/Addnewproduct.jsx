import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { heightPercentage } from "../../../../../../utils/dimensions";
import { Feather } from "@expo/vector-icons";
// import * as DocumentPicker from "expo-document-picker";
// import * as DocumentPicker from '@react-native-document-picker/document-picker';
// import * as DocumentPicker from "react-native-document-picker";
import { Platform } from "react-native";
import { useDispatch } from "react-redux";
import { showeditproductsuccess } from "../../../../../utils/redux/slices/editproductsuccess";

const Addnewproduct = ({ isVisible, closeModal }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const timeduration = Platform.OS == "ios" ? 400 : 700;
  const handlepress = () => {
    closeModal();

    setTimeout(() => {
      dispatch(showeditproductsuccess());
    }, timeduration);
  };
  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setSelectedFile(result);
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("file", {
        uri: result.uri,
        name: result.name,
        type: result.type,
      });

      // Send the file to your server
      // axios.post('YOUR_UPLOAD_ENDPOINT', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      console.log(
        `URI: ${result.uri}`,
        `Type: ${result.type}`,
        `Name: ${result.name}`,
        `Size: ${result.size}`
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the picker
      } else {
        throw err;
      }
    }
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
        <Text style={styles.hire}>Add New Product</Text>
        <Text style={styles.hiredesc}>
          Fill in the details below to proceed.
        </Text>
        <View style={{ gap: 16, marginTop: 16 }}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={1}
            placeholder="Product name"
            value={text}
            onChangeText={(newText) => setText(newText)}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#F8F8F8",
            }}
          >
            <TextInput
              style={[styles.textInput, { flex: 1 }]}
              multiline={true}
              numberOfLines={1}
              placeholder="Price"
              value={text}
              onChangeText={(newText) => setText(newText)}
            />
            <Text
              style={{
                fontFamily: "Lexend400",
                fontSize: 14,
                color: "#AFAEAE",
              }}
            >
              NGN
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#F8F8F8",
            }}
          >
            <TextInput
              style={[styles.textInput, { flex: 1 }]}
              multiline={true}
              numberOfLines={1}
              placeholder="Delivery timeline"
              value={text}
              onChangeText={(newText) => setText(newText)}
            />
            <Text
              style={{
                fontFamily: "Lexend400",
                fontSize: 14,
                color: "#AFAEAE",
              }}
            >
              DAYS
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={1}
            placeholder="Quantity"
            value={text}
            keyboardType="numeric"
            onChangeText={(newText) => setText(newText)}
          />
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={4}
            placeholder="Product Details"
            value={text}
            onChangeText={(newText) => setText(newText)}
          />
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#F8F8F8",
            }}
          >
            <Text style={[styles.textInput, { flex: 1 }]}>Product Image</Text>
            <Feather name="upload" size={20} color="#AFAEAE" />
          </Pressable>
          <Pressable onPress={handlepress} style={styles.btn}>
            <Text style={styles.btntext}>Add product</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Addnewproduct;

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
