import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Text } from 'react-native';
import FetchData from"./FetchData";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";


//this is by no means finished. Finally was able to get the info on to the app and its 1:37... I wanna sleep... :,(

export default function PrayerTimeScreen() {
  // const [value, setValue] = useState();
  // useEffect(() => {
  //   let data = async () => {
  //     setValue(await FetchData());
  //   };
  //   data();
  // }, []);
  // if (!value) {
  //   return (
  //     <ActivityIndicator
  //       size="large"
  //       animating={true}
  //       color="rgba(137,232,207,100)"
  //     />
  //   );
  // }
  return (
    <Text>Hello</Text>
    // <ScrollView>
    //   {value.map((files, index) => (
    //     <Card key={index} style={styles.container}>
    //       <Card.Title
    //         title={<Text style={styles.title}>Prayer Times</Text>}
    //       />
    //       <Card.Content style={styles.content}>
    //         <Text style={styles.title}>Fajr:</Text>
    //         <Text style={styles.paragraph}>
    //           {!files[0] ? "Not Given" : files[0]}
    //         </Text>
    //       </Card.Content>
    //       <Card.Content style={styles.content}>
    //         <Text style={styles.title}>Dhuhr:</Text>
    //         <Text style={styles.paragraph}>
    //           {!files[1] ? "Not Given" : files[1]}
    //         </Text>
    //       </Card.Content>
    //       <Card.Content style={styles.content}>
    //         <Text style={styles.title}>Asr:</Text>
    //         <Text style={styles.paragraph}>
    //           {!files[3] ? "Not Provided" : files[2]}
    //         </Text>
    //       </Card.Content>
    //       <Card.Content style={styles.content}>
    //         <Text style={styles.title}>Maghrib</Text>
    //         <Text style={styles.paragraph}>
    //           {!files[4] ? "Not Provided" : files[3]}
    //         </Text>
    //       </Card.Content>
    //       <Card.Content style={styles.content}>
    //         <Text style={styles.title}>Isha:</Text>
    //         <Text style={styles.paragraph}>
    //           {!files[2] ? "Not Provided" : files[4]}
    //         </Text>
    //       </Card.Content>
    //     </Card>
    //   ))}
    // </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: "rgba(137,232,207,100)",
    borderColor: "rgba(137,232,207,100)",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 15,
  },
  paragraph: {
    fontSize: 18,
  },
});