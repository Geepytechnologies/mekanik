// fonts.js
import * as Font from "expo-font";

const fontsLoaded = {};

export const loadCustomFonts = async () => {
  // Define a list of fonts to load
  const fontList = [
    {
      name: "Lexend",
      file: require("../../assets/myfonts/Lexend/Lexend-VariableFont_wght.ttf"),
    },
    {
      name: "clashDisplay",
      file: require("../../assets/myfonts/ClashDisplay/Fonts/OTF/ClashDisplay-Regular.otf"),
    },
    {
      name: "clashDisplaymedium",
      file: require("../../assets/myfonts/ClashDisplay/Fonts/OTF/ClashDisplay-Medium.otf"),
    },
    {
      name: "clashDisplaybold",
      file: require("../../assets/myfonts/ClashDisplay/Fonts/OTF/ClashDisplay-Bold.otf"),
    },
    {
      name: "clashDisplaysemibold",
      file: require("../../assets/myfonts/ClashDisplay/Fonts/OTF/ClashDisplay-Semibold.otf"),
    },
    // Add more fonts here as needed
  ];

  await Promise.all(
    fontList.map(async (font) => {
      if (!fontsLoaded[font.name]) {
        await Font.loadAsync({
          [font.name]: font.file,
        });
        fontsLoaded[font.name] = true;
      }
    })
  );
};
