import React, { createContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';

type TopicsContextProps = {
    isLoading: boolean;
    getSeccionOne:(teacher:string,subjects:string,topic:string)=>Promise<void>,
}

export const TopicsContext = createContext({} as TopicsContextProps)
export const TopicsProvider = ({ children }: any) => {

    const [isLoading, setisLoading] = useState(false)

    const getSeccionOne= async (teacher:string,subjects:string,topic:string) => {
        await firestore().collection('Aula').doc(teacher).collection('Subjects').doc(subjects).collection('topics').doc(topic).collection('Introduction').get().then(querySnapshot => {
                const list: any = [];
                querySnapshot.forEach(documentSnapshot => {

                    console.log(JSON.stringify(documentSnapshot.data()))
/*                     const { email,name,photo,provider,uid} = documentSnapshot.data();
                    list.push({
                        id: documentSnapshot.id,
                        email,name,photo,provider,uid
                    }) */
                });
                //setStudents(list)
            });
    }




  

    return (
        <TopicsContext.Provider value={{
            isLoading,
            getSeccionOne,

        }}>
            {children}
        </TopicsContext.Provider>
    )

}