

import { View, Text, Button, StyleSheet } from 'react-native';

const EventScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Event Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
                />
        </View>
    );
}

export default EventScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})