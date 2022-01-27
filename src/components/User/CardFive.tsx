import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SectionFive } from '../../interfaces/University/Topics';
import { ModalQuestion } from './ModalQuestion';



interface Props {
    data: SectionFive;     
}

export const CardFive = ({data}:Props) => {

    const [modalState, setModalstate] = useState(false);

    const Question = async()=>{
        setModalstate(true)
    }



    return (
        <View>

            <TouchableOpacity onPress={Question} activeOpacity={0.8} style={stylesCardFaculty.container} >

                <View >
                    <Text style={{ marginVertical: 10 }}>{data.question}</Text>
                </View>

            </TouchableOpacity>

            <ModalQuestion visible={modalState} dataModal={data}  setModal={setModalstate}/>
        </View>
    )
}

const stylesCardFaculty = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        marginBottom: 15,
        alignContent: 'center',
        alignItems: 'center'

    },


});
