import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../../Customhook/useFirebase';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const {User,handlesignout}=useFirebase()
    return (
        <div className='bg-[#330080] text-center'>
            <div className='container mx-auto py-2 text-white space-x-2'>
           <CustomLink to="/Home">Home</CustomLink> 
           <CustomLink to="/Product">Products</CustomLink>
           <CustomLink to="/orders">Orders</CustomLink>
           <CustomLink to="/register">Register</CustomLink>
           <span className='text-white'>{User?.displayName && <span className='text-[#04b621]'>{User.displayName}</span>}</span>
           {User?.displayName ? <button onClick={()=>handlesignout()} className='text-[#04b621] py-2 px-3 bg-[#15033f]'>Sign out</button> :<CustomLink to="/Login">Log In</CustomLink>}
        </div>
        </div>
        
    )
};

export default Header;