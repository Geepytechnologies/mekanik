import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const widthPercentage = (percentage) => (windowWidth * percentage) / 100;
export const heightPercentage = (percentage) =>
  (windowHeight * percentage) / 100;
