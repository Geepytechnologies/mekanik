import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      // Replace 'FontName' with the actual font name you want to use
      Lexend: require('../../../assets/myfonts/Lexend/Lexend-VariableFont_wght.ttf'),
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  //comment

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hello John!</Text>
      <Text>What does your car need today?</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  name: {
    fontSize: 24,
    fontWeight: '500',
    color: '#0D0D0D',
    fontFamily: 'Lexend',
  },
});
