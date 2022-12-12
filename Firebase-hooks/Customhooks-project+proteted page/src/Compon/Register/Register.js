import React from 'react';

const Register = () => {
    return (
        <div>
            <h1 className='text-[30px] font-bold'>Please Register</h1>
            <form className='space-y-2'>
            <input className='border-2 focus:outline-none' type="text" placeholder='Your Name'/><br/>
                <input  className='border-2 focus:outline-none' type="email" placeholder='Your Email' /><br/>
                <input  className='border-2 focus:outline-none' type="password"  placeholder='Your password'/><br/>
                <input className='bg-[#570d2e] py-2 px-8 text-white' type="submit" value="Register"/>

            </form>
        </div>
    )
};

export default Register;