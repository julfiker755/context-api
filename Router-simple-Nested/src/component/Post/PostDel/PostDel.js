import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDel = () => {
    const postdel=useLoaderData()
    return (
        <div>
            <h1>hello Detais-{postdel.id}</h1>
            <h1>Title:{postdel.title}</h1>
            <h1>Body:{postdel.body}</h1>
        </div>
    );
};

export default PostDel;