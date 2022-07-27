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
                    bottom: 10,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgrounColor: '#ffffff',
                    borderRadius: 15,
                    height: 100,
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
                                width: 50,
                                height: 50,

                            }}
                        />
                        <Text style={{color: '#000000', fontSize: 12}}>Events</Text>
                    </View>
                )
            
        }}
            />
            <Tab.Screen name="Qibla" component={QiblaScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('./assets/qibla.png')} //insert the image path when image is made
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
                            source={require('./assets/prayer-clock.png')} //insert the image path when image is made
                            resizeMode='contain'
                            style={{
                                width: 50,
                                height: 50,

                            }}
                        />
                        <Text style={{color: '#000000', fontSize: 12}}>Prayers</Text>
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
                        <Text style={{color: '#000000', fontSize: 12}}>Donate</Text>
                    </View>
                )
            
        }}
            />   
        </Tab.Navigator>
    );
}
export default Tabs;
