import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FolderScreen } from '../../../screens/User/Folder/FolderScreen';


const Stack = createStackNavigator();

export const StackFolder = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
              <Stack.Screen name="FolderScreen" component={FolderScreen} />
             
        </Stack.Navigator>
    )
}
