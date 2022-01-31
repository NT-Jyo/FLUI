import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Teacher } from '../../interfaces/University/Teacher';
import { useNavigation } from '@react-navigation/native';
import { SolveQuestion } from '../../interfaces/University/Topics';
import LottieView from 'lottie-react-native';


interface Props {
    data: SolveQuestion,

}

export const CardSolve = ({ data }: Props) => {
    const [lottie, setlottie] = useState(false);

    const animate = async () => {
        setlottie(true);
        setTimeout(() => {
            setlottie(false);
        }, 2000);
    }
    return (
        <View>

            {
                (lottie) && (
                    <View style={{ zIndex: 5 }}>
                        <LottieView style={{ width: '100%', height: 450, alignContent: 'center', zIndex: 10, position: 'absolute' }} source={require('../../assets/ufo.json')} autoPlay loop />
                    </View>
                )
            }

            <TouchableOpacity onPress={() => animate()} activeOpacity={0.8} style={stylesCardFaculty.container}>
                <View style={{ flexDirection: 'column', flex: 1, alignContent: 'center', }}>
                    <Text style={{ alignItems: 'center', textAlign: 'left', fontWeight: 'bold', fontSize: 15, color: '#050f24', marginTop: 10, marginHorizontal: 15 }}>{data.question}</Text>
                    <Text style={{ alignItems: 'center', textAlign: 'justify', fontSize: 15, color: '#050f24', marginTop: 10, marginHorizontal: 15 }}>{data.solveQuestion}</Text>
                    <Text style={{ textAlign: 'right', fontSize: 13, color: '#050f24', marginHorizontal: 15, marginVertical: 15 }}>{data.name}</Text>

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
        height: 150,
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
    },


});