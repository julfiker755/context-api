import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Datails from '../Friends/Datails/Datails';
import Friends from '../Friends/Friends';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Post from '../Post/Post';
import PostDel from '../Post/PostDel/PostDel';

const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/frinds",
                loader:async()=>{
                    return fetch("https://jsonplaceholder.typicode.com/users")
                },
                element:<Friends></Friends>
            },{
                path:'/frinds/:friendid',
                loader:async({params})=>{
                 return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendid}`)
                },
                element:<Datails></Datails>
            },{
                path:'/home',
                element:<Home></Home>
           },{
            path:'/post/',
            loader:async()=>{
            return fetch("https://jsonplaceholder.typicode.com/posts")
            },
            element:<Post></Post>,
            children:[
                {
                    path:':postid',
                    loader:async({params})=>{
                        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
                    },
                    element:<PostDel></PostDel>
                }
            ]

           }
        ]
    },{
        path:"*",
        element:<div className='text-[30px] text-[red] text-center'>Not a page</div>
    }
])

export default routes;