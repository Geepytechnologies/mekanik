import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Reviewcard from "../components/cards/Reviewcard";
import { FlatList } from "react-native";
import { API, Auth, graphqlOperation } from "aws-amplify"
import { createChatroom, createUserChatroom } from "../../../graphql/mutations";
import { chatroomExists } from "../../../services/chatRoomService";

const ContactMechanic = ({ navigation }) => {
  const [text, setText] = useState("");
  // const navigation = useNavigation();
  const route = useRoute()
  const { user } = route.params


  const handlePress = async () => {
    const authUser = await Auth.currentAuthenticatedUser()

    //check if we have a chatroom btw 2 users
    const response = await chatroomExists(user.id, authUser.attributes.sub)
    if (!response.status) {
      const newChatRoomData = await API.graphql(graphqlOperation(createChatroom, { input: {} }))
      if (!newChatRoomData.data?.createChatroom) {
        console.log("Error creating chat room")
      }
      const newchatroom = newChatRoomData.data?.createChatroom

      //add clicked user to chatroom
      await API.graphql(graphqlOperation(createUserChatroom, { input: { chatroomId: newchatroom.id, userId: user.id } }))

      //add auth user to chatroom
      await API.graphql(graphqlOperation(createUserChatroom, { input: { chatroomId: newchatroom.id, userId: authUser.attributes.sub } }))

      //navigate to chatroom
      navigation.navigate("chatmechanic", { id: newchatroom.id, name: user.fullname })
    } else {
      //navigate to chatroom
      navigation.navigate("chatmechanic", { id: response.chatroom, name: user.fullname })
    }


  }


  const reviewData = [
    {
      id: "1",
      name: "John Doe",
      rating: 5,
      comment:
        "His work was so good, although he charges so high, you will enjoy working although he charges...",
    },
    {
      id: "2",
      name: "Jane Smith",
      rating: 5,
      comment:
        "His work was so good, although he charges so high, you will enjoy working although he charges...",
    },
    {
      id: "3",
      name: "Alice Johnson",
      rating: 5,
      comment:
        "His work was so good, although he charges so high, you will enjoy working although he charges...",
    },
  ];
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
              source={{ uri: user.profileimg }}
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
                {user.fullname}
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
                {`Specialist: Toyota • Cars fixed: 12 Location: Ikeja, Lagos`}
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
                {user.availability}
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
              <Text style={styles.text1}>Cars fixed</Text>
              <Text style={styles.text2}>{user.carsfixed}</Text>
            </View>
            <View style={styles.textcon}>
              <Text style={styles.text1}>Rating</Text>
              <Text style={styles.text2}>{user.rating}</Text>
            </View>
            <View style={styles.textcon}>
              <Text style={styles.text1}>Experience</Text>
              <Text style={styles.text2}>12 yrs</Text>
            </View>
          </View>
          <View style={styles.hr}></View>
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
              <Text style={styles.text1}>Response time</Text>
              <Text style={styles.text2}>10 mins</Text>
            </View>
            <View style={styles.textcon}>
              <Text style={styles.text1}>Specialisations</Text>
              <Text style={styles.text2}>Toyota, Honda</Text>
            </View>
          </View>
        </View>
        {/* Review */}
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "Lexend500",
                color: "#868585",
                fontSize: 12,
              }}
            >
              Reviews (32)
            </Text>
            <Text
              style={{
                fontFamily: "Lexend600",
                color: "#0059FF",
                fontSize: 10,
              }}
            >
              VIEW ALL
            </Text>
          </View>
          {/* card */}
          <FlatList
            data={reviewData}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Reviewcard
                name={item.name}
                comment={item.comment}
                rating={item.rating}
              />
            )}
          />
        </View>
        {/* contact button */}
        <Pressable
          onPress={handlePress}
          style={{
            paddingVertical: 18,
            paddingHorizontal: 24,
            backgroundColor: "#0D0D0D",
            marginTop: 44,
          }}
        >
          <Text
            style={{
              fontFamily: "Lexend700",
              fontSize: 12,
              color: "white",
              textAlign: "center",
            }}
          >
            CONTACT MECHANIC
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactMechanic;

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
});
