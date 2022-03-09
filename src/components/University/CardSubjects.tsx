import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Subjects, Topics } from '../../interfaces/University/Subjects';
import { StackScreenProps } from '@react-navigation/stack';
import { StudentContext } from '../../context/Student/StudentContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Course } from '../../interfaces/University/Course';
import { AuthContext } from '../../context/Auth/AuthContext';


interface Props extends StackScreenProps<any, any> {
    data:Subjects,   
    teacher:string,
}

export const CardSubjects = ({data,teacher}:Props) => {


  const {registerCourses} = useContext(StudentContext);
  const {user} = useContext(AuthContext);

  const regCourses=async()=>{

     
   registerCourses(String(user?.user.email),data.id,teacher,data.nameSubject).then(resp=>{
      
      Alert.alert('Información','Registro exitoso, puedes observar el contenido en tu perfil')             
          
    }) 
  }


  return (
    <View>
        <TouchableOpacity onPress={()=>regCourses()} activeOpacity={0.8} style={stylesCardFaculty.container}>
        <Image
                style={{width:'100%',  borderTopLeftRadius:10,borderBottomLeftRadius:10,flex:0.45}}
                source={{
                  uri: data.photoURL,
                }}
         />
         <View style={{flexDirection:'column', flex:1, alignContent:'center', }}>
              <Text style={{alignItems:'center', textAlign:'left', fontWeight:'bold',fontSize:15, color:'#050f24', marginTop:10, marginHorizontal:15 }}>{data.nameSubject}</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{alignItems:'center', textAlign:'left', fontSize:15, color:'#050f24', marginTop:10, marginHorizontal:15 }}>Temas:</Text>
            <Text style={{alignItems:'center', textAlign:'left', fontSize:15, color:'#050f24', marginTop:10,}}>{data.themes}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{alignItems:'center', textAlign:'left', fontSize:15, color:'#050f24', marginTop:10, marginHorizontal:15 }}>Estudiantes:</Text>
            <Text style={{alignItems:'center', textAlign:'left', fontSize:15, color:'#050f24', marginTop:10 }}>{data.students}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{alignItems:'center', textAlign:'left', fontSize:15, color:'#050f24', marginTop:10, marginHorizontal:15 }}>Comentarios:</Text>
            <Text style={{alignItems:'center', textAlign:'left', fontSize:15, color:'#050f24', marginTop:10}}>{data.comments}</Text>
            </View>
            <Text style={{textAlign:'right', marginRight:15,fontWeight:'bold'}}>Inscribirse</Text>
     
         </View>
        </TouchableOpacity>
    </View>
  )
};

const stylesCardFaculty = StyleSheet.create({
  container: {        
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 10,
      height: 140,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,              
      elevation: 10,
      marginBottom: 15,
      alignContent:'center',
  },


});