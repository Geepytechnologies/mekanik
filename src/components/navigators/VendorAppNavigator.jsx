import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Vendortonavigate from '../../vendorapp/navigations/Vendortonavigate'
import vendorstore from '../../vendorapp/utils/redux/store'
import { Provider } from 'react-redux'
import { StatusBar } from "expo-status-bar";


const VendorAppNavigator = () => {
    return (
        <Provider store={vendorstore}>
            <View style={styles.container}>

                <Vendortonavigate />
                <StatusBar style="auto" />
            </View>
        </Provider>
    )
}

export default VendorAppNavigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})