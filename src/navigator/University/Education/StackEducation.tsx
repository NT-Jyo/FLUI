import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { UProgramScreen } from '../../../screens/University/Education/UProgramScreen';
import { UTeacherScreen } from '../../../screens/University/Education/UTeacherScreen';
import { CdFacultys, RootFaculty } from '../../../interfaces/University/Facultys';
import { USubjectScreen } from '../../../screens/University/Education/USubjectScreen';
import { Teacher } from '../../../interfaces/University/Teacher';
import { PerfilScreen } from '../../../screens/User/Perfil/PerfilScreen';
import { NavigatorUser } from '../../User/NavigatorUser';
import { NavigatorBottom } from '../../Base/NavigatorBottom';

export type RootStackParams = {
    UProgramScreen: CdFacultys,
    UTeacherScreen: CdFacultys,
    USubjectScreen: Teacher,
    
}


const Stack = createStackNavigator<RootStackParams>();

export const StackEducation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                

            }
        }}>
            <Stack.Screen name="UProgramScreen" component={UProgramScreen} />
            <Stack.Screen name="UTeacherScreen" component={UTeacherScreen} />
            <Stack.Screen name="USubjectScreen" component={USubjectScreen} />
           

        </Stack.Navigator>
    )
}
