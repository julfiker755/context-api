import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({user}) => {
    const {id,name,email,phone}=user
    const navigate=useNavigate()
    return (
        <div className='border border-[red] rounded-md w-[300px] text-center p-2'>
            <h1>Name:{name}</h1>
            <h1>Email Id:{email}</h1>
            <h1>Phone:{phone}</h1>
            <button onClick={()=>navigate(`/frinds/${id}`)} className='border py-2 px-6 bg-[#2b115e]'>Datils</button>
        </div>
    );
};

export default Friend;