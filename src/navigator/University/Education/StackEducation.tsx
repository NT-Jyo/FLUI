import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { UProgramScreen } from '../../../screens/University/Education/UProgramScreen';
import { UTeacherScreen } from '../../../screens/University/Education/UTeacherScreen';
import { CdFacultys, RootFaculty } from '../../../interfaces/University/Facultys';

export type RootStackParams = {
    UProgramScreen: CdFacultys,
    UTeacherScreen: CdFacultys,
}


const Stack = createStackNavigator<RootStackParams>();

export const StackEducation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: '#96999c'

            }
        }}>
            <Stack.Screen name="UProgramScreen" component={UProgramScreen} />
            <Stack.Screen name="UTeacherScreen" component={UTeacherScreen} />

        </Stack.Navigator>
    )
}
