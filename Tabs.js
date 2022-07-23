import React, {Component} from 'react';
import { Image, View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventScreen from "./screens/EventScreen";
import QiblaScreen from "./screens/QiblaScreen";
import PrayerTimeScreen from "./screens/PrayerTimeScreen";
import DonationScreen from "./screens/DonationScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgrounColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                }
            }}
        >
            <Tab.Screen name="events" component={EventScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('./assets/calendar.png')} //insert the image path when image is made
                            resizeMode='contain'
                            style={{
                                width: 56,
                                height: 50,

                            }}
                        />
                        <Text style={{color: '#000000', fontSize: 12}}>Events</Text>
                    </View>
                )
            
        }}
            />
            <Tab.Screen name="qibla" component={QiblaScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('./assets/qibla2.png')} //insert the image path when image is made
                            resizeMode='contain'
                            style={{
                                width: 50,
                                height: 50,

                            }}
                        />
                        <Text style={{color: '#000000', fontSize: 12}}>Qibla</Text>
                    </View>
                )
            
        }}
            />
            <Tab.Screen name="prayerTimes" component={PrayerTimeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('./assets/prayer-time.png')} //insert the image path when image is made
                            resizeMode='contain'
                            style={{
                                width: 50,
                                height: 50,

                            }}
                        />
                        <Text style={{color: '#000000', fontSize: 12}}>Prayer Time</Text>
                    </View>
                )
            
        }}
            />
            <Tab.Screen name="donate" component={DonationScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('./assets/donate.png')} //insert the image path when image is made
                            resizeMode='contain'
                            style={{
                                width: 50,
                                height: 50,

                            }}
                        />
                        <Text style={{color: '#000000', fontSize: 12}}>Donations</Text>
                    </View>
                )
            
        }}
            />   
        </Tab.Navigator>
    );
}
export default Tabs;
