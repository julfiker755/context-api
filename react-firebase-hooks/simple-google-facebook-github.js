import auth from "./Firebase/Firebase.ini";
import { useSignInWithGoogle,useAuthState, useSignInWithFacebook, useSignInWithGithub } from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'


function App() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [user] = useAuthState(auth);

  return (
    <div className="App text-center"> 
        {user ? <>
          <button onClick={()=>signOut(auth)} className="bg-[#751250] text-white px-3 py-2">sign Out</button>
        </>:<>
        <button className="bg-[green] text-white ml-2 py-3 mt-3" onClick={()=>signInWithGoogle()}>Google sign In</button>
        <button className="bg-[#341160] text-white ml-2 py-3 mt-3" onClick={()=>signInWithFacebook()}>Facebook sign In</button>
        <button className="bg-[#2f0815] text-white ml-2 py-3 mt-3" onClick={()=>signInWithGithub()}>Github sign In</button>
        </>}
     
      
       {user && <div>
       <h1>display name:{user.displayName}</h1>
       <h1>Gamil:{user.email}</h1>
       </div>}
       
   </div>
  );
}
export default App;

