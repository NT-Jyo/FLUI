
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorStack } from './src/navigator/Base/NavigatorStack';
import { AuthProvider } from './src/context/Auth/AuthContext';
import { StatusBar } from 'react-native';
import { TeacherProvider } from './src/context/Teacher/TeacherContext';
import { StudentProvider } from './src/context/Student/StudentContext';
import { TopicsProvider } from './src/context/Student/TopicsContext';

const AppState= ({children}:any)=>{
  return(
    <AuthProvider>
      <StudentProvider>
        <TeacherProvider>
          <TopicsProvider>
           {children}
          </TopicsProvider>      
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
