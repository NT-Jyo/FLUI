import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export const NeHomeScreen = () => {
    return (
        <View style={styles.main}>
            <View style={styles.lottie}>
                <LottieView  style={{width:240, height:240}} source={require('../../../assets/pigeons.json')} autoPlay loop />
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,        
        alignItems:'center'       
    },
    content:{
        margin:40,
        alignItems:'center',
        alignContent:'center',
        alignSelf:'center',
    },
    lottie:{
        marginTop:150,
    }



})
