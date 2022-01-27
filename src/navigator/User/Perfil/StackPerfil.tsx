import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PerfilScreen } from '../../../screens/User/Perfil/PerfilScreen';
import { CourseDataScreen } from '../../../screens/User/Perfil/CourseDataScreen';
import { Course } from '../../../interfaces/University/Course';
import { IntroduccionScreen } from '../../../screens/User/Perfil/IntroduccionScreen';
import { Topics } from '../../../interfaces/University/Subjects';
import { SectionOneScreen } from '../../../screens/User/Perfil/SectionOneScreen';
import { SectionTwoScreen } from '../../../screens/User/Perfil/SectionTwoScreen';
import { SectionThreeSceen } from '../../../screens/User/Perfil/SectionThreeSceen';



export type RootStackParamsPerfil = {
    PerfilScreen: undefined,
    CourseDataScreen: Course,
    IntroduccionScreen:Topics,
    SectionOneScreen:undefined, 
    SectionTwoScreen:undefined, 
    SectionThreeSceen:undefined,
}

const Stack = createStackNavigator<RootStackParamsPerfil>();;

export const StackPerfil = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
              <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
              <Stack.Screen name="CourseDataScreen" component={CourseDataScreen} />
              <Stack.Screen name="IntroduccionScreen" component={IntroduccionScreen} />
              <Stack.Screen name="SectionOneScreen" component={SectionOneScreen} />
              <Stack.Screen name="SectionTwoScreen" component={SectionTwoScreen} />
              <Stack.Screen name="SectionThreeSceen" component={SectionThreeSceen} />
        </Stack.Navigator>
    )
}
