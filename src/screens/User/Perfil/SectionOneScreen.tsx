import React, { useContext, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TopicsContext } from '../../../context/Student/TopicsContext';
import { CardOne } from '../../../components/User/CardOne';



export const SectionOneScreen = () => {

  const {  secOne } = useContext(TopicsContext);
  

  return (
    <>
     <CardOne data={secOne[0]}/>
    
    </>
  )
};
