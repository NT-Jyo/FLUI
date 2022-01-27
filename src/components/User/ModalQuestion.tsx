import React, { useState } from 'react';
import { Modal, View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { SectionFive } from '../../interfaces/University/Topics';

interface Props {
    visible: boolean,
    dataModal: SectionFive;
    setModal: React.Dispatch<React.SetStateAction<boolean>>   
}


export const ModalQuestion = ({visible,dataModal,setModal}:Props) => {

   
    const answer = async()=>{
        setModal(false)
    }


    return (
        <Modal
            animationType='fade'
            visible={visible}
            transparent={true}

        >

            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' }}>
                {/* //Contenido */}
                <View style={{
                    backgroundColor: '#111111',
                    width: 370, height: 150,                                       
                    
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.25,
                    elevation: 10,
                    borderRadius: 8,
                }}>

                    <View style={{marginVertical:15, marginHorizontal:15,alignItems: 'center',}}>
                        <Text style={{color:'white', textAlign:'center'}}>{dataModal.question}</Text>
                    </View>

                    <View style={{alignItems:'flex-start', marginVertical:10,marginHorizontal:10}}>
                        <TextInput
                            placeholder='Respuesta max 95 caracteres'
                            placeholderTextColor='white'
                            selectionColor='white'
                            style={{color:'white', fontSize:13,borderBottomColor:'white', borderWidth:1,}}
                            underlineColorAndroid='white'
                            multiline
                            maxLength={95}
                        />
                    </View>


                    <View style={{marginVertical:35, alignItems:'center'}}>
                    <TouchableOpacity style={stylesModal.Button} onPress={answer}>
                    <Text style={stylesModal.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </Modal>

    )
};




const stylesModal = StyleSheet.create({
    Button:{
      height:45,
      width:150,  
      backgroundColor:'#0f1f39',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      shadowColor:'#000',
      textShadowOffset:{
          width:0,
          height:3,
      },
      shadowOpacity:0.27,
      elevation:8
  },  
  
  buttonText:{
      color:'white',
      fontSize:18,
  }  

  
});
  