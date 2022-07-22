import React, {Component} from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

const QiblaScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Qibla Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
                />
        </View>
    );
}

export default QiblaScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})