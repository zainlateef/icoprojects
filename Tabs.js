import React, {Component} from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventScreen from "./screens/EventScreen";
import QiblaScreen from "./screens/QiblaScreen";
import PrayerTimeScreen from "./screens/PrayerTimeScreen";
import DonationScreen from "./screens/DonationScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="events" component={EventScreen}/>
            <Tab.Screen name="qibla" component={QiblaScreen}/>
            <Tab.Screen name="prayerTimes" component={PrayerTimeScreen}/>
            <Tab.Screen name="donate" component={DonationScreen}/>    
        </Tab.Navigator>
    );
}
export default Tabs;
