import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { Course } from '../../interfaces/University/Course';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    data: Course,

}

export const CardCourse = ({ data }: Props) => {

    const navigation = useNavigation();

    const navigate =async()=>{
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('@Course',jsonValue)
        navigation.navigate('CourseDataScreen',data)
    }
    return (
        <View>

            <TouchableOpacity onPress={()=>navigate()} activeOpacity={0.7} style={stylesCardFaculty.container} >

                <View >
                    <Text style={{ marginVertical: 10 }}>{data.nameSubject}</Text>
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
