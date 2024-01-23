import { LOGO } from "../utils/constants"
import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../utils/Firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"
const Header=()=>{
  const dispatch=useDispatch(); 
    const user=useSelector((store)=>store.user)   
    const navigate=useNavigate();
    const handleSignOut=()=>{
signOut(auth).then(() => {
}).catch((error) => { 
  navigate("/error");
});
    }
    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {  
          const {email,displayName,uid,photoURL}=user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
        } else {
         dispatch(removeUser());
         navigate("/");
        }
      });

      //unsubscribe when components unmounts
      return ()=> unsubscribe();
    },[])

    return <>
   <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img src={LOGO} alt="logo" className="w-44 mx-auto md:mx-0"/>
    {user &&<div className="flex p-2">
        <img className="w-12 h-12" src={user.photoURL} alt="logo"/>
        <p>{user.displayName}</p>
        <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
    </div>}
    </div>
    </> 
}
export default Header;