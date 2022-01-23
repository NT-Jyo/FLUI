import React, { useContext } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button} from 'react-native';
import { RootStackParams } from '../../../navigator/University/Education/StackEducation';
import { stylesGlobal } from '../../../theme/appTheme';
import { TeacherContext } from '../../../context/Teacher/TeacherContext';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Teacher } from '../../../interfaces/University/Teacher';
import { CardTeacher } from '../../../components/University/CardTeacher';

interface Props extends StackScreenProps<RootStackParams, 'UTeacherScreen'> { }
export const UTeacherScreen = ({ route}: Props) => {

    const data =route.params;

    const {teacher} = useContext(TeacherContext);   
    const filterFaculty = teacher.filter((resp)=>resp!.faculty=='Facultad de Ingeniería');
    console.log('la informacion que se esta pasando es',data)

  const navigation =useNavigation();

    return (
        <View style={stylesGlobal.globalMargin}>
            <FlatList
                data ={filterFaculty}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}                
                renderItem={({item})=>(
                    <CardTeacher data={item}/>                    
                )}/>

               
        </View>
    )
}
