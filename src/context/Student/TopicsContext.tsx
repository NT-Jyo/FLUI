import React, { createContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { Intro, SectionFive, SectionFour, SectionOne, SectionThree, SectionTwo } from "../../interfaces/University/Topics";

type TopicsContextProps = {
    isLoading: boolean;
    intro:Intro[],
    secOne:SectionOne[],
    secTwo:SectionTwo[],
    secThree:SectionThree[],
    secFour:SectionFour[],
    secFive:SectionFive[],
    getIntro:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionOne:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionTwo:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionThree:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionFour:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionFive:(teacher:string,subjects:string,topic:string)=>Promise<void>,
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


    const uploadQuestion= async(teacher:string,subjects:string,email:string)=>{

        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('comments').doc(email).set({
            name:'david'
        }).then(resp=>console.log('Se añadio exiotsamente'))
            // firebaseFirestoreB.collection("Aula").document(loadIdTeacher()).collection("Subjects").document(loadIdSubjects()).collection("comments").document(loadEmailUser()+loadIdQuestion()).set(solveQuestion).
    }


  

    return (
        <TopicsContext.Provider value={{
            isLoading,
            intro,
            secOne,
            secTwo,
            secThree,
            secFour,
            secFive,
            getIntro,            
            getSectionOne,
            getSectionTwo,
            getSectionThree,
            getSectionFour,
            getSectionFive,
        }}>
            {children}
        </TopicsContext.Provider>
    )

}