import React, { useContext } from 'react';
import { View } from 'react-native';
import { CardTwo } from '../../../components/User/CardTwo';
import { TopicsContext } from '../../../context/Student/TopicsContext';

export const SectionTwoScreen = () => {
  const {  secTwo } = useContext(TopicsContext);
  

  return (
    <>
     <CardTwo data={secTwo[0]}/>
    
    </>
  )
};
