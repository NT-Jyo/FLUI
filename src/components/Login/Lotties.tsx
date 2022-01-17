import React from 'react'
import LottieView from "lottie-react-native";
import { StyleSheet, View } from 'react-native';

export const Lotties = () => {
    return (
        <View>                 
            <LottieView  style={{width:35, height:35,}} source={require('../assets/login.json')} autoPlay loop />
        </View>
    )
}

const stylesLottis = StyleSheet.create({
    main:{       
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
       
    }
})