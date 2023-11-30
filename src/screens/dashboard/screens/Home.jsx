import { Image, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import Engineering from "../../../components/svgs/Engineering";
import { Pressable } from "react-native";
import Handyman from "../../../components/svgs/Handyman";
import Fuelstation from "../../../components/svgs/Fuelstation";
import Tips from "../../../components/svgs/Tips";
import Car from "../../../components/svgs/Car";
import { ScrollView, SafeAreaView } from "react-native";
import Blackfuelstation from "../../../components/svgs/Blackfuelstation";
import Hiremodal from "../components/modals/Hiremodal";
import Reachoutmodal from "../components/modals/Reachoutmodal";
import Reachoutsuccessmodal from "../components/modals/Reachoutsuccessmodal";
import { useDispatch, useSelector } from "react-redux";
import { hidersm } from "../../../utils/redux/slices/rsmslice";
import { hiderm } from "../../../utils/redux/slices/rmslice";
import Emergencymodal from "../components/modals/Emergencymodal";
import {
  hideemergencymodal,
  showemergencymodal,
} from "../../../utils/redux/slices/emergencymodal";
import Paymentsuccessmodal from "../components/modals/Paymentsuccessmodal";
import { hidepaysuccessmodal } from "../../../utils/redux/slices/paymentsuccessmodal";

const Home = ({ navigation }) => {
  const showthersm = useSelector((state) => state.rsm.show);
  const showtherm = useSelector((state) => state.rm.show);
  const { showemergency } = useSelector((state) => state.emergencymodal);
  const { showpaysuccess } = useSelector((state) => state.paymentsuccessmodal);
  const { currentuser } = useSelector((state) => state.userslice);

  const username = currentuser?.name.split(" ")[0];

  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalreachout = () => {
    dispatch(showemergencymodal());
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.name}>Hello {username}!</Text>
        <Text style={styles.desc}>What does your car need today?</Text>
        {/* grid */}
        <View style={styles.gridboxcontainer}>
          <View style={styles.gridbox}>
            <Pressable
              onPress={toggleModal}
              style={[
                styles.box,
                { borderTopLeftRadius: 8, borderRightWidth: 0 },
              ]}
            >
              <View style={styles.innerbox}>
                <View style={[styles.iconbox, { backgroundColor: "#FFF6DE" }]}>
                  <Engineering />
                </View>
                <Text style={styles.icontext}>Hire a mechanic</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("spareparts")}
              style={[styles.box, { borderTopRightRadius: 8 }]}
            >
              <View style={styles.innerbox}>
                <View style={[styles.iconbox, { backgroundColor: "#EEFBEE" }]}>
                  <Handyman />
                </View>
                <Text style={styles.icontext}>Buy spare parts</Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.box,
                {
                  borderBottomLeftRadius: 8,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                },
              ]}
            >
              <View style={styles.innerbox}>
                <View style={[styles.iconbox, { backgroundColor: "#EAF1FF" }]}>
                  <Fuelstation />
                </View>
                <Text style={styles.icontext}>Maintenance</Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.box,
                {
                  borderBottomRightRadius: 8,
                  borderTopWidth: 0,
                },
              ]}
            >
              <View style={styles.innerbox}>
                <View style={[styles.iconbox, { backgroundColor: "#FFF1EC" }]}>
                  <Tips />
                </View>
                <Text style={styles.icontext}>Tips & news</Text>
              </View>
            </Pressable>
          </View>
        </View>
        {/* Reach out */}
        <View style={styles.reachcon}>
          {/* vector */}
          <View style={styles.imgcon}>
            <Image
              source={require("../../../../assets/images/Vector.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          {/* content */}
          <View style={styles.reachcontent}>
            <View>
              <View style={[styles.iconbox, { backgroundColor: "#DA1212" }]}>
                <Car />
              </View>
            </View>
            <Text style={styles.reachtext}>
              Got an emergency? We are here for you. Click the button below
              right away!
            </Text>
            <Pressable onPress={toggleModalreachout} style={styles.btn}>
              <Text style={styles.btntext}>reach out now</Text>
            </Pressable>
          </View>
        </View>
        {/* more services */}
        <View style={{ marginTop: 32, marginBottom: 50 }}>
          <View>
            <Text
              style={{
                color: "#868585",
                fontSize: 12,
                fontFamily: "Lexend400",
              }}
            >
              More services:
            </Text>
            {/* grid */}
            <View style={styles.gridboxcontainer2}>
              <View style={[styles.gridbox, { gap: 12 }]}>
                <Pressable
                  style={[styles.box2, { backgroundColor: "#F8F8F8" }]}
                >
                  <View style={styles.innerbox2}>
                    <View
                      style={[styles.iconbox, { backgroundColor: "white" }]}
                    >
                      <Blackfuelstation />
                    </View>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.box2, { backgroundColor: "#F8F8F8" }]}
                >
                  <View style={styles.innerbox2}>
                    <View
                      style={[styles.iconbox, { backgroundColor: "white" }]}
                    >
                      <Blackfuelstation />
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        {/* modal */}
        <Hiremodal isVisible={isModalVisible} closeModal={toggleModal} />
        <Reachoutmodal
          isVisible={showtherm}
          closeModal={() => dispatch(hiderm())}
        />
        <Reachoutsuccessmodal
          isVisible={showthersm}
          closeModal={() => dispatch(hidersm())}
        />
        <Paymentsuccessmodal
          isVisible={showpaysuccess}
          closeModal={() => dispatch(hidepaysuccessmodal())}
        />
        <Emergencymodal
          isVisible={showemergency}
          closeModal={() => dispatch(hideemergencymodal())}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 32,
    color: "#0D0D0D",
    fontFamily: "clashDisplaymedium",
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    color: "#525252",
    fontFamily: "Lexend300",
  },
  gridboxcontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  gridboxcontainer2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  gridbox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "48%",
    aspectRatio: 1,
    borderColor: "#E6E5E5",
    borderWidth: 1,
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box2: {
    width: "48%",
    height: 100,
    borderColor: "#EFEFEF",
    borderWidth: 1,
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    padding: 16,
  },
  innerbox: {
    display: "flex",
    alignItems: "center",
  },
  innerbox2: {
    display: "flex",
    width: "100%",
  },
  iconbox: {
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 12,
  },
  icontext: {
    fontFamily: "Lexend400",
    fontSize: 12,
  },
  reachcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginTop: 32,
    borderRadius: 8,
    backgroundColor: "#0D0D0D",
    position: "relative",
    minHeight: 204,
    Minwidth: 328,
  },
  imgcon: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
  },
  reachcontent: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    borderRadius: 8,
  },
  reachtext: {
    fontFamily: "Lexend300",
    color: "white",
    fontSize: 14,
    marginBottom: 24,
  },
  btn: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 24,
    width: 144,
  },
  btntext: {
    textTransform: "uppercase",
    fontSize: 10,
    fontFamily: "Lexend700",
    textAlign: "center",
    color: "#0D0D0D",
  },
});
