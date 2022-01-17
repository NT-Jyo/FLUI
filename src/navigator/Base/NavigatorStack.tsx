import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorBottom } from './NavigatorBottom';
import { LoginScreen } from '../../screens/LoginScreen';

const Stack = createStackNavigator();

export const NavigatorStack = () => {

    
    return (
        <Stack.Navigator screenOptions={{            
           
            headerStyle:{
                elevation:0,
                shadowColor:'transparent',                
                backgroundColor:'#050f24'
            },
            cardStyle:{
                backgroundColor:'white',               
            }
        }}>
              <Stack.Screen name="LoginScreen" options={{headerShown:false}}  component={LoginScreen} />
              <Stack.Screen name="NavigatorBottom" component={NavigatorBottom}  options={{title:'Universidad de Ibagué', headerTitleStyle:{
                  color:'#ecf0f2',
                  
              }}}  />
        </Stack.Navigator>
    )
}
