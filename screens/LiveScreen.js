import React, {Component} from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

const LiveScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Live Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
                />
        </View>
    );
}

export default LiveScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})