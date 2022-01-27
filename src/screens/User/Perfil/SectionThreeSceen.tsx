import React, { useContext } from 'react';
import { Cardthree } from '../../../components/User/Cardthree';
import { TopicsContext } from '../../../context/Student/TopicsContext';

export const SectionThreeSceen = () => {
    const {  secThree } = useContext(TopicsContext);
  

    return (
      <>
       <Cardthree data={secThree[0]}/>
      
      </>
    )
};
