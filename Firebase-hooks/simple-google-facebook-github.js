import React, { useState } from 'react';
import { GoogleAuthProvider,signInWithPopup,signOut,GithubAuthProvider,FacebookAuthProvider} from "firebase/auth";
import auth from "./Firebase/Firebase.ini";


function App() {
  const [User,Uetuser]=useState([])
  // google sign in
  function google(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then(result=>{
      const user=result.user
      Uetuser(user)
    }).catch(errr=>{
      console.log(errr.message)
    })
  }
  // github
  const github=()=>{
    const provider = new GithubAuthProvider();
    signInWithPopup(auth,provider)
    .then(result=>{
      const user=result.user
      Uetuser(user)
    }).catch(err=>{
      console.log(err.message)
    })

  }
  // facebook
  const facebook=()=>{
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth,provider)
    .then(result=>{
      const user=result.user
      Uetuser(user)
    }).catch(err=>{
      console.log(err.message)
    })

  }
  // sing out
  const signoutu=()=>{
    signOut(auth)
    .then(()=>{
      // user is empty
      Uetuser([])
    }).catch(err=>{
      console.log(err.message)
    })
    
  }
  console.log(User)
  return (
    <div className="App text-center mt-2">
         {User.displayName ? <>
          <button onClick={()=>signoutu()} className='bg-[#181054] text-white py-2 px-6 ml-5'>sign out</button>
         </>:<>
         <button onClick={()=>google()} className="bg-[green] py-2 px-6 text-white">Google sign In</button>
         <button onClick={()=>github()} className='bg-[#971675] text-white py-2 px-6 ml-5'>Github sign In</button>
          <button onClick={()=>facebook()} className='bg-[#660e0e] text-white py-2 px-6 ml-5'>Facebook Sign In</button>
         </>}
         
          {User.email && <>
          <h1>displayName:{User.displayName}</h1>
          <h1>Gmail:{User.email}</h1>
          </>}
    </div>
  );
}
export default App;
