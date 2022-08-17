import React, {Component} from 'react';
import Paypal from './Paypal';
import { View, Text, Button, StyleSheet } from 'react-native';
const DonationScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Paypal/>
        </View>
    );
}

export default DonationScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})