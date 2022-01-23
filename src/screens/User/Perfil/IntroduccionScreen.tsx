import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TopicsContext } from '../../../context/Student/TopicsContext';
import { RootStackParamsPerfil } from '../../../navigator/User/Perfil/StackPerfil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Course } from '../../../interfaces/University/Course';




interface Props extends StackScreenProps<RootStackParamsPerfil, 'IntroduccionScreen'> { }

export const IntroduccionScreen = ({route}:Props) => {

    const dataTopics =route.params;
   
    const {getSeccionOne} = useContext(TopicsContext);
    const [Course, setCourse] = useState<Course>();

    console.log('dataTopics', dataTopics,'que hay')

   
    const getCourse = async()=>{
        await AsyncStorage.getItem('@Course').then(resp=>{
            if(resp!==null){
                const data:Course =JSON.parse(resp)
                console.log(data.idTeacher)
                getSeccionOne(data.idTeacher,data.idSubject,dataTopics.idTopic)
            }
        })
        
    }



    useEffect(() => {
        getCourse();

        
    }, []);
    
  return (
      <View>
          <Text>Hola mundo</Text>
      </View>
  )
};
