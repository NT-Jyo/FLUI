import React, { createContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Student } from "../../interfaces/University/Student";
import { Course } from "../../interfaces/University/Course";

type StudentContextProps = {
    isLoading: boolean;
    students:Student[],
    course:Course[],
    getCourses:(student:string)=>Promise<void>
   
}

export const StudentContext = createContext({} as StudentContextProps)
export const StudentProvider = ({ children }: any) => {

    const [isLoading, setisLoading] = useState(false)

    const [students, setStudents] = useState([]);
    const [course, setCourse] = useState([]);


    const getUnibague= async () => {
        await firestore().collection('Unibague').get()
            .then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {
                    const { email,name,photo,provider,uid} = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        email,name,photo,provider,uid
                    })
                });
                setStudents(list)
            });
    }

    const getCourses = async (student: string) => {

        await firestore().collection('Unibague').doc(student).collection('Course').get()
            .then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {
                    const { idSubject, nameSubject, liked,idTeacher} = documentSnapshot.data();                                        
                    list.push({
                        id: documentSnapshot.id,
                        idSubject, nameSubject, liked,idTeacher
                    })
                });
                setCourse(list)
            });
    }




    useEffect(() => {

        getUnibague()
       

    }, [])


    return (
        <StudentContext.Provider value={{
            isLoading,
            students,
            getCourses,
            course,
        }}>
            {children}
        </StudentContext.Provider>
    )

}