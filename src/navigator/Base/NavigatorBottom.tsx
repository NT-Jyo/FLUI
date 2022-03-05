import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorUniversity } from '../University/NavigatorUniversity';
import { NavigatorUser } from '../User/NavigatorUser';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { stylesGlobal } from '../../theme/appTheme';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();
export const NavigatorBottom = () => {


  const heigtScreen =()=>{
    if(Platform.OS==='android'){
      return 70
    }else {
      return 90
    }
  }

  const bottomScreen =()=>{
    if(Platform.OS==='android'){
      return 5
    }else {
      return 0
    }
  }


  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor:'#fdc82a',
      headerShown: false,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
        
      },
      tabBarLabelStyle:{
        fontSize:15,
        marginBottom:bottomScreen(),
        
      },

      tabBarStyle: {
        backgroundColor: '#0f1f39',
        height:heigtScreen(),
        
      },
      

      tabBarIcon: ({ color, size }) => {
        let iconName: string = '';
        switch (route.name) {
          case 'NavigatorUniversity':
            iconName = 'school'
            color='white'
            break;
          case 'NavigatorUser':
            iconName = 'person-outline'
            color='white'
            break;

        }
        return <Icon name={iconName} color={color} size={size} style={{ marginTop: 5 }} />
      }

    })}


      /* ={{
        headerShown:false, 
        headerStyle:{
            elevation:0,
            shadowColor:'transparent'
        },
        tabBarStyle:{
          backgroundColor:'#0f1f39',

        },


        tabBarIcon:({color,size})=>{                
          let iconName:string='';
          switch (route.name) {
              case 'NavigatorTopTabsServices':                       
                  iconName='list'                      
                  break;
              case 'PerfilScreen':  
              iconName='person-outline'                      
              break;   
              case 'NavigatorServicesActive':
              iconName= 'schedule'   
          }
          return <Icon name ={iconName} color={color} size={size} style={{marginTop:5}}/>
      }
      }} */>
      <Tab.Screen name="NavigatorUniversity" component={NavigatorUniversity} options={{ title: 'Universidad' }} />
      <Tab.Screen name="NavigatorUser" component={NavigatorUser} options={{ title: 'Estudiante' }} />
    </Tab.Navigator>
  )
}
