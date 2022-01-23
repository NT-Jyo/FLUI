import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { RootStackParams } from '../../../navigator/University/Education/StackEducation';
import { TeacherContext } from '../../../context/Teacher/TeacherContext';
import { FlatList } from 'react-native-gesture-handler';
import { stylesGlobal } from '../../../theme/appTheme';
import { CardSubjects } from '../../../components/University/CardSubjects';


interface Props extends StackScreenProps<RootStackParams, 'USubjectScreen'> { }
export const USubjectScreen = ({ route}: Props) => {

  const data =route.params
  const {getSubjects,subjects} = useContext(TeacherContext);


  useEffect(() => {
    getSubjects(data.email)
  }, []);
  

  return (

    <View style={stylesGlobal.globalMargin}>
    <FlatList
        data ={subjects}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}                
        renderItem={({item})=>(
            <CardSubjects data={item}/>                    
        )}/>

       
</View>
  )
};
