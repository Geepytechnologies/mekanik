import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../SplashScreen';

const SplashNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="splash">
            <Stack.Screen
                name="splash"
                options={{
                    headerShown: false,
                }}
            >
                {(props) => <SplashScreen {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default SplashNavigator

const styles = StyleSheet.create({})