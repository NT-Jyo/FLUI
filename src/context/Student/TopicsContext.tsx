import React, { createContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { Intro, SectionOne } from "../../interfaces/University/Topics";

type TopicsContextProps = {
    isLoading: boolean;
    intro:Intro[],
    secOne:SectionOne[],
    getIntro:(teacher:string,subjects:string,topic:string)=>Promise<void>,
    getSectionOne:(teacher:string,subjects:string,topic:string)=>Promise<void>,

}

export const TopicsContext = createContext({} as TopicsContextProps)
export const TopicsProvider = ({ children }: any) => {

    const [isLoading, setisLoading] = useState(false)
    const [intro, setintro] = useState([]);
    const [secOne, setSecOne] = useState([]);

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


  

    return (
        <TopicsContext.Provider value={{
            isLoading,
            intro,
            secOne,
            getIntro,            
            getSectionOne,
        }}>
            {children}
        </TopicsContext.Provider>
    )

}