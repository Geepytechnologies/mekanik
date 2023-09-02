import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const SuccessModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.popupCon}>
        <View style={styles.popup}>
          <View style={styles.content}>
            <Image source={require('../../assets/images/checkmark.png')} />
            <Text
              style={{
                marginBottom: 8,
                marginTop: 40,
                fontWeight: '600',
                fontSize: 24,
              }}
            >
              Success!
            </Text>
            <Text
              style={{
                marginBottom: 40,
                fontWeight: '300',
                fontSize: 14,
                color: '#525252',
                textAlign: 'center',
              }}
            >
              You have successfully reset and created a new password!
            </Text>
            <View style={styles.blackbtn}>
              <Text style={styles.btntext}>SIGN IN</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    opacity: 0.8,
    paddingBottom: 30,
  },
  popupCon: {
    width: '100%',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  popup: {
    backgroundColor: 'white',
    padding: 2,
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    minHeight: 312,
  },
  content: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackbtn: {
    display: 'flex',
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    width: '100%',
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
});
