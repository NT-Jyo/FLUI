import React, { createContext, useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Student } from "../../interfaces/University/Student";
import { Course } from "../../interfaces/University/Course";
import { Phrase, Topics } from "../../interfaces/University/Subjects";
import { AuthContext } from "../Auth/AuthContext";

type StudentContextProps = {
    isLoading: boolean;
    students:Student[],
    course:Course[],
    topic:Topics[],
    phrase:Phrase[],
    getCourses:(student:string)=>Promise<void>,
    getTopics:(teacher: string,subject:string)=>Promise<void>,
    getPhrase:()=>Promise<void>,
    registerCourses:(userEmail:string,subject:string,teacher:string,nameSub:string)=>Promise<void>,
}

export const StudentContext = createContext({} as StudentContextProps)
export const StudentProvider = ({ children }: any) => {

    const [isLoading, setisLoading] = useState(false)
    const {user} = useContext(AuthContext)

    const [students, setStudents] = useState([]);
    const [course, setCourse] = useState([]);
    const [topic, setTopic] = useState([]);
    const [phrase,setPharase]= useState([])


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


    const getTopics = async (teacher: string,subject:string) => {

        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subject).collection('topics').orderBy('date').get()
            .then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {
       
                    const { date,name} = documentSnapshot.data();
                    const idTopic= documentSnapshot.id;                                    
                    list.push({
                        id: documentSnapshot.id,
                        date,name, idTopic
                    }) 
                });
                setTopic(list)
            });
    }


    const getPhrase = async ()=>{
        await firestore().collection('fraseDelDia').get()
            .then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {
                    const { sentence,uid} = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        sentence,uid
                    })
                });
                setPharase(list)
            });
    }

    const registerCourses = async (userEmail:string,subject:string,teacher:string,nameSub:string)=>{

        const dataRegister: Course = {

            idSubject:     subject,
            idTeacher:     teacher,
            liked:         false,
            nameSubject:    nameSub,

        }

        if(userEmail.indexOf('@estudiantesunibague.edu.co')==-1){
            console.log('Entro aqui', dataRegister);
          
           await firestore().collection('Usuario').doc(userEmail).collection('Course').doc(subject).set(dataRegister)
        }else{
            await firestore().collection('Unibague').doc(userEmail).collection('Course').doc(subject).set(dataRegister)
        }
        
    }



    useEffect(() => {

        if(user!== null||undefined){
            getUnibague()
        }

       

    }, [user])


    return (
        <StudentContext.Provider value={{
            isLoading,
            students,
            topic,
            course,
            phrase,
            getCourses,            
            getTopics,
            getPhrase,
            registerCourses,
        }}>
            {children}
        </StudentContext.Provider>
    )

}