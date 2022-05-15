import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';




interface Props  {
    TextButton:string,
    OnPress: ((event: GestureResponderEvent) => void) | undefined
    Style?: StyleProp<ViewStyle>
}


export const ButtonRed = ({TextButton,OnPress,Style={}}:Props) => {

  return (
    <View style={{...Style as any}}>
    <TouchableOpacity
        activeOpacity={0.7}
        style={{
            height: 45, width: 120, backgroundColor: '#0f1f39', borderRadius: 10,
            justifyContent: 'center', alignItems: 'center', shadowColor: '#000', elevation: 10, shadowOpacity: 0.27,
        }}
        onPress={OnPress}
        
    >
        <Text style={loginStyles.buttonText}>{TextButton}</Text>
    </TouchableOpacity>
</View>
  )
}

export const loginStyles = StyleSheet.create(    
    {

    buttonContainer:{
        alignItems:'center',
        marginTop:50,
    },
    button:{
        borderWidth:2,
        borderColor:'#fdc82a',
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:100,
        //backgroundColor:loginColor.buttonColor,
    },
    buttonText:{        
        fontSize:18,
        color:'white',
    },


});