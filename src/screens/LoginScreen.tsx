import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Image, Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';

import LottieView from "lottie-react-native";
import login from '../assets/login.json';
import { Lotties } from '../components/Login/Lotties';
import { AuthContext } from '../context/Auth/AuthContext';
import { useForm } from '../hooks/useForm';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
interface Props extends StackScreenProps<any, any> { };

export const LoginScreen = ({ navigation }: Props) => {

    const { signInGoogle, isLoading, register, signIn } = useContext(AuthContext)

    /*     const login =()=>{
            signInGoogle().then((resp)=>{
                navigation.replace('NavigatorBottom')
            });
            
        } */


    const { email, password, onChange } = useForm({
        email: '',
        password: '',
    })

    const userLogin = () => {
        signIn(email, password).then(() => {
            navigation.navigate('NavigatorBottom')

        }).catch(error => {
            Alert.alert('Información', 'Error en las credenciales')
            console.log(error)
        });

    }

    const userRegister = () => {

        if (email.length >= 6 && password.length > 1) {
            register(email, password).then(() => {
                navigation.navigate('NavigatorBottom')
            }).catch(error => {
                Alert.alert('Información', 'La contraseña debe tener 6 digitos al menos o este correo ya es utilizado')

            });
        } else {
            Alert.alert('Información', 'Todos los campos son necesarios')
        }

    }

    return (
        <View style={styles.main}>

            <ScrollView>
            <View style={styles.content}>
                <View style={styles.lottie}>
                    <LottieView style={{ width: 240, height: 240 }} source={require('../assets/login.json')} autoPlay loop />
                </View>

                <Text style={{ alignItems: 'center', alignContent: 'center', fontWeight: 'bold', fontSize: 25, color: '#050f24' }}>Bienvenido</Text>

           </View>

           <View style={{ alignItems: 'center', alignContent: 'center' }}>

                    <View style={{ backgroundColor: '#1d1d1d', borderRadius: 20, width: 250, marginTop: 5, flexDirection: 'row', elevation: 8, }}>

                        <TextInput
                            placeholder='Correo electronico'
                            placeholderTextColor="rgba(255,255,255,0.4)"
                            keyboardType="email-address"
                            selectionColor='white'
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={email}
                            onChangeText={(value) => onChange(value, 'email')}
                            style={{ width: 250, color: 'white', marginHorizontal: 10, }}
                        />

                    </View>

                    <View style={{ backgroundColor: '#1d1d1d', borderRadius: 20, width: 250, marginTop: 15, flexDirection: 'row', elevation: 8, }}>

                        <TextInput
                            placeholder='Contraseña'
                            placeholderTextColor="rgba(255,255,255,0.4)"
                            keyboardType="visible-password"
                            selectionColor='white'
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={password}
                            onChangeText={(value) => onChange(value, 'password')}
                            style={{ width: 250, color: 'white', marginHorizontal: 10, }}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                height: 45, width: 180, borderRadius: 10, borderColor: '#fdc82a', borderWidth: 0.5,backgroundColor:'#0f1f39',
                                justifyContent: 'center', alignItems: 'center', shadowColor: '#000', elevation: 10, shadowOpacity: 0.27,
                            }}
                            onPress={userLogin}
                        >
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Ingresar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                height: 45, width: 180, borderRadius: 10, borderColor: '#fdc82a', borderWidth: 0.5,backgroundColor:'#0f1f39',
                                justifyContent: 'center', alignItems: 'center', shadowColor: '#000', elevation: 10, shadowOpacity: 0.27,
                            }}
                            onPress={userRegister}
                        >
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>

                </View>



            </ScrollView>
           

        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center'
    },
    content: {
        margin: 40,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
    lottie: {
        marginTop: 150,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,

    },



})