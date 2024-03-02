import { onSnapshot } from "firebase/firestore";
import { auth } from "../config/firebase.config"

export const getUserDetail=()=>{
    return new Promise((res,rej)=>{
   const unsunscribe=auth.onAuthStateChanged((userCred)=>{
           if(userCred){
            const userData=userCred.providerData[0];
            console.log(userData);
           }
           else
           {
            rej(new Error("user is not authenticated"))
           }

        //    make sure to unsubcsribe from the listener to prevent memory leak

        unsunscribe();
   })
    })
}