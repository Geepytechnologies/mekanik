import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
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
import Addcardmodal from "../components/modals/Addcardmodal";
import { useDispatch, useSelector } from "react-redux";
import { hidecardmodal } from "../../../utils/redux/slices/addcardmodalslice";
import Paymentmodal from "../components/modals/Paymentmodal";
import { hidepaymentmodal } from "../../../utils/redux/slices/Paymentmodalslice";
import Paymentsuccessmodal from "../components/modals/Paymentsuccessmodal";
import { hidepaysuccessmodal } from "../../../utils/redux/slices/paymentsuccessmodal";
import { io } from "socket.io-client";
import { usePushNotifications } from "../../../hooks/usePushNotifications";
import { Pressable } from "react-native";

const Chatmechanic = ({ route }) => {
  const { sendPushNotification, notification } = usePushNotifications();
  const [text, setText] = useState("");
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const currentScreenName = route.name;

  const { showcard } = useSelector((state) => state.addcardmodal);
  const { show } = useSelector((state) => state.paymentmodal);
  const { showpaysuccess } = useSelector((state) => state.paymentsuccessmodal);
  const dispatch = useDispatch();

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io("http://192.168.0.3:5000"); // Change the URL to your server's URL
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    // Listen for the 'disconnect' event to check if the socket disconnected
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    // Listen for incoming messages
    socket.on("chat message", (msg) => {
      sendPushNotification("Mekanik", msg, {
        time: "",
      });
      dispatch(ADD_MESSAGE(msg))
      // setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

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
      <Addcardmodal
        isVisible={showcard}
        closeModal={() => dispatch(hidecardmodal())}
      />
      <Paymentmodal
        isVisible={show}
        closeModal={() => dispatch(hidepaymentmodal())}
        currentScreenName={currentScreenName}
      />
      <Paymentsuccessmodal
        isVisible={showpaysuccess}
        closeModal={() => dispatch(hidepaysuccessmodal())}
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
});
