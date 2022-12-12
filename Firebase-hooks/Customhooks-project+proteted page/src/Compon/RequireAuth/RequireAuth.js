import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Customhook/useFirebase';

const RequireAuth = ({ children }) => {
    const {User}=useFirebase()
    let location = useLocation()
    if(!User){
        return <Navigate to="/Login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;