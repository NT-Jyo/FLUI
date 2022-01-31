import React, { useContext } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { stylesGlobal } from '../../../theme/appTheme';
import { CardSolve } from '../../../components/User/CardSolve';
import { TopicsContext } from '../../../context/Student/TopicsContext';

export const SectionSixScreen = () => {

  const { secSix} = useContext(TopicsContext);  

  return (



    <View style={stylesGlobal.globalMargin}>
    <FlatList
        data ={secSix}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}                
        renderItem={({item})=>(
            <CardSolve data={item}/>

        )}/>
</View>
  );
};
