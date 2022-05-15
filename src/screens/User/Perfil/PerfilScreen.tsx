import React, { useContext, useEffect } from 'react'
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { CardCourse } from '../../../components/User/CardCourse';
import { AuthContext } from '../../../context/Auth/AuthContext';
import { StudentContext } from '../../../context/Student/StudentContext';
import { stylesGlobal } from '../../../theme/appTheme';

export const PerfilScreen = () => {

    const {user} = useContext(AuthContext);
    const {getCourses,course,load}=useContext(StudentContext)

    useEffect(() => {
        getCourses(String(user?.user.email))

        console.log(user?.user.email)
    }, [load]);
    

    return (
        <View style={stylesGlobal.globalMargin}>            
            <Text style={{marginTop:15, textAlign:'center'}}>{user?.user.email}</Text>
            <View style={{marginTop:15, flex:1}}>
            <FlatList
                data ={course}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}                
                renderItem={({item})=>(
                    <CardCourse data={item}/>                    
                )}/>

            </View>


        </View>
    )
}
