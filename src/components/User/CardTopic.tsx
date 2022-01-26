import React, { useContext } from 'react'
import { StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { Topics } from '../../interfaces/University/Subjects';
import { Course } from '../../interfaces/University/Course';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TopicsContext } from '../../context/Student/TopicsContext';

interface Props {
    data: Topics;     
}

export const CardTopic = ({ data }: Props) => {

    const navigation = useNavigation();

    const { getIntro, intro, isLoading } = useContext(TopicsContext); 

    const introduction = async()=>{
        await AsyncStorage.getItem('@Course').then(resp => {
            if (resp !== null) {
                const dataCourse: Course = JSON.parse(resp)
                getIntro(dataCourse.idTeacher,dataCourse.idSubject,data.idTopic ).then(resp=>{
                    AsyncStorage.setItem('@Topic', JSON.stringify(data))
                    navigation.navigate('IntroduccionScreen',data  )
                })
            }
        })

    }



    return (
        <View>

            <TouchableOpacity onPress={introduction} activeOpacity={0.8} style={stylesCardFaculty.container} >

                <View >
                    <Text style={{ marginVertical: 10 }}>{data.name}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const stylesCardFaculty = StyleSheet.create({
    container: {
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
        marginBottom: 15,
        alignContent: 'center',
        alignItems: 'center'

    },


});
