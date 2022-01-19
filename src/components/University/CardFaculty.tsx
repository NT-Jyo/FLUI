import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CdFacultys } from '../../interfaces/University/Facultys';
import { UProgramScreen } from '../../screens/University/Education/UProgramScreen';
import { useNavigation } from '@react-navigation/native'

interface Props{
    data:CdFacultys,
    
}

export const CardFaculty = ({data}:Props,  ) => {

    const navigation = useNavigation();
  
    return (
        <View>

            <TouchableOpacity onPress={()=>navigation.navigate('UTeacherScreen',data)} activeOpacity={0.8} style={stylesCardFaculty.container} >
                <Image
                style={{width:'100%',  borderTopLeftRadius:10, borderTopRightRadius:10, flex:0.8}}
                source={data.imgPath}
                />
               <View style={{marginTop:15, marginHorizontal:15, }}>
               <Text style={{fontWeight:'bold',fontSize:15, color:'#050f24' }}>{data.Faculty}</Text>
              
               <View style={{marginTop:10}}>
                 <Text style={{textAlign:'justify', fontSize:13}}>{data.Description}</Text>
               </View>
               
               </View>
            </TouchableOpacity>
        </View>
    )
}

const stylesCardFaculty = StyleSheet.create({
    container: {        
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 195,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,              
        elevation: 10,
        marginBottom: 15,
               
    },


});
