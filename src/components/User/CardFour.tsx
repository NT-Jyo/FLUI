import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, Linking, Alert } from 'react-native';
import { Intro, SectionFour, SectionFive } from '../../interfaces/University/Topics';
import RenderHtml from 'react-native-render-html';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Topics } from '../../interfaces/University/Subjects';
import { Course } from '../../interfaces/University/Course';
import { TopicsContext } from '../../context/Student/TopicsContext';
import LottieView from 'lottie-react-native';


interface Props {
  data: SectionFour;
}


export const CardFour = ({ data }: Props) => {

  const { width } = useWindowDimensions();
  const { getSectionFive, getLikesSubject } = useContext(TopicsContext);
  const navigation = useNavigation();


  const link = async (link: string) => {
    const supported = await Linking.canOpenURL(link)
    if (supported) {
      await Linking.openURL(link)
    } else {
      Alert.alert(`Don't know how to open this URL: ${link}`)
    }
  }






  const sectionFive = async () => {
    await AsyncStorage.getItem('@Topic').then(topics => {
      if (topics !== null) {
        const Topic: Topics = JSON.parse(topics)
        AsyncStorage.getItem('@Course').then(resp => {
          if (resp !== null) {
            const dataCourse: Course = JSON.parse(resp)
            getSectionFive(dataCourse.idTeacher, dataCourse.idSubject, Topic.idTopic).then(resp => {

              getLikesSubject(dataCourse.idTeacher, dataCourse.idSubject).then(resp => {
                navigation.navigate('SectionFiveScreen')
              })


            })
          }
        })
      }
    })
  }



  return (

    <View style={stylesCardIntro.container}>
      <View style={stylesCardIntro.lottie}>
        <LottieView style={{ width: '100%', height: 240 }} source={require('../../assets/runningpigeon.json')} autoPlay loop />
      </View>

      <View style={{ marginTop: 10, alignContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginHorizontal: 15, fontWeight: 'bold', fontSize: 25, color: '#050f24' }}>{data.title}</Text>
      </View>

      <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#050f24' }}>{data.namelink1} : </Text>
        <TouchableOpacity onPress={() => link(data.link1)} activeOpacity={0.7}>
          <Text style={{ marginHorizontal: 15, fontSize: 15, marginTop: 10, }}>{data.link1}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#050f24' }}>{data.namelink2} : </Text>
        <TouchableOpacity onPress={() => link(data.link2)} activeOpacity={0.7}>
          <Text style={{ marginHorizontal: 15, fontSize: 15, marginTop: 10 }}>{data.link2}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'flex-end', marginHorizontal: 15, marginTop: 35 }}>
        <TouchableOpacity style={stylesCardIntro.Button} onPress={sectionFive} activeOpacity={0.7}>
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
  Button: {
    height: 45,
    width: 150,
    backgroundColor: '#0f1f39',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    elevation: 8
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  lottie: {
    alignContent: 'center',
    alignItems: 'center'
  }

});
