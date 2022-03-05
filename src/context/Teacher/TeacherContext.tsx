import React, { createContext, useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Teacher } from "../../interfaces/University/Teacher";
import { Subjects } from "../../interfaces/University/Subjects";
import { AuthContext } from "../Auth/AuthContext";

type TeacherContextProps = {
    isLoading: boolean;
    teacher: Teacher[],
    subjects: Subjects[]
    getSubjects:(teacher:string)=>Promise<void>
}

export const TeacherContext = createContext({} as TeacherContextProps)
export const TeacherProvider = ({ children }: any) => {
    const [isLoading, setisLoading] = useState(false)

    const {user} = useContext(AuthContext)

    const [teacher, setTeachers] = useState([]);
    const [subjects, setSubjects] = useState([]);


    const getUsuariosW = async () => {
        await firestore().collection('usuariosW').get()
            .then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {
                    const { date, description, displayName, email, faculty, gender, photoURL, program, rol, state, subjects, uid } = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        date, description, displayName, email, faculty, gender, photoURL, program, rol, state, subjects, uid
                    })
                });
                setTeachers(list)
            });
    }

    const getSubjects = async (teacher: string) => {

        await firestore().collection('Aula').doc(teacher).collection('Subjects').get()
            .then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {
                    const { themes, comments, notlikes, students, likes, photoURL, nameSubject } = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        themes, comments, notlikes, students, likes, photoURL, nameSubject
                    })
                });
                setSubjects(list)
            });



    }

    useEffect(() => {

        if(user!==null||undefined) {
            getUsuariosW()
        }
      


    }, [user])


    return (
        <TeacherContext.Provider value={{
            isLoading,
            teacher,
            subjects,
            getSubjects,
        }}>
            {children}
        </TeacherContext.Provider>
    )

}