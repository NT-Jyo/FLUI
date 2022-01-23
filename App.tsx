
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorStack } from './src/navigator/Base/NavigatorStack';
import { AuthProvider } from './src/context/Auth/AuthContext';
import { StatusBar } from 'react-native';
import { TeacherProvider } from './src/context/Teacher/TeacherContext';
import { StudentProvider } from './src/context/Student/StudentContext';

const AppState= ({children}:any)=>{
  return(
    <AuthProvider>
      <StudentProvider>
        <TeacherProvider>
          {children}
        </TeacherProvider>
      </StudentProvider>
    </AuthProvider>
  )
}

export const App = () => {


  return (
    <AppState>
      <NavigationContainer>
      <StatusBar
        backgroundColor='#050f24'
        barStyle='light-content'
      />
          <NavigatorStack/>
      </NavigationContainer>
    </AppState>
  )
}
