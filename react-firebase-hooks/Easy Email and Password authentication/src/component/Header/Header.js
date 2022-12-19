import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/useFirebase';
import { useAuthState,useSignOut } from 'react-firebase-hooks/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    return (
        <div className='bg-[#02574c] text-white'>
           <div className='container mx-auto flex justify-center space-x-3 py-2 text-[20px]'>
            <Link to="/home">Home</Link>
            <Link to="/servies">Servies</Link>
            {user?.uid ? <button onClick={()=>signOut()} className='bg-[#0f445c] text-white px-4'>Sign out</button> :<Link to="/signin">Sign In</Link>}
           </div>
        </div>
    );
};

export default Header;