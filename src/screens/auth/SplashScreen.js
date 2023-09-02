import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logocon}>
        <Image source={require('../../../assets/mekanik.png')} />
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={styles.aboutText}>
          We are here to connect mechanics and spare-part dealers to car owners,
          any day, anytime, anywhere.
        </Text>
      </View>
      {/* buttons */}
      <View style={styles.buttonCon}>
        <Pressable
          onPress={() => navigation.navigate('signUp')}
          style={styles.blackbtn}
        >
          <Text style={styles.btntext}>I&apos;m a car owner</Text>
        </Pressable>
        <View style={styles.whitebtn}>
          <Text>I&apos;m a vendor</Text>
        </View>
      </View>
      <View>
        <Text style={styles.subtext}>
          *Vendors include: mechanics & spare-part dealers*
        </Text>
      </View>
      {/* image */}
      <View style={styles.imgcon}>
        <Image
          source={require('../../../assets/images/Pre-comp.png')}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  logocon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 184,
    marginTop: 16,
  },
  aboutText: {
    color: '#0D0D0D',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Clash Display',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 32,
    width: 304,
  },
  buttonCon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 40,
    marginBottom: 16,
  },
  blackbtn: {
    display: 'flex',
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  whitebtn: {
    display: 'flex',
    paddingVertical: 18,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderStyle: 'solid',
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
  subtext: {
    color: '#868585',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Lexend',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 16,
    marginBottom: 56,
  },
  imgcon: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  image: {},
});
