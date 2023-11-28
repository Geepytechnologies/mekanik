import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  hidesetpaymentmodal,
  showsetpaymentmodal,
} from "../../../utils/redux/slices/setpaymentmodal";
import Setpayment from "../components/modals/Setpayment";
import { hidesetpaymentsuccess } from "../../../utils/redux/slices/successmodal";
import Successmodal from "../components/modals/Success";
import CompletedSuccess from "../components/modals/CompletedSuccess";
import { hidecompletedjob } from "../../../utils/redux/slices/completedjobmodal";
import {
  hidecompletejob,
  showcompletejob,
} from "../../../utils/redux/slices/completejobmodal";
import Completejob from "../components/modals/Completejob";

const Jobinfo = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { setpaymentmodal } = useSelector((state) => state.setpaymentmodal);
  const { showsuccessmodal } = useSelector((state) => state.successmodal);
  const { completedjobmodal } = useSelector((state) => state.completedjobmodal);
  const { completejobmodal } = useSelector((state) => state.completejobmodal);

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.nav}>
          <FontAwesome
            onPress={() => navigation.goBack()}
            name="long-arrow-left"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.profilecon}>
          <View style={styles.profileimg}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../../../../assets/images/corolla.png")}
              resizeMode="cover"
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <View style={{ flex: 1, gap: 4 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Text style={{ fontFamily: "Lexend500", fontSize: 14 }}>
                Toyota Corolla
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "Lexend300",
                  fontSize: 12,
                  fontWeight: "300",
                }}
              >
                {`104, Ajagun Mafo street, off Adigun road, Onike, Ikeja, Lagos.`}
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                borderRadius: 12,
                backgroundColor: "#EEFBEE",
                padding: 8,
                alignSelf: "flex-start",
              }}
            >
              <Text
                style={{
                  fontFamily: "Lexend500",
                  color: "#28B328",
                  fontSize: 12,
                }}
              >
                Available
              </Text>
            </View>
          </View>
        </View>
        {/* rating */}
        <View style={styles.infocon}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <View style={styles.textcon}>
              <Text style={styles.text1}>Year</Text>
              <Text style={styles.text2}>2024</Text>
            </View>
            <View style={styles.textcon}>
              <Text style={styles.text1}>Model</Text>
              <Text style={styles.text2}>Corolla C23</Text>
            </View>
            <View style={styles.textcon}>
              <Text style={styles.text1}>VIN</Text>
              <Text style={styles.text2}>2039298432</Text>
            </View>
          </View>
          <View style={styles.hr}></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View>
              <View style={styles.profileimg2}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("../../../../../assets/images/mancartoon.png")}
                  resizeMode="cover"
                />
              </View>
            </View>
            <View style={{ flex: 1, gap: 4 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Text style={{ fontFamily: "Lexend500", fontSize: 14 }}>
                  Suraju James Alimi
                </Text>
                <MaterialCommunityIcons
                  name="check-decagram"
                  size={16}
                  color="#0059FF"
                />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Lexend300",
                    fontSize: 12,
                    fontWeight: "300",
                  }}
                >
                  Car owner
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.btncon}>
            <Pressable
              onPress={() => navigation.navigate("chatmechanic")}
              style={styles.transbtn}
            >
              <Text style={styles.transbtntext}>CONTACT</Text>
            </Pressable>
            <Pressable
              onPress={() => dispatch(showcompletejob())}
              style={styles.blackbtn}
            >
              <Text style={styles.btntext}>COMPLETE JOB</Text>
            </Pressable>
          </View>
        </View>
        {/* payment */}
        <View
          style={{
            padding: 16,
            borderColor: "#E6E5E5",
            borderWidth: 1,
            gap: 16,
          }}
        >
          <View>
            <Text style={styles.payment}>Payment:</Text>
            <Text style={styles.price}>{`₦ 0.00`}</Text>
          </View>
          <View>
            <Pressable
              onPress={() => dispatch(showsetpaymentmodal())}
              style={[styles.transbtn, { maxWidth: 144 }]}
            >
              <Text style={styles.transbtntext}>set payment</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <Setpayment
        isVisible={setpaymentmodal}
        closeModal={() => dispatch(hidesetpaymentmodal())}
      />
      <Successmodal
        isVisible={showsuccessmodal}
        closeModal={() => dispatch(hidesetpaymentsuccess())}
      />
      <Completejob
        isVisible={completejobmodal}
        closeModal={() => dispatch(hidecompletejob())}
      />
      <CompletedSuccess
        isVisible={completedjobmodal}
        closeModal={() => dispatch(hidecompletedjob())}
      />
    </SafeAreaView>
  );
};

export default Jobinfo;

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  profilecon: {
    marginTop: 24,
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
  },
  profileimg2: {
    backgroundColor: "#ffc2bd",
    borderRadius: 16,
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  infocon: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 24,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E6E5E5",
    marginBottom: 52,
  },
  textcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  textcon2: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  text1: {
    fontFamily: "Lexend300",
    fontSize: 12,
  },
  text2: {
    fontFamily: "Lexend500",
    fontSize: 14,
  },
  hr: {
    height: 1,
    backgroundColor: "#EFEFEF",
    marginVertical: 16,
  },
  btncon: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
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
    paddingHorizontal: 20,
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
  payment: {
    color: "#525252",
    fontFamily: "Lexend300",
    fontSize: 12,
  },
  price: {
    color: "#0D0D0D",
    fontFamily: "Lexend600",
    fontSize: 24,
  },
});
