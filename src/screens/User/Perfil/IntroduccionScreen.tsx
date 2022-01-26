import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { TopicsContext } from '../../../context/Student/TopicsContext';
import { RootStackParamsPerfil } from '../../../navigator/User/Perfil/StackPerfil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Course } from '../../../interfaces/University/Course';
import { CardIntro } from '../../../components/User/CardIntro';
import { ModaLoading } from '../../../components/ModaLoading';




interface Props extends StackScreenProps<RootStackParamsPerfil, 'IntroduccionScreen'> { }

export const IntroduccionScreen = ({ route }: Props) => {

    const { intro } = useContext(TopicsContext); 


    return (
        <>
            <CardIntro data={intro[0]}/>
        </>
    )
};
