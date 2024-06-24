import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from '../routes/RoutesConstants';
import Home from '../screens/Home';
import FlatlistExample from '../screens/FlatlistExample';
import CrudExample from '../screens/CrudExample';
import TopTab from './TopTab';
import TrackPlayerExample from '../screens/TrackPlayerExample';
import PermissionExample from '../screens/PermissionExample';


const AppNavigator = () => {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.Home} component={Home} />
        <Stack.Screen name={ROUTES.FlatlistExample} component={FlatlistExample} />
        <Stack.Screen name={ROUTES.CrudExample} component={CrudExample} />
        <Stack.Screen name={ROUTES.TopTab} component={TopTab} />
        <Stack.Screen name={ROUTES.TrackPlayerExample} component={TrackPlayerExample} />
        <Stack.Screen name={ROUTES.PermissionExample} component={PermissionExample} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})
