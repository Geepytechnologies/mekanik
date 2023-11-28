import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Reviewcard from "./components/Reviewcard";
import { FlatList } from "react-native";
import Purchasecard from "../components/cards/Purchasecard";
import Repairhistorycard from "../components/cards/Repairhistorycard";

const Vehicleinfo = ({ navigation }) => {
  const [text, setText] = useState("");
  // const navigation = useNavigation();

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
              source={require("../../../../assets/images/corolla.png")}
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
              <Text style={styles.text1}>Model</Text>
              <Text style={styles.text2}>Corolla C23</Text>
            </View>
            <View style={styles.textcon2}>
              <Text style={styles.text1}>Year</Text>
              <Text style={styles.text2}>2024</Text>
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
              <Text style={styles.text1}>VIN</Text>
              <Text style={styles.text2}>2039298432</Text>
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
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "Lexend500",
                color: "#868585",
                fontSize: 12,
              }}
            >
              Repair history
            </Text>
          </View>
          {/* card */}
          {/* <FlatList
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
          /> */}
          <Repairhistorycard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Vehicleinfo;

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
});
