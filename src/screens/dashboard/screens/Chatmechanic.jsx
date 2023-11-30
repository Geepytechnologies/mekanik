import { Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Chatboxreceiver from "../components/pagecomponents/Chatboxreceiver";
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
import { API, graphqlOperation } from "aws-amplify"
import { createMessage } from "../../../graphql/mutations";
import Chatbox from "../components/pagecomponents/Chatbox";
import { ActivityIndicator } from "react-native";
import { getChatroom } from "../../../graphql/queries";
import moment from "moment/moment";
import { onCreateMessage } from "../../../graphql/subscriptions";
import { useRef } from "react";

const Chatmechanic = ({ route }) => {
  const { sendPushNotification, notification } = usePushNotifications();
  const [text, setText] = useState("");
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState(null);
  const navigation = useNavigation();
  const currentScreenName = route.name;
  const chatroomid = route.params.id
  const chatuser = route.params.name

  const { showcard } = useSelector((state) => state.addcardmodal);
  const { show } = useSelector((state) => state.paymentmodal);
  const { showpaysuccess } = useSelector((state) => state.paymentsuccessmodal);
  const { currentuser } = useSelector((state) => state.userslice);

  const scrollViewRef = useRef(null);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // Connect to the Socket.IO server
  //   const socket = io("http://192.168.0.3:5000"); // Change the URL to your server's URL
  //   setSocket(socket);

  //   socket.on("connect", () => {
  //     console.log("Connected to the server");
  //   });

  //   // Listen for the 'disconnect' event to check if the socket disconnected
  //   socket.on("disconnect", () => {
  //     console.log("Disconnected from the server");
  //   });

  //   // Listen for incoming messages
  //   socket.on("chat message", (msg) => {
  //     sendPushNotification("Mekanik", msg, {
  //       time: "",
  //     });
  //     dispatch(ADD_MESSAGE(msg))
  //     // setMessages((prevMessages) => [...prevMessages, msg]);
  //   });

  //   // Clean up the socket connection when the component unmounts
  //   return () => {
  //     if (socket) {
  //       socket.disconnect();
  //     }
  //   };
  // }, []);
  const isMyMessage = () => {
    return messages.user.id == currentuser.sub
  }

  // if (!messages) {
  //   return (
  //     <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  //       <ActivityIndicator />
  //     </View>
  //   )
  // }

  useEffect(() => {
    API.graphql(graphqlOperation(getChatroom, { id: chatroomid }))
      .then((result) => {
        const sortedMessages = result.data?.getChatroom?.Messages?.items.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );

        setMessages(sortedMessages);
      });
    scrollToBottom();

    // Subscription for new messages
    const subscription = API.graphql(graphqlOperation(onCreateMessage)).subscribe({
      next: ({ value }) => {
        console.log({ new: value })
        const newMessage = value.data.onCreateMessage;

        // Sort the existing messages and add the new message
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages, newMessage].sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );

          return updatedMessages;
        });
        scrollToBottom();


        // console.log({ messages });
      },
      error: (err) => console.warn(err),
    });
    return () => subscription.unsubscribe();
  }, [])

  const sendMessage = async () => {
    const myMessage = {
      chatroomID: chatroomid,
      text,
      userID: currentuser.sub
    }
    await API.graphql(graphqlOperation(createMessage, { input: myMessage }))
    setText("")
  }
  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} style={{}}>
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
                {chatuser}
              </Text>
              <MaterialCommunityIcons
                name="check-decagram"
                size={16}
                color="#0059FF"
              />
            </View>
          </View>
          <View>
            {messages?.map((item, index) => (
              <Chatbox key={index}
                message={
                  item.text
                }
                time={moment(item.createdAt).fromNow()}
                isMyMessage={isMyMessage}
              />

            ))}

            {/* <Chatboxpayment time={"11:30"} price={"45,000"} /> */}
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
          <Ionicons onPress={sendMessage} name="send" size={24} color="black" />
        </View>

      </KeyboardAvoidingView>
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
    marginBottom: 5,
  },
  textInput: {
    fontFamily: "Lexend300",
    fontSize: 14,
    flex: 1,
  },
});
