import React, {Component} from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

const DonationScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Donation Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
                />
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