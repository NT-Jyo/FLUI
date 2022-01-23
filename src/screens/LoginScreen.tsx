import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Image, Text, View, StyleSheet } from 'react-native';

import LottieView from "lottie-react-native";
import login from '../assets/login.json';
import { Lotties } from '../components/Login/Lotties';
import { AuthContext } from '../context/Auth/AuthContext';
interface Props extends StackScreenProps<any,any>{};

export const LoginScreen = ({navigation}:Props) => {

    const {signInGoogle,isLoading} = useContext(AuthContext)

    const login =()=>{
        signInGoogle().then((resp)=>{
            navigation.replace('NavigatorBottom')
        });
        
    }
    
    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <View style={styles.lottie}>
                    <LottieView  style={{width:240, height:240}} source={require('../assets/login.json')} autoPlay loop />
                </View>    
            
            <Text style={{alignItems:'center', alignContent:'center', fontWeight:'bold',fontSize:25, color:'#050f24'}}>Bienvenido</Text>            
            <Button
                title="Google Sign-In"
                onPress={login}
                
                />
            <View>
                <Text></Text>
            </View>
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