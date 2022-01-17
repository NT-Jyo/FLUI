import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PerfilScreen } from '../../../screens/User/Perfil/PerfilScreen';

const Stack = createStackNavigator();

export const StackPerfil = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
              <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
             
        </Stack.Navigator>
    )
}
