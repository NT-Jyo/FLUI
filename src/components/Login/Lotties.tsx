import React from 'react'
import LottieView from "lottie-react-native";
import { View } from 'react-native';

export const Lotties = () => {
    return (
        <View>                 
            <LottieView  style={{width:35, height:35,}} source={require('../assets/login.json')} autoPlay loop />
        </View>
    )
}

