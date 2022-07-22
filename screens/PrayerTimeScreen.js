import React, {Component} from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

const PrayerTimeScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Prayer Time Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
                />
        </View>
    );
}

export default PrayerTimeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})