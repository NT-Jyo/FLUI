import React from 'react'
import { Text, StyleSheet, View, Image, FlatList, ImageSourcePropType } from 'react-native';
import { CardFaculty } from '../../../components/University/CardFaculty';
import { stylesGlobal } from '../../../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CdFacultys{
    id:number,
    Faculty:string,
    imgPath:ImageSourcePropType,
    Description:string
}



export const UProgramScreen = () => {
    

    const facultys=[
        {   id:1,
            Faculty:'Facultad de Ingeniería',
            imgPath:require('../../../assets/img/pexels_thisisengineering_3861963.jpg'),
            Description:'Ingenieria de Civil, Ingenieria de Electronica,Ingenieria deIndustrial, Ingenieria de Mecanica, Ingenieria de Sistemas.'
        },
         {
            id:2,
            Faculty:'Facultad de Ciencias Económicas y Administrativas',
            imgPath:require('../../../assets/img/pexels_karolina_grabowska_4386393.jpg'),
            Description:'Adiministracion de Empresas, Administracion financiera, Administracion de negocios internacionales, Contaduria publica, Economica, Mercadeo.'
        },
        {
            id:3,
            Faculty:'Facultad de Ciencias Naturales y Matemáticas',
            imgPath: require('../../../assets/img/pexels_jeswin_thomas_3781338.jpg'),
            Description:'Bilogia Ambiental.'
        },
        {
            id:4,
            Faculty:'Facultad de Derecho y Ciencias Políticas',
            imgPath:require('../../../assets/img/pexels_anete_lusina_5721099.jpg'),
            Description:'Derecho.'
        },
        {
            id:5,
            Faculty:'Facultad de Humanidades, Artes y Ciencias Políticas',
            imgPath:require('../../../assets/img/pexels_marko_blazevic_1053687.jpg'),
            Description:'Arquitectura, Comunicacion Social y Periodismo, Diseño, Psicologia.'
        } 
    ]
    


    return (
        <View style={stylesGlobal.globalMargin}>
            <FlatList
                data ={facultys}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}                
                renderItem={({item})=>(
                    <CardFaculty data={item}/>

                )}/>
        </View>
    )
}


