import * as React from 'react'; //For the nav function
import { NavigationContainer } from '@react-navigation/native'; //Nav functionality
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import botbutton from "/Users/Svaliani/icoproject1/botbuttons.js"; //To get the bottom nav buttons


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <botbutton/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
