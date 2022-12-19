import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/useFirebase';

const SignIn = () => {
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
   const handlefrom =async(e)=>{
      e.preventDefault()
      await signInWithEmailAndPassword(email, pass)
   }
    return (
        <div className='w-[600px] mx-auto'>
            <h1>Sign in or create an account</h1>
             <form onSubmit={handlefrom}>
             <h1>Gmail</h1>
             <h1><input onChange={(e)=>setemail(e.target.value)} className='border focus:outline-none' type="text"/></h1>
             <h1>Password</h1>
             <h1><input onChange={(e)=>setpass(e.target.value)} className='border focus:outline-none' type="text"/></h1>
             <h1 className='text-[red]'><Link to="/register">Please Register</Link></h1>
             <button className='bg-[green] text-white py-2 px-5 mt-2'>Submit</button>     
            </form>   
            <h1><button onClick={async()=>{
             const success=sendPasswordResetEmail(email)
             if(success){
                window.alert("Send Password Check the email")
             }
            }} className='bg-[#210b5a] px-4 text-white mt-2'>Forget Password</button></h1>    
        </div>
    );
};

export default SignIn;