import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackFolder } from './Folder/StackFolder';
import { StackPerfil } from './Perfil/StackPerfil';


const Tab = createMaterialTopTabNavigator();

export const NavigatorUser = () => {
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
            <Tab.Screen name="StackPerfil" options={{title:'Perfil'}}  component={StackPerfil} />
            <Tab.Screen name="StackFolder" options={{title:'Proximamente'}} component={StackFolder} />
        </Tab.Navigator>
    )
}
