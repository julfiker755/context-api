import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    if(loading) {
        return <div>Loading...</div>
    }
// how to proted page
    if (user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;