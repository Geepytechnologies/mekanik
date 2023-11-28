import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Chatboxreceiver from "../components/pagecomponents/Chatboxreceiver";
import Chatboxsender from "../components/pagecomponents/Chatboxsender";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Chatboxpayment from "../components/pagecomponents/Chatboxpayment";
import { useDispatch, useSelector } from "react-redux";
import {
  hidepaymentrequestmodal,
  showpaymentrequestmodal,
} from "../../../utils/redux/slices/paymentrequest";
import PaymentRequestmodal from "../components/modals/PaymentRequestmodal";
import PaymentRequestsuccessmodal from "../components/modals/PaymentRequestsuccessmodal";
import { hidepaymentrequestsuccessmodal } from "../../../utils/redux/slices/paymentrequestsuccess";
import { Pressable } from "react-native";

const Chatmechanic = ({ route }) => {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  const { paymentrequestmodal } = useSelector(
    (state) => state.paymentrequestmodal
  );
  const { paymentrequestsuccessmodal } = useSelector(
    (state) => state.paymentrequestsuccessmodal
  );
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ padding: 16, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={styles.nav}>
          <FontAwesome
            onPress={() => navigation.goBack()}
            name="long-arrow-left"
            size={24}
            color="black"
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text style={{ fontFamily: "clashDisplaymedium", fontSize: 16 }}>
              Suraju James Alimi
            </Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={16}
              color="#0059FF"
            />
          </View>
        </View>
        <View>
          <Chatboxreceiver
            message={
              "Hello Suraju! I want to fix my car. It is overheating and the AC stopped working few days ago."
            }
            time={"08:05"}
          />
          <Chatboxsender
            message={
              "Hello Suraju! I want to fix my car. It is overheating and the AC stopped working few days ago."
            }
            time={"10:52"}
          />
          <Chatboxreceiver
            message={
              "That will be all for now. Can you share what the cost will be?"
            }
            time={"11:05"}
          />
          <Chatboxpayment time={"11:30"} price={"45,000"} />
        </View>
      </ScrollView>
      <Pressable onPress={() => dispatch(showpaymentrequestmodal())}>
        <Text style={styles.sendpaybtn}>SEND PAYMENT REQUEST</Text>
      </Pressable>
      <View style={styles.sendbox}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={2}
          placeholder="Describe what you want"
          value={text}
          onChangeText={(newText) => setText(newText)}
        />
        <Ionicons name="send" size={24} color="black" />
      </View>
      <PaymentRequestmodal
        isVisible={paymentrequestmodal}
        closeModal={() => dispatch(hidepaymentrequestmodal())}
      />
      <PaymentRequestsuccessmodal
        isVisible={paymentrequestsuccessmodal}
        closeModal={() => dispatch(hidepaymentrequestsuccessmodal())}
      />
    </SafeAreaView>
  );
};

export default Chatmechanic;

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 26,
  },
  sendbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  textInput: {
    fontFamily: "Lexend300",
    fontSize: 14,
    flex: 1,
  },
  sendpaybtn: {
    fontFamily: "Lexend700",
    fontSize: 10,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    textAlign: "center",
    marginVertical: 16,
  },
});
