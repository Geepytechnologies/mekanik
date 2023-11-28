import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { Provider } from 'react-redux';
import store from '../../utils/redux/store';
import Navigator from '../../navigation';


const UserAppNavigator = () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Navigator />
                <StatusBar style="auto" />
            </View>
        </Provider>
    )
}

export default UserAppNavigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})