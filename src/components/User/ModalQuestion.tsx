import React, { useContext, useState } from 'react';
import { Modal, View, ActivityIndicator, Text, StyleSheet, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { SectionFive } from '../../interfaces/University/Topics';
import { AuthContext } from '../../context/Auth/AuthContext';
import { TopicsContext } from '../../context/Student/TopicsContext';
import { useForm } from '../../hooks/useForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Topics } from '../../interfaces/University/Subjects';
import { Course } from '../../interfaces/University/Course';

interface Props {
    visible: boolean,
    dataModal: SectionFive;
    setModal: React.Dispatch<React.SetStateAction<boolean>>   
}


export const ModalQuestion = ({visible,dataModal,setModal}:Props) => {

    const {user} = useContext(AuthContext);
    const {uploadQuestion} =useContext(TopicsContext)

   

    const { answerQuestion, onChange } = useForm({
        answerQuestion: '',
       
    })


    const validateQuestion =async()=>{
        if(answerQuestion.length<2){
            Alert.alert('Información', 'La respuesta es muy corta')
        }else{
            AsyncStorage.getItem('@Course').then(resp => {
                if (resp !== null) {
                  const dataCourse: Course = JSON.parse(resp)
                    uploadQuestion(dataCourse.idTeacher,dataCourse.idSubject,dataModal.question,answerQuestion,String(user?.user.email),String(user?.user.displayName))
                    setModal(false)
                }
            })
        }
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
                            value={answerQuestion}
                            onChangeText={(value) => onChange(value, 'answerQuestion')}
                        />
                    </View>


                    <View style={{marginVertical:35, alignItems:'center'}}>
                    <TouchableOpacity style={stylesModal.Button} onPress={validateQuestion}>
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
  