import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorUniversity } from '../University/NavigatorUniversity';
import { NavigatorUser } from '../User/NavigatorUser';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
export const NavigatorBottom = () => {  
    return (
      <Tab.Navigator screenOptions={{
        headerShown:false, 
        headerStyle:{
            elevation:0,
            shadowColor:'transparent'
        },      
      }}>
        <Tab.Screen name="NavigatorUniversity" component={NavigatorUniversity} />
        <Tab.Screen name="NavigatorUser" component={NavigatorUser} />           
      </Tab.Navigator>
    )
}
