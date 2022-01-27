import React, { useContext } from 'react';
import { View } from 'react-native';
import { stylesGlobal } from '../../../theme/appTheme';
import { FlatList } from 'react-native-gesture-handler';
import { TopicsContext } from '../../../context/Student/TopicsContext';
import { CardFive } from '../../../components/User/CardFive';
import LottieView from 'lottie-react-native';
import { ModalQuestion } from '../../../components/User/ModalQuestion';


export const SectionFiveScreen = () => {
    const { secFive } = useContext(TopicsContext);


    return (

        <View style={stylesGlobal.globalMargin}>
            <View style={{alignItems:'center'}}>
                <LottieView style={{ width: '100%', height: 250 }} source={require('../../../assets/yourdead.json')} autoPlay loop />
            </View>


            <View style={{ marginTop: 15, flex: 1 }}>
                <FlatList
                    data={secFive}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (


                        <CardFive data={item} />
                    )} />

            </View>

            


        </View>
    )
};
