import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Transactionhistory = () => {
  const num = [1, 2, 3];
  return (
    <View>
      <Text style={styles.date}>12/02/2023</Text>
      {/* transactioncard */}
      {num.map((index) => (
        <View
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomColor: "#EFEFEF",
            borderBottomWidth: 1,
            paddingVertical: 16,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Lexend300",
                color: "#0D0D0D",
                fontSize: 14,
              }}
            >
              withdraw to GTBank
            </Text>
            <Text
              style={{
                fontFamily: "Lexend400",
                color: "#AFAEAE",
                fontSize: 12,
              }}
            >
              11:23 AM
            </Text>
          </View>
          <Text style={styles.price}>₦45,000.00</Text>
        </View>
      ))}
    </View>
  );
};

export default Transactionhistory;

const styles = StyleSheet.create({
  date: {
    color: "#AFAEAE",
    fontFamily: "Lexend400",
    fontSize: 12,
    backgroundColor: "#F8F8F8",
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  price: {
    color: "#0D0D0D",
    fontFamily: "Lexend600",
    fontSize: 14,
  },
});
