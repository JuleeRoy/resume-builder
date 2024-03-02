import React, { useEffect } from 'react'
import { AuthButton } from '../components'
import useUser from '../hooks/useUser'
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const{data,isLoading,isError}=useUser();

  const navigate=useNavigate();

  useEffect(()=>{
         
    if(!isLoading && data){
      navigate("/",{replace:true})
    }
  },[isLoading,data])

  return (
    <div className='flex justify-center items-center flex-col w-[50%] mx-auto mt-52 h-auto bg-red-300'>
      <h1>headings</h1>
      <h2>Lorem, ipsum.</h2>
       <AuthButton provider={"GoogleAuthProvider"} label={"Sign IN with google"}/>
       <AuthButton provider={"GithubAuthProvider"} label={"Sign IN with Git"}/>
    </div>
  )
}

export default Authentication