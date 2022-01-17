import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackEducation } from './Education/StackEducation';
import { StackNew } from './News/StackNew';

const Tab = createMaterialTopTabNavigator();
export const NavigatorUniversity = () => {
    return (
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor:'white',         
          tabBarLabelStyle: { fontSize: 16 ,},
          tabBarStyle:{
            backgroundColor:'#0f1f39',

          },
          tabBarIndicatorStyle:{
            borderColor:'white',
            backgroundColor:'#fdc82a',
          }
        }}
      >
        <Tab.Screen name="StackEducation" options={{title:'Facultades'}} component={StackEducation} />
        <Tab.Screen name="StackNew" options={{title:'Noticias'}} component={StackNew} />
      </Tab.Navigator>
    )
}
