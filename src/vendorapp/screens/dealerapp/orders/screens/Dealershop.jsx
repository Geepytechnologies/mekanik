import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";
import Productcard from "../components/cards/Productcard";
import Productdetails from "../components/modals/Productdetails";
import { useDispatch, useSelector } from "react-redux";
import {
  hideproductdetailmodal,
  showproductdetailmodal,
} from "../../../../utils/redux/slices/productdetailsmodal";
import Deleteproduct from "../components/modals/Deleteproduct";
import { hidedeclinejob } from "../../../../utils/redux/slices/declinejob";
import { hidedeclinejobsuccess } from "../../../../utils/redux/slices/declinejobsuccess";
import Deletesuccess from "../components/modals/Deletesuccess";
import Editproduct from "../components/modals/Editproduct";
import {
  hideeditproduct,
  showeditproduct,
} from "../../../../utils/redux/slices/editproduct";
import Customsuccess from "../components/modals/Customsuccess";
import { hideeditproductsuccess } from "../../../../utils/redux/slices/editproductsuccess";
import Addnewproduct from "../components/modals/Addnewproduct";

const Dealershop = () => {
  const [viewlayout, setViewlayout] = useState(true);
  const array = [1, 2, 3, 4, 5, 6];
  const dispatch = useDispatch();
  const { showproductdetail } = useSelector((state) => state.productdetail);
  const { editproductmodal } = useSelector((state) => state.editproduct);
  const { editproductsuccessmodal } = useSelector(
    (state) => state.editproductsuccess
  );
  const { declinejobmodal } = useSelector((state) => state.declinejobmodal);
  const { declinejobsuccessmodal } = useSelector(
    (state) => state.declinejobsuccessmodal
  );

  return (
    <SafeAreaView style={{ padding: 16, position: "relative" }}>
      <Text style={styles.header}>Products (45)</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* searchbox */}
          <View style={styles.searchcon}>
            <Ionicons name="search" size={20} color="#AFAEAE" />
            <TextInput placeholder="Search" styles={styles.textinput} />
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Ionicons
              onPress={() => setViewlayout(true)}
              name="grid-outline"
              size={24}
              color={viewlayout ? "white" : "black"}
              style={
                viewlayout
                  ? { padding: 8, backgroundColor: "black", height: 40 }
                  : {
                      padding: 8,
                      borderWidth: 1,
                      borderColor: "black",
                      height: 40,
                    }
              }
            />
            <MaterialIcons
              onPress={() => setViewlayout(false)}
              name="format-list-bulleted"
              size={24}
              color={!viewlayout ? "white" : "black"}
              style={
                !viewlayout
                  ? {
                      padding: 8,
                      backgroundColor: "black",
                      height: 40,
                    }
                  : {
                      padding: 8,
                      borderWidth: 1,
                      borderColor: "black",
                      height: 40,
                    }
              }
            />
          </View>
        </View>
        {/* products */}
        {/* grid */}
        {viewlayout && (
          <View style={styles.gridboxcontainer}>
            <View style={styles.gridbox}>
              {/* card */}
              {array.map((index) => (
                <Pressable key={index} style={[styles.box]}>
                  <View style={styles.innerbox}>
                    <View style={styles.profilecon}>
                      <View style={styles.profileimg}>
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          source={require("../../../../../../assets/images/crank.png")}
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
                      <Text style={styles.viewtext}>VIEW PRODUCT</Text>
                    </Pressable>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        )}
        {/* list style */}
        {!viewlayout && (
          <View>
            {array.map((index) => (
              <View key={index}>
                <Productcard />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <Productdetails
        isVisible={showproductdetail}
        closeModal={() => dispatch(hideproductdetailmodal())}
      />
      <Deleteproduct
        isVisible={declinejobmodal}
        closeModal={() => dispatch(hidedeclinejob())}
      />
      <Deletesuccess
        isVisible={declinejobsuccessmodal}
        closeModal={() => dispatch(hidedeclinejobsuccess())}
      />
      <Editproduct
        isVisible={editproductmodal}
        closeModal={() => dispatch(hideeditproduct())}
      />
      <Customsuccess
        isVisible={editproductsuccessmodal}
        message="You have successfully updated the details of this product"
        closeModal={() => dispatch(hideeditproductsuccess())}
      />
      <Addnewproduct
        isVisible={editproductmodal}
        closeModal={() => dispatch(hideeditproduct())}
      />
      <Customsuccess
        isVisible={editproductsuccessmodal}
        message="You have successfully added a new product to your shop!"
        closeModal={() => dispatch(hideeditproductsuccess())}
      />
      <Pressable style={styles.add} onPress={() => dispatch(showeditproduct())}>
        <Image source={require("../../../../../../assets/images/add.png")} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Dealershop;

const styles = StyleSheet.create({
  add: {
    position: "absolute",
    right: 10,
    zIndex: 100,
    bottom: "3%",
  },
  searchcon: {
    borderColor: "#E6E5E5",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginVertical: 16,
    flex: 1,
  },
  header: {
    fontFamily: "clashDisplaymedium",
    fontSize: 16,
    color: "#0D0D0D",
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
    color: "#0059FF",
    textAlign: "center",
    fontSize: 10,
    fontFamily: "Lexend600",
  },
});
