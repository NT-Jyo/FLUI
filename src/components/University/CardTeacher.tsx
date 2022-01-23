import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Teacher } from '../../interfaces/University/Teacher';
import { useNavigation } from '@react-navigation/native';


interface Props{
    data:Teacher,
    
}

export const CardTeacher = ({data}:Props) => {

  const navigation = useNavigation();

  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.navigate('USubjectScreen',data)} activeOpacity={0.8} style={stylesCardFaculty.container}>
        <Image
                style={{width:'100%',  borderTopLeftRadius:10,borderBottomLeftRadius:10,flex:0.45}}
                source={{
                  uri: data.photoURL,
                }}
         />
         <View style={{flexDirection:'column', flex:1, alignContent:'center', }}>
              <Text style={{alignItems:'center', textAlign:'left', fontWeight:'bold',fontSize:15, color:'#050f24', marginTop:10, marginHorizontal:15 }}>{data.program}</Text>
              <Text style={{alignItems:'center', textAlign:'left', fontSize:15, color:'#050f24', marginTop:10, marginHorizontal:15 }}>{data.displayName}</Text>
              <Text style={{alignItems:'center', textAlign:'left',fontSize:13, color:'#050f24', marginHorizontal:15 }}>{data.email}</Text>
              <Text style={{alignItems:'center', textAlign:'left', fontWeight:'bold',fontSize:15, color:'#050f24', marginTop:10,marginHorizontal:15 }}>Asignaturas impartidas</Text>
              <Text style={{alignItems:'center', textAlign:'justify', fontSize:15, color:'#050f24', marginTop:10, marginHorizontal:15 }}>{data.subjects}</Text>                      
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
      height: 195,
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