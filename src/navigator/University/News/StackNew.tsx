import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NeHomeScreen } from '../../../screens/University/News/NeHomeScreen';


const Stack = createStackNavigator();

export const StackNew = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
              <Stack.Screen name="NeHomeScreen" component={NeHomeScreen} />
             
        </Stack.Navigator>
    )
}
