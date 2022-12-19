import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword,useSendEmailVerification,useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/useFirebase';

const Register = () => {
const [name,setname]=useState('')
const [email,setemail]=useState('')
const [pass,setpass]=useState('')  //{sendEmailVerification:true}
const [createUserWithEmailAndPassword,] = useCreateUserWithEmailAndPassword(auth);
const [updateProfile] = useUpdateProfile(auth);
const [sendEmailVerification] = useSendEmailVerification(auth);
const handlesubmit=async(e)=>{
 e.preventDefault()
 await createUserWithEmailAndPassword(email, pass)
 const success=await sendEmailVerification()
 if(success){
    window.alert("Check Your Email")
 }
 await updateProfile({ displayName:name })
 
 
}

    return (
       <div className='w-[500px] mx-auto'>
     <form onSubmit={handlesubmit}>
     <h1 className='text-[20px]'>Name</h1>
     <input onChange={(e)=>setname(e.target.value)} className='border-2 px-2 py-1 focus:outline-none' type="text" placeholder='Enter your name' />
     <h1 className='text-[20px]'>Email</h1>
     <input onChange={(e)=>setemail(e.target.value)} className='border-2 px-2 py-1 focus:outline-none' type="email" placeholder='Enter your name' />
     <h1 className='text-[20px]'>Password</h1>
     <input onChange={(e)=>setpass(e.target.value)} className='border-2 px-2 py-1 focus:outline-none' type="text" placeholder='Enter your name' />
     <h1><button className='bg-[#100624] text-white py-2 px-5 mt-2'>Submit</button>  </h1>     
    </form>  
        </div>
    );
};

export default Register;