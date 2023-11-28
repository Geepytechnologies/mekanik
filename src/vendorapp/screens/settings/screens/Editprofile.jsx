import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";
import Cameraicon from "../svgs/Cameraicon";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import editsuccessmodal, {
  hideeditsuccess,
  showeditsuccess,
} from "../../../utils/redux/slices/editsuccessmodal";
import Editsuccess from "../components/modals/Editsuccess";

const Editprofile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { showeditsuccessmodal } = useSelector(
    (state) => state.editsuccessmodal
  );
  return (
    <SafeAreaView style={{ padding: 16 }}>
      <View style={styles.nav}>
        <FontAwesome
          onPress={() => navigation.goBack()}
          name="long-arrow-left"
          size={24}
          color="black"
        />
        <Text style={styles.navtext}>Edit Profile</Text>
      </View>
      <View style={styles.profilecon}>
        <View style={styles.profileimg}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../../../assets/images/mancartoon.png")}
            resizeMode="cover"
          />
          <View style={styles.profileimg2}>
            <Cameraicon />
          </View>
        </View>
      </View>
      {/* form */}
      <View>
        <View style={styles.textbox}>
          <TextInput
            style={{ fontFamily: "Lexend300", fontSize: 14 }}
            placeholder="Full Name"
            keyboardType="default"
            placeholderTextColor="#AFAEAE"
          />
        </View>
        <View style={styles.textbox}>
          <TextInput
            styles={{ fontFamily: "Lexend300", fontSize: 14 }}
            placeholder="Phone Number"
            keyboardType="numeric"
            placeholderTextColor="#AFAEAE"
          />
        </View>
        <View style={styles.passwordbox}>
          <TextInput
            style={styles.passwordboxinput}
            placeholder="Home Address"
            keyboardType="default"
            multiline={true}
            numberOfLines={3}
          />
        </View>
        <Pressable
          onPress={() => dispatch(showeditsuccess())}
          style={styles.blackbtn}
        >
          <Text style={styles.btntext}>SAVE CHANGES</Text>
        </Pressable>
      </View>
      <Editsuccess
        isVisible={showeditsuccessmodal}
        closeModal={() => dispatch(hideeditsuccess())}
      />
    </SafeAreaView>
  );
};

export default Editprofile;

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  profilecon: {
    marginTop: 40,
    marginBottom: 16,
  },
  profileimg: {
    backgroundColor: "#ffc2bd",
    borderRadius: 16,
    width: 104,
    height: 104,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  profileimg2: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 16,
    width: 104,
    height: 104,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
  },
  blackbtn: {
    display: "flex",
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
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
  passwordbox: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    borderBottomColor: "#E6E5E5",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 16,
  },
  passwordboxinput: {
    flex: 1,
  },
  textbox: {
    backgroundColor: "#F8F8F8",
    borderBottomColor: "#E6E5E5",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});
