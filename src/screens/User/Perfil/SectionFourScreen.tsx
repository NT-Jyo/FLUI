import React, { useContext } from 'react';
import { TopicsContext } from '../../../context/Student/TopicsContext';
import { CardFour } from '../../../components/User/CardFour';

export const SectionFourScreen = () => {
    const {  secFour } = useContext(TopicsContext);
  

    return (
      <>
       <CardFour data={secFour[0]}/>
      
      </>
    )
};
