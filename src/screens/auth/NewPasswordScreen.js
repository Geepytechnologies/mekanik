import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';

const NewPasswordScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const loadFonts = async () => {
    await Font.loadAsync({
      // Replace 'FontName' with the actual font name you want to use
      Lexend: require('../../../assets/myfonts/Lexend/Lexend-VariableFont_wght.ttf'),
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercon}>
        <View style={styles.options}>
          <Text style={styles.welcome}>New Password?</Text>
          <Text style={styles.subtitle}>
            Create a new password for your account
          </Text>
        </View>
        {/* form */}
        <View>
          <View style={styles.passwordbox}>
            <TextInput
              style={styles.passwordboxinput}
              placeholder="Password"
              keyboardType="default"
            />
            <Pressable onPress={togglePasswordVisibility}>
              <Ionicons
                style={{ fontSize: 20 }}
                name={isPasswordVisible ? 'eye' : 'eye-off'}
              />
            </Pressable>
          </View>
          <View style={styles.passwordbox}>
            <TextInput
              style={styles.passwordboxinput}
              placeholder="Confirm Password"
              keyboardType="default"
            />
            <Pressable onPress={togglePasswordVisibility}>
              <Ionicons
                style={{ fontSize: 20 }}
                name={isPasswordVisible ? 'eye' : 'eye-off'}
              />
            </Pressable>
          </View>
          <View style={styles.blackbtn}>
            <Text style={styles.btntext}>Create Password</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    flex: 1,
  },
  innercon: {
    padding: 16,
  },
  blackbtn: {
    display: 'flex',
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  btntext: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontFamily: 'Lexend',
    fontWeight: 700,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  passwordbox: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderBottomColor: '#E6E5E5',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 16,
  },
  passwordboxinput: {
    flex: 1,
  },
  textbox: {
    backgroundColor: '#F8F8F8',
    borderBottomColor: '#E6E5E5',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  options: {
    display: 'flex',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 24,
  },
  welcome: {
    color: '#0D0D0D',
    fontSize: 24,
    fontFamily: 'Lexend',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 32,
  },
  subtitle: {
    color: '#525252',
    fontSize: 14,
    fontFamily: 'Lexend',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 20,
  },
  signin: {
    color: '#0059FF',
    fontSize: 12,
    fontFamily: 'Lexend',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
});
