import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend/Friend';

const Friends = () => {
    const user=useLoaderData();
    return (
        <div className='container mx-auto'>
            <h1 className='text-[30px] text-bold text-center border-b-2 my-[10px]'>Hello frind::{user.length}</h1>
            <div className='flex flex-wrap gap-4'>
                {user.map(u=><Friend user={u} key={u.id}></Friend>)}
            </div>
        </div>
    );
};

export default Friends;