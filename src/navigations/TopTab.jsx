import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeTab from '../Tabs/HomeTab';


const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeTab} />
        <Tab.Screen name="NotifyTab" component={HomeTab} />
        <Tab.Screen name="StatusTab" component={HomeTab} />
      </Tab.Navigator>
  );
};

export default TopTab;
