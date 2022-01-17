import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackFolder } from './Folder/StackFolder';
import { StackPerfil } from './Perfil/StackPerfil';


const Tab = createMaterialTopTabNavigator();

export const NavigatorUser = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="StackPerfil" options={{title:'Perfil'}}  component={StackPerfil} />
            <Tab.Screen name="StackFolder" options={{title:'Proximamente'}} component={StackFolder} />
        </Tab.Navigator>
    )
}
