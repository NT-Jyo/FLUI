import React, { useContext, useState } from 'react'
import { TextInputProps, Text, KeyboardType, View, Platform, NativeSyntheticEvent, TextInputSubmitEditingEventData, TextInputFocusEventData } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';
interface Props extends TextInputProps {
    keyboard: KeyboardType | undefined,
    Title: string,
    Placeholder: string,
    Onchange?: ((text: string) => void) | undefined
    values?: string,
    OnBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined
    TextError?: string,
    Multiline?: boolean,
    icon?: boolean,
    nameIcon?: string,
}


export const TextRowIcon = ({ Title, Placeholder, keyboard, Onchange, values, OnBlur, TextError, Multiline, icon, nameIcon, }: Props) => {





    return (
        <>
            <Text style={loginStyles.label}>{Title}</Text>
            <View style={{ flexDirection: 'row' }}>


                <TextInput
                    placeholder={Placeholder}
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    keyboardType={keyboard}
                    style={[
                        { flex: 10 }, loginStyles.inputField, (Platform.OS === 'ios') && loginStyles.inputFiledIOS
                    ]}
                    multiline={Multiline}
                    selectionColor={'#0f1f39'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid={'#0f1f39'}
                    onChangeText={Onchange}
                    value={values}
                    onBlur={OnBlur}                  
                />

            </View>
            <Text style={{ fontSize: 10, color: 'red' }}>{TextError}</Text>
        </>
    )
}

export const loginStyles = StyleSheet.create(
    {

        formContainer: {
            flex: 1,
            paddingHorizontal: 30,
            justifyContent: 'center',
            height: 600,
            marginBottom: 50,
        },
        title: {
            color: '#0f1f39',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20
        },

        label: {
            marginTop: 25,
            color: '#0f1f39',
            fontWeight: 'bold',
        },
        inputField: {
            color: '#0f1f39',
            fontSize: 20,

        },

        inputFiledIOS: {
            borderBottomColor: '#0f1f39',
            borderBottomWidth: 2,
            paddingBottom: 4,
        },



    });