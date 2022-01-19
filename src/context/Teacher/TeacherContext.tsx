import React, { createContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import { Teacher } from "../../interfaces/University/Teacher";

type TeacherContextProps={
    isLoading:boolean;
    teacher:undefined[],
}

export const TeacherContext = createContext({} as TeacherContextProps)
export const TeacherProvider =({children}:any)=>{
    const [isLoading, setisLoading] = useState(false)
    const [test,setTest]= useState< FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]>()
    const [abcd,setabcd]= useState< FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]>()

    const [veamos, setVeamos]= useState<FirebaseFirestoreTypes.DocumentData>()

    const [teacher,setTeachers]= useState([]);

    
    const getQuery = async()=>{
        await firestore().collection('usuariosW').get()
        .then(querySnapshot => {
          const list:any=[];         
          querySnapshot.forEach(documentSnapshot => {
            const {date,description,displayName, email,faculty,gender,photoURL,program,rol,state,subjects,uid} = documentSnapshot.data();
            list.push({
                id:documentSnapshot.id,
                date,description,displayName, email,faculty,gender,photoURL,program,rol,state,subjects,uid
            })
          });
          setTeachers(list)
        });
       
    }

    useEffect(() => {
   
        getQuery()
    }, [])


    return (
        <TeacherContext.Provider value={{            
            isLoading,
            teacher,
            }}>
            {children}
        </TeacherContext.Provider>
    )

}