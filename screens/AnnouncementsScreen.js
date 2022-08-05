import React, {Component} from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

const AnnouncementsScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Announcements Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
                />
        </View>
    );
}

export default AnnouncementsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})