import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { stylesGlobal } from '../../../theme/appTheme';
import { FlatList } from 'react-native-gesture-handler';
import { TopicsContext } from '../../../context/Student/TopicsContext';
import { CardFive } from '../../../components/User/CardFive';
import LottieView from 'lottie-react-native';
import { ModalQuestion } from '../../../components/User/ModalQuestion';
import { Fab } from '../../../components/Fab';
import { StackScreenProps } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Topics } from '../../../interfaces/University/Subjects';
import { Course } from '../../../interfaces/University/Course';

interface Props extends StackScreenProps<any, any> { };
export const SectionFiveScreen = ({ navigation }: Props) => {

    const { secFive,dataSubject,secLikesSubject } = useContext(TopicsContext);    
    const [lottie, setlottie] = useState(false);
    
    const exit =async()=>{
        navigation.popToTop();
    }

    const like =async()=>{
        setlottie(true);

        await AsyncStorage.getItem('@Course').then(resp => {
            if (resp !== null) {
              const dataCourse: Course = JSON.parse(resp)
              console.log(dataSubject?.likes)
              secLikesSubject(dataCourse.idTeacher, dataCourse.idSubject,(dataSubject?.likes+1)).then(resp => { setTimeout(() => {
                setlottie(false)
              }, 2000);})
            }
        })
    }

  



    return (

        <View style={stylesGlobal.globalMargin}>
            {
                (lottie)&&(
                    <View style={{zIndex:10}}>
                    <LottieView style={{ width: '100%', height: 300,zIndex:20,position:'absolute'}} source={require('../../../assets/likes.json')} autoPlay loop />
                   </View>
                )
            }


 
            <View style={{ alignItems: 'center' }}>
                <LottieView style={{ width: '100%', height: 250, }} source={require('../../../assets/yourdead.json')} autoPlay loop />
                
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                <Fab
                    onPress={() => console.log('Test')}
                    iconName='question-answer'
                    style={{ marginHorizontal: 10 }}
                />

                <Fab
                    onPress={() => like()}
                    iconName='favorite'
                    style={{ marginHorizontal: 10 }}
                    
                />


                <Fab
                    onPress={() => exit()}
                    iconName='article'
                    style={{ marginHorizontal: 10 }}

                />


            </View>

            <View style={{ marginTop: 15, flex: 1 }}>
                <FlatList
                    data={secFive}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (


                        <CardFive data={item} />
                    )} />

            </View>

  

            

        </View>
    )
};
