import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';


interface Props {
    visible: boolean,
}

export const ModaLoading = () => {


    return (
        <Modal
            animationType='fade'
            visible={true}
            transparent={true}

        >

            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' }}>
                {/* //Contenido */}
                <View style={{
                    backgroundColor: '#111111',
                    width: 230, height: 130,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.25,
                    elevation: 10,
                    borderRadius: 8,
                }}>

                    <ActivityIndicator
                        size={35}
                        color={'red'}
                    />

                </View>
            </View>
        </Modal>

    )
}