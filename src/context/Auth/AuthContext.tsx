import React, { createContext, useEffect, useState } from "react";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Platform } from "react-native";


type AuthContextProps={
    isLoading:boolean;
    signInGoogle:()=>Promise<void>    
}

export const AuthContext = createContext({} as AuthContextProps)
export const AuthProvider =({children}:any)=>{
    const [isLoading, setisLoading] = useState(false)


    useEffect(() => {
        
        if(Platform.OS==="ios"){
            GoogleSignin.configure({
                webClientId: '643072121564-r0lqg5rfea27sfv3pfv1srp4tihlmf5l.apps.googleusercontent.com',
                
            });
        }else if(Platform.OS==='android'){
            GoogleSignin.configure({
                webClientId: '643072121564-sfsb3v3e1r8mm7425r6621d293cdrecu.apps.googleusercontent.com',
                
            });
        
        } 
    }, [])




  


    const signInGoogle=async()=>{
        setisLoading(true);
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);      
        // Sign-in the user with the credential
        auth().signInWithCredential(googleCredential).then((dataUser)=>{
           console.log(' dataUser.user.email', dataUser.user.email)
           setisLoading(false);
        })
     
    }



    return (
        <AuthContext.Provider value={{
            signInGoogle,
            isLoading
            }}>
            {children}
        </AuthContext.Provider>
    )

}