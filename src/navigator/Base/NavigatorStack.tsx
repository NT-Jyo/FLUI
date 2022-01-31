import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorBottom } from './NavigatorBottom';
import { LoginScreen } from '../../screens/LoginScreen';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

export const NavigatorStack = () => {


    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = (user: any) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

        return () => {
            subscriber;
        }
    }, []);

    if (initializing) return null;

    return (
        <Stack.Navigator screenOptions={{

            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
                backgroundColor: '#050f24'
            },
            cardStyle: {
                backgroundColor: 'white',
            }
        }}>

            {
                (!user)
                    ? (
                        <>
                            <Stack.Screen name="NavigatorBottom" component={NavigatorBottom} options={{
                                title: 'Universidad de Ibagué', headerTitleStyle: {
                                    color: '#ecf0f2',

                                }
                            }} />
                        </>
                    )
                    : (
                        <>

                            <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
                            <Stack.Screen name="NavigatorBottom" component={NavigatorBottom} options={{
                                title: 'Universidad de Ibagué', headerTitleStyle: {
                                    color: '#ecf0f2',

                                }
                            }} />
                        </>
                    )
            }

        </Stack.Navigator>
    )
}
