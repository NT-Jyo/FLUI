import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { UProgramScreen } from '../../../screens/University/Education/UProgramScreen';


const Stack = createStackNavigator();

export const StackEducation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:'#afb2b7'
            }
        }}>
              <Stack.Screen name="UProgramScreen" component={UProgramScreen} />
             
        </Stack.Navigator>
    )
}
