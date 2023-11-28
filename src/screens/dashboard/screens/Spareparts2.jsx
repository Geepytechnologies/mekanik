import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Image } from "react-native";
import Productdetailsmodal from "../components/modals/Productdetailsmodal";
import { useDispatch, useSelector } from "react-redux";
import {
  hideproductdetailmodal,
  showproductdetailmodal,
} from "../../../utils/redux/slices/productdetailsmodal";
import Paymentsuccessmodal from "../components/modals/Paymentsuccessmodal";
import { hidepaysuccessmodal } from "../../../utils/redux/slices/paymentsuccessmodal";

const Spareparts2 = ({ navigation }) => {
  const dispatch = useDispatch();
  const { showproductdetail } = useSelector((state) => state.productdetail);
  const { showpaysuccess } = useSelector((state) => state.paymentsuccessmodal);

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <View style={styles.nav}>
        <FontAwesome
          onPress={() => navigation.goBack()}
          name="long-arrow-left"
          size={24}
          color="black"
        />
      </View>
      <View style={styles.options}>
        <View style={styles.option1}>
          <Text
            style={{
              fontSize: 14,
              color: "#0D0D0D",
              fontFamily: "Lexend500",
            }}
          >
            Spare parts
          </Text>
        </View>
        <View style={styles.option2}>
          <Text
            style={{
              fontSize: 14,
              color: "#AFAEAE",
              fontFamily: "Lexend500",
            }}
          >
            Profile
          </Text>
        </View>
      </View>
      {/* grid */}
      <View style={styles.gridboxcontainer}>
        <View style={styles.gridbox}>
          <Pressable style={[styles.box]}>
            <View style={styles.innerbox}>
              <View style={styles.profilecon}>
                <View style={styles.profileimg}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={require("../../../../assets/images/crank.png")}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <View style={{ gap: 4 }}>
                <Text style={styles.icontext}>
                  Brand new Toyota Crank shaft
                </Text>
                <Text style={styles.price}>₦ 45,000</Text>
              </View>
              <Pressable
                onPress={() => dispatch(showproductdetailmodal())}
                style={styles.viewbox}
              >
                <Text style={styles.viewtext}>VIEW</Text>
              </Pressable>
            </View>
          </Pressable>
          <Pressable style={[styles.box]}>
            <View style={styles.innerbox}>
              <View style={styles.profilecon}>
                <View style={styles.profileimg}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={require("../../../../assets/images/fanbelt.png")}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <View style={{ gap: 4 }}>
                <Text style={styles.icontext}>Used fan belt</Text>
                <Text style={styles.price}>₦ 5,000</Text>
              </View>
              <Pressable
                onPress={() => dispatch(showproductdetailmodal())}
                style={styles.viewbox}
              >
                <Text style={styles.viewtext}>VIEW</Text>
              </Pressable>
            </View>
          </Pressable>
          <Pressable style={[styles.box]}>
            <View style={styles.innerbox}>
              <View style={styles.profilecon}>
                <View style={styles.profileimg}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={require("../../../../assets/images/engine.png")}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <View style={{ gap: 4 }}>
                <Text style={styles.icontext}>
                  Ferrari Engine, straight from factory
                </Text>
                <Text style={styles.price}>₦ 450,000</Text>
              </View>
              <Pressable
                onPress={() => dispatch(showproductdetailmodal())}
                style={styles.viewbox}
              >
                <Text style={styles.viewtext}>VIEW</Text>
              </Pressable>
            </View>
          </Pressable>
          <Pressable style={[styles.box]}>
            <View style={styles.innerbox}>
              <View style={styles.profilecon}>
                <View style={styles.profileimg}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={require("../../../../assets/images/crank.png")}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <View style={{ gap: 4 }}>
                <Text style={styles.icontext}>
                  Brand new Toyota Crank shaft
                </Text>
                <Text style={styles.price}>₦ 45,000</Text>
              </View>
              <Pressable
                onPress={() => dispatch(showproductdetailmodal())}
                style={styles.viewbox}
              >
                <Text style={styles.viewtext}>VIEW</Text>
              </Pressable>
            </View>
          </Pressable>
        </View>
      </View>
      <Productdetailsmodal
        isVisible={showproductdetail}
        closeModal={() => dispatch(hideproductdetailmodal())}
      />
      <Paymentsuccessmodal
        isVisible={showpaysuccess}
        closeModal={() => dispatch(hidepaysuccessmodal())}
      />
    </SafeAreaView>
  );
};

export default Spareparts2;

const styles = StyleSheet.create({
  options: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginBottom: 24,
    marginTop: 24,
  },
  option1: {
    borderBottomColor: "#0059FF",
    borderBottomStyle: "solid",
    borderBottomWidth: 4,
    paddingBottom: 8,
  },
  option2: {
    borderBottomColor: "#0059FF",
    borderBottomStyle: "solid",
    borderBottomWidth: 0,
    paddingBottom: 8,
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
    alignItems: "flex-start",
    gap: 12,
  },
  box: {
    width: 158,
    height: "auto",
    borderColor: "#EFEFEF",
    borderWidth: 1,
    borderStyle: "solid",
    display: "flex",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#F8F8F8",
  },
  innerbox: {
    display: "flex",
    gap: 16,
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
    fontFamily: "Lexend300",
    fontSize: 12,
    color: "#525252",
  },
  price: {
    fontFamily: "Lexend600",
    fontSize: 16,
    color: "#0D0D0D",
  },
  profilecon: {},
  profileimg: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  viewbox: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  viewtext: {
    color: "black",
    textAlign: "center",
    fontSize: 10,
    fontFamily: "Lexend700",
  },
});
