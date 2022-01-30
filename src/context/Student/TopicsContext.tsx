import React, { createContext, useEffect, useState } from "react";
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Intro, SectionFive, SectionFour, SectionOne, SectionThree, SectionTwo, SolveQuestion, Subject } from "../../interfaces/University/Topics";

type TopicsContextProps = {
    isLoading: boolean;
    intro:Intro[],
    dataSubject:FirebaseFirestoreTypes.DocumentData | undefined
    secOne:SectionOne[],
    secTwo:SectionTwo[],
    secThree:SectionThree[],
    secFour:SectionFour[],
    secFive:SectionFive[],
    secSix:SolveQuestion[],
    getIntro:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionOne:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionTwo:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionThree:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionFour:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionFive:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getLikesSubject: (teacher:string,subjects:string)=>Promise<void>,
    getAnswer:(teacher:string,subjects:string)=>Promise<void>,
    secLikesSubject:(teacher:string,subjects:string, like:number)=>Promise<void>,    
    uploadQuestion:(teacher:string,subjects:string,questionUser:string,solveQuestionUser:string,emailUser:string,nameUser:string)=>Promise<void>,
   
}

export const TopicsContext = createContext({} as TopicsContextProps)
export const TopicsProvider = ({ children }: any) => {

    const [isLoading, setisLoading] = useState(false)
    const [intro, setintro] = useState([]);
    const [secOne, setSecOne] = useState([]);
    const [secTwo, setSecTwo] = useState([]);
    const [secThree, setSecThree] = useState([]);
    const [secFour, setSecFour] = useState([]);
    const [secFive, setSecFive] = useState([]);
    const [secSix, setSecSix] = useState([]);
    const [dataSubject,setDataSubject] = useState<FirebaseFirestoreTypes.DocumentData | undefined>();

    const getIntro= async (teacher:string,subjects:string,topic:string) => {

        setisLoading(true)
        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('topics').doc(topic).collection('Introduction').get().then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {

                    console.log(JSON.stringify(documentSnapshot.data()),'Veamos si se hace la consulta')
                    const { picture,description} = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        picture,description
                    }) 
                });
                setisLoading(false)
                setintro(list)
            });
    }


    const getSectionOne= async (teacher:string,subjects:string,topic:string) => {
        setisLoading(true)
        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('topics').doc(topic).collection('Seccion1').get().then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {

                    console.log(JSON.stringify(documentSnapshot.data()))
                    const { content,description,link,picture,title,video} = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        content,description,link,picture,title,video
                    }) 
                });
                setisLoading(false)
                setSecOne(list)
            });
    }


    const getSectionTwo= async (teacher:string,subjects:string,topic:string) => {
        setisLoading(true)
        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('topics').doc(topic).collection('Seccion2').get().then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {

                    console.log(JSON.stringify(documentSnapshot.data()))
                    const { content,description,link,picture,title,video} = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        content,description,link,picture,title,video
                    }) 
                });
                setisLoading(false)
                setSecTwo(list)
            });
    }


    const getSectionThree= async (teacher:string,subjects:string,topic:string) => {
        setisLoading(true)
        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('topics').doc(topic).collection('Seccion3').get().then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {

                    console.log(JSON.stringify(documentSnapshot.data()))
                    const { content,description,link,picture,title,video} = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        content,description,link,picture,title,video
                    }) 
                });
                setisLoading(false)
                setSecThree(list)
            });
    }

    const getSectionFour= async (teacher:string,subjects:string,topic:string) => {
        setisLoading(true)
        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('topics').doc(topic).collection('Seccion4').get().then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {

                    console.log(JSON.stringify(documentSnapshot.data()))
                    const { content,link1,link2,namelink1,namelink2,title} = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        content,link1,link2,namelink1,namelink2,title
                    }) 
                });
                setisLoading(false)
                setSecFour(list)
            });
    }


    const getSectionFive= async (teacher:string,subjects:string,topic:string) => {
        setisLoading(true)
        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('topics').doc(topic).collection('Seccion5').get().then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {

                    console.log(JSON.stringify(documentSnapshot.data()))
                    const { question} = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        question
                    }) 
                });
                setisLoading(false)
                setSecFive(list)
            });
    }


    const uploadQuestion= async(teacher:string,subjects:string,questionUser:string,solveQuestionUser:string,emailUser:string,nameUser:string)=>{
       
        const dateUser= new Date()
        const dateM = dateUser.getTime();

        const questionOb: SolveQuestion = {

            qualification:  0.0,
            question:       questionUser,
            solveQuestion:  solveQuestionUser,
            email:          emailUser,
            date:           dateM,
            name:           nameUser,
        }

        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('comments').doc(emailUser).set(questionOb).then(querySnapshot=>{
            getCommentsCount(teacher,subjects)
        })
            // firebaseFirestoreB.collection("Aula").document(loadIdTeacher()).collection("Subjects").document(loadIdSubjects()).collection("comments").document(loadEmailUser()+loadIdQuestion()).set(solveQuestion).
    }

    const getCommentsCount=async(teacher:string,subjects:string)=>{
        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('comments').get().then(querySnapshot=>{            
            const doc= firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects)
            const size = querySnapshot.size;
            doc.update('comments', size)
            
        })
    }


    const getAnswer= async (teacher:string,subjects:string) => {
        setisLoading(true)
        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('comments').where('qualification','>=',4).get().then(querySnapshot => {
            const list: any = [];
            querySnapshot.forEach(documentSnapshot => {
                const {qualification,question,solveQuestion,email,date,name} = documentSnapshot.data();
                list.push({
                    id: documentSnapshot.id,
                    qualification,question,solveQuestion,email,date,name
                })

            });
            setisLoading(false)
            setSecSix(list)
        })
    }


    const getLikesSubject = async (teacher:string,subjects:string)=>{
       await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).get().then(documentSnapshot=>{     
        if (documentSnapshot.exists) {
            const dataResp = documentSnapshot.data();
            setDataSubject(dataResp)
          }
       })
    }

    const secLikesSubject = async (teacher:string,subjects:string, like:number)=>{
        const doc= await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects)       
        doc.update('likes', like)
    }

  

    return (
        <TopicsContext.Provider value={{
            isLoading,
            intro,
            dataSubject,
            secOne,
            secTwo,
            secThree,
            secFour,
            secFive,
            secSix,
            getIntro,            
            getSectionOne,
            getSectionTwo,
            getSectionThree,
            getSectionFour,
            getSectionFive,
            getAnswer,
            getLikesSubject,
            secLikesSubject,
            uploadQuestion,
        }}>
            {children}
        </TopicsContext.Provider>
    )

}