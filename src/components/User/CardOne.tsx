import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, Linking, Alert, Platform } from 'react-native';
import { SectionOne, SectionTwo } from '../../interfaces/University/Topics';
import RenderHtml from 'react-native-render-html';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { TopicsContext } from '../../context/Student/TopicsContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Topics } from '../../interfaces/University/Subjects';
import { Course } from '../../interfaces/University/Course';


interface Props {
  data: SectionTwo;
}



export const CardOne = ({ data }: Props) => {
  const { width } = useWindowDimensions();
  const { getSectionTwo } = useContext(TopicsContext);
  const navigation = useNavigation();
  const sour = {
    html: data.description
  }



  const link = async (link: string) => {
    const supported = await Linking.canOpenURL(link)
    if (supported) {
      await Linking.openURL(link)
    } else {
      Alert.alert(`Don't know how to open this URL: ${link}`)
    }
  }


  const sectionTwo = async () => {
    await AsyncStorage.getItem('@Topic').then(topics => {
      if (topics !== null) {
        const Topic: Topics = JSON.parse(topics)
        AsyncStorage.getItem('@Course').then(resp => {
          if (resp !== null) {
            const dataCourse: Course = JSON.parse(resp)
            getSectionTwo(dataCourse.idTeacher, dataCourse.idSubject, Topic.idTopic).then(resp => {
              navigation.navigate('SectionTwoScreen')
              console.log('SE COMPLETO LA INFORMACION', resp, dataCourse.idTeacher, dataCourse.idSubject, Topic.idTopic)
            })
          }
        })
      }
    })
  }

  return (
    <View style={stylesCardIntro.container}>


      <Image
        style={{ width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: '30%' }}
        source={{
          uri: data.picture,
        }}
      />



      {
        (Platform.OS === 'android')
          ? (

            <View style={{ marginTop: 10, marginHorizontal: 15 }}>
              <RenderHtml source={sour} contentWidth={width} />
            </View>
          )
          : (

            <View style={{ marginTop: 10, }}>
              <Text style={{ marginHorizontal: 15 }}><RenderHtml source={sour} contentWidth={width} /></Text>
            </View>

          )
      }



      <View style={{ alignItems: 'flex-start', marginHorizontal: 15, marginTop: 15 }}>
        <TouchableOpacity onPress={() => link(data.link)} activeOpacity={0.7}>
          <Text style={stylesCardIntro.buttonTextLink}>Mas informacion</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'flex-start', marginHorizontal: 15, marginTop: 25 }}>
        <TouchableOpacity onPress={() => link(data.video)} activeOpacity={0.7}>
          <Text style={stylesCardIntro.buttonTextLink}>Video Complementario</Text>
        </TouchableOpacity>
      </View>



      <View style={{ alignItems: 'flex-end', marginHorizontal: 15, marginTop: 15 }}>
        <TouchableOpacity style={stylesCardIntro.Button} onPress={sectionTwo}>
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
  }

  ,
  ButtonLink: {
    height: 45,
    width: 150,
    borderColor: '#0f1f39',
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

  buttonTextLink: {
    color: '#0f1f39',
    fontSize: 18,
  }

});
