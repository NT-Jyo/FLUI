import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RootStackParamsPerfil } from '../../../navigator/User/Perfil/StackPerfil';
import { StudentContext } from '../../../context/Student/StudentContext';
import { stylesGlobal } from '../../../theme/appTheme';
import { AuthContext } from '../../../context/Auth/AuthContext';
import { CardTopic } from '../../../components/User/CardTopic';



interface Props extends StackScreenProps<RootStackParamsPerfil, 'CourseDataScreen'> { }
export const CourseDataScreen = ({ route }: Props) => {
  
  const data = route.params;
  const { user } = useContext(AuthContext);
  const { getTopics, topic, getPhrase, phrase } = useContext(StudentContext);

  console.log(data,'data')

  const pharaseTeacher = phrase.find(resp => resp.uid === data.idTeacher)

  useEffect(() => {
    getTopics(data.idTeacher, data.idSubject)
    getPhrase();
  }, []);



  return (
    <View style={stylesGlobal.globalMargin}>
      <Text style={{ marginTop: 15, textAlign: 'center', fontWeight: 'bold', color: '#050f24' }}>Estudiante</Text>
      <Text style={{ marginTop: 15, textAlign: 'center' }}>{user?.user.email}</Text>
      <Text style={{ marginTop: 15, textAlign: 'center', fontWeight: 'bold', color: '#050f24' }}>{pharaseTeacher?.sentence}</Text>
      <View style={{ marginTop: 15, flex: 1 }}>
        <FlatList
          data={topic}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (


            <CardTopic  data={item}  />
          )} />

      </View>


    </View>
  )
};
