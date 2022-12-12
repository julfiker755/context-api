import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Datails = () => {
    const friendatails=useLoaderData()
    const navigate=useNavigate()
    console.log(friendatails)
    return (
        <div>
          <div className='border border-[red] rounded-md w-[300px] text-center p-2 mx-auto mt-4'>
            <h1>Id:{friendatails.id}</h1>
            <h1>Name:{friendatails.name}</h1>
            <h1>Email Id:{friendatails.email}</h1>
            <button onClick={()=>navigate(`/frinds`)} className='border py-2 px-6 bg-[#2b115e]'>Frinds</button>
        </div>
        </div>
    );
};

export default Datails;