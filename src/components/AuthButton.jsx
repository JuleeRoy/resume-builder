import React from 'react'
import {GoogleAuthProvider ,GithubAuthProvider, signInWithRedirect} from 'firebase/auth'
import { auth } from '../config/firebase.config';
const AuthButton = ({label,provider}) => {

const handleClick= async()=>{

    const googleAuthProvider = new GoogleAuthProvider();
    const gitAuthProvider=new GithubAuthProvider();

    switch(provider){
        case"GoogleAuthProvider":{
           await signInWithRedirect(auth,googleAuthProvider).then((res)=>{console.log(res)}).catch((err)=>{
            console.log(`Error:${err.Message}`)
           });
           break;
        }
        case"GithubAuthProvider":{
          await signInWithRedirect(auth,gitAuthProvider).then((res)=>{console.log(res)}).catch((err)=>{
            console.log(`Error:${err.Message}`)
           });
             break;
        }
        default:
        {
          await signInWithRedirect(auth,googleAuthProvider).then((res)=>{console.log(res)}).catch((err)=>{
            console.log(`Error:${err.Message}`)
           });
            break;
        }
    }
}
  return (
    <div className='border w-96 bg-slate-500 mb-3' onClick={handleClick}>
      {label}
    </div>
  )
}

export default AuthButton