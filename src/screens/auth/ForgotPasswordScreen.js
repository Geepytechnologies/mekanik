import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPasswordScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercon}>
        <View style={styles.options}>
          <Text style={styles.welcome}>Forgot Password?</Text>
          <Text style={styles.subtitle}>
            Kindly enter your registered email address or phone number to reset
            your password.
          </Text>
        </View>
        {/* form */}
        <View>
          <View style={styles.textbox}>
            <TextInput
              placeholder="Email address / phone number"
              keyboardType="default"
              placeholderTextColor="#AFAEAE"
            />
          </View>
          <View style={styles.blackbtn}>
            <Text style={styles.btntext}>PROCEED</Text>
          </View>
        </View>
      </View>
      <View style={styles.account}>
        <Text style={styles.already}>Remember password?</Text>
        <Text style={styles.signin}>SIGN IN</Text>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

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
    fontFamily: 'Lexend',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 20,
    textTransform: 'uppercase',
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
  account: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 5,
    marginTop: 'auto',
    backgroundColor: '#F8F8F8',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  already: {
    color: '#0D0D0D',
    fontSize: 14,
    // fontFamily: 'Lexend',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 20,
  },
  welcome: {
    color: '#0D0D0D',
    fontSize: 24,
    // fontFamily: 'Lexend',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 32,
  },
  subtitle: {
    color: '#525252',
    fontSize: 14,
    // fontFamily: 'Lexend',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 20,
  },
  signin: {
    color: '#0059FF',
    fontSize: 12,
    // fontFamily: 'Lexend',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
});
