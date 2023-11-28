import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Transactionhistory from "../components/cards/Transactionhistory";
import Bankaccounts from "../components/Bankaccounts";
import Withdraw from "../components/modals/Withdraw";
import { useDispatch, useSelector } from "react-redux";
import {
  hidepaymentwithdraw,
  showpaymentwithdraw,
} from "../../../utils/redux/slices/withdrawmodal";
import Withdrawconfirm from "../components/modals/Withdrawconfirm";
import { hidepaymentwithdrawconfirm } from "../../../utils/redux/slices/withdrawmodalconfirm";
import Withdrawconfirmsuccess from "../components/modals/Withdrawconfirmsuccess";
import { hidepaymentwithdrawsuccess } from "../../../utils/redux/slices/withdrawmodalsuccess";
import Addaccount from "../components/modals/Addaccount";
import Addaccountsuccess from "../components/modals/Addaccountsuccess";
import { hideaddaccount } from "../../../utils/redux/slices/addaccount";
import { hideaddaccountsuccess } from "../../../utils/redux/slices/addaccountsuccess";

const Wallet = () => {
  const [activepage, setActivepage] = useState(1);
  const dispatch = useDispatch();
  const { showwithdrawmodal } = useSelector((state) => state.withdrawmodal);
  const { showwithdrawmodalconfirm } = useSelector(
    (state) => state.withdrawmodalconfirm
  );
  const { showwithdrawmodalsuccess } = useSelector(
    (state) => state.withdrawmodalsuccess
  );
  const { addaccountmodal } = useSelector((state) => state.addaccountmodal);
  const { addaccountsuccessmodal } = useSelector(
    (state) => state.addaccountsuccessmodal
  );
  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 16 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Wallet</Text>
        <View style={styles.balance}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.wallet}>Wallet Balance</Text>
            <Text style={styles.price}>₦45,000.00</Text>
          </View>
          <Pressable onPress={() => dispatch(showpaymentwithdraw())}>
            <Text style={styles.withdraw}>WITHDRAW</Text>
          </Pressable>
        </View>
        {/* options */}
        <View style={styles.options}>
          <Pressable
            onPress={() => setActivepage(1)}
            style={activepage == 1 ? styles.option1 : styles.option2}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#0D0D0D",
                fontFamily: "Lexend500",
              }}
            >
              Transaction history
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActivepage(2)}
            style={activepage == 2 ? styles.option1 : styles.option2}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#AFAEAE",
                fontFamily: "Lexend500",
              }}
            >
              Bank accounts
            </Text>
          </Pressable>
        </View>
        {/* transaction history */}
        {activepage == 1 && (
          <View style={{ marginVertical: 24 }}>
            <Transactionhistory />
            <Transactionhistory />
          </View>
        )}
        {/* bankaccount */}
        {activepage == 2 && (
          <View>
            <Bankaccounts />
          </View>
        )}
      </ScrollView>
      <Withdraw
        isVisible={showwithdrawmodal}
        closeModal={() => dispatch(hidepaymentwithdraw())}
      />
      <Withdrawconfirm
        isVisible={showwithdrawmodalconfirm}
        closeModal={() => dispatch(hidepaymentwithdrawconfirm())}
      />
      <Withdrawconfirmsuccess
        isVisible={showwithdrawmodalsuccess}
        closeModal={() => dispatch(hidepaymentwithdrawsuccess())}
      />
      <Addaccount
        isVisible={addaccountmodal}
        closeModal={() => dispatch(hideaddaccount())}
      />
      <Addaccountsuccess
        isVisible={addaccountsuccessmodal}
        closeModal={() => dispatch(hideaddaccountsuccess())}
      />
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  header: {
    fontFamily: "clashDisplaymedium",
    fontSize: 16,
    color: "#0D0D0D",
  },
  balance: {
    backgroundColor: "#F8F8F8",
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 16,
    marginTop: 24,
  },
  wallet: {
    color: "#868585",
    fontFamily: "Lexend300",
    fontSize: 12,
  },
  price: {
    color: "#0D0D0D",
    fontFamily: "Lexend600",
    fontSize: 32,
  },
  withdraw: {
    borderColor: "#D9D9D9",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 24,
    textAlign: "center",
    color: "#0D0D0D",
    fontFamily: "Lexend700",
    fontSize: 10,
  },
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
});
