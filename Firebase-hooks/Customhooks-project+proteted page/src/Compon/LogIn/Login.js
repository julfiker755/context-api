import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Customhook/useFirebase';

const Login = () => {
    const {User,googlesignin}=useFirebase()
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    function google(){
        googlesignin()
        .then(()=>{
            navigate(from,{replace:true})
        })

    }
    return (
        <div>
           <h1 className='text-[30px] font-bold'>Please Register</h1>
           <div className='space-y-6'>
            <button onClick={()=>google()} className='bg-[red] py-2 px-8 text-white my-4'>Google sign In</button>
           </div>
           <form className='space-y-2'>
               <input className='border-2 focus:outline-none' type="email" placeholder='Your Email' /><br/>
               <input className='border-2 focus:outline-none' type="password"  placeholder='Your password'/><br/>
               <input className='bg-[green] py-2 px-8 text-white' type="submit" value="Register"/>

           </form>
           </div>
   )
};

export default Login;