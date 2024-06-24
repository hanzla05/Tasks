import { View, Text } from 'react-native'
import React from 'react'
import HomeButton from '../components/HomeButton'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../routes/RoutesConstants'

export default function Home() {
    const navigation = useNavigation()
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  <HomeButton onPress={()=>navigation.navigate(ROUTES.FlatlistExample)} title={'FlatList'}/>
  <HomeButton onPress={()=>navigation.navigate(ROUTES.CrudExample)}  marginTop={'5%'} title={'Redux CRUD'}/>
  <HomeButton onPress={()=>navigation.navigate(ROUTES.PermissionExample)} marginTop={'5%'} title={'Permissions'}/>
  <HomeButton onPress={()=>navigation.navigate(ROUTES.TopTab)}  marginTop={'5%'} title={'Material Top Tab'}/>
  <HomeButton onPress={()=>navigation.navigate(ROUTES.TrackPlayerExample)}  marginTop={'5%'} title={'Track Players'}/>
    </View>
  )
}