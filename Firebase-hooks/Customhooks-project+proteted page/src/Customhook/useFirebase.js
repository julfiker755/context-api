import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import auth from '../Firebase/Firebase.ini';

const useFirebase = () => {
    const [User,Setuser]=useState([])
    const googlesignin=()=>{
        const provider = new GoogleAuthProvider();
         signInWithPopup(auth,provider)
         .then(result=>{
            const user=result.user
            Setuser(user)
         }).catch(err=>{
            console.log(err.message)
         })
    }
    // auth change
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
          Setuser(user);
        })
    }, []);
    // sign out
    const handlesignout=()=>{
        signOut(auth)
        .then(()=>{
            Setuser([])
        })
    }
    return {
        User,
        googlesignin,
        handlesignout
    }
};

export default useFirebase;