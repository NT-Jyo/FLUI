import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions,Platform } from 'react-native';
import { Intro } from '../../interfaces/University/Topics';
import RenderHtml from 'react-native-render-html';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Topics } from '../../interfaces/University/Subjects';
import { Course } from '../../interfaces/University/Course';
import { TopicsContext } from '../../context/Student/TopicsContext';


interface Props {
  data: Intro;
}


export const CardIntro = ({ data }: Props) => {

  const { width } = useWindowDimensions();
  const { getSectionOne} = useContext(TopicsContext);
  const navigation = useNavigation();

  const sour = {
    html: data.description
  }



  const sectionOne = async()=>{
    await AsyncStorage.getItem('@Topic').then(topics => {
      if (topics !== null) {
        const Topic: Topics = JSON.parse(topics)
        AsyncStorage.getItem('@Course').then(resp => {
          if (resp !== null) {
            const dataCourse: Course = JSON.parse(resp)
            getSectionOne(dataCourse.idTeacher, dataCourse.idSubject, Topic.idTopic).then(resp=>{
              navigation.navigate('SectionOneScreen')
              console.log('SE COMPLETO LA INFORMACION',resp,dataCourse.idTeacher, dataCourse.idSubject, Topic.idTopic)
            })
          }
        })
      }
    })
  }



  return (

    <View style={stylesCardIntro.container}>
      
      <Image
        style={{ width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, height:'30%' }}
        source={{
          uri: data.picture,
        }}
      />

      <ScrollView>

      {
        (Platform.OS==='android')
        ?(

          <View style={{marginTop:10,marginHorizontal: 15 }}>
            <RenderHtml source={sour} contentWidth={width} />
          </View> 
        )
        :(
          
          <View style={{marginTop:10, }}>
          <Text style={{ marginHorizontal: 15 }}><RenderHtml source={sour} contentWidth={width} /></Text>
          </View> 
         
        )
      } 
      </ScrollView>
      <View style={{alignItems:'flex-end', marginHorizontal:15}}>
        <TouchableOpacity style={stylesCardIntro.Button} onPress={sectionOne} activeOpacity={0.7}>
          <Text style={stylesCardIntro.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
};


const stylesCardIntro = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    flex: 1,



  },
  Button:{
    height:45,
    width:150,  
    backgroundColor:'#0f1f39',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000',
    textShadowOffset:{
        width:0,
        height:3,
    },
    shadowOpacity:0.27,
    elevation:8
},  

buttonText:{
    color:'white',
    fontSize:18,
}

});
