import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Post = () => {
    const postdetails=useLoaderData()
    console.log(postdetails)
    return (
        <div className='text-center'>
            <h1 className='text-[30px] text-bold'>All Post item</h1>
            <div className='flex flex-wrap justify-center items-center border-2 py-2'>
                {postdetails.map(u=><Link to={`/post/${u.id}`} key={u.id} className='w-[50px] h-[30px] m-1 border-2 items-center'>{u.id}</Link>)}
            </div>
            <div className='container mx-auto text-center'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Post;