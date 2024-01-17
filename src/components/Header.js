import { LOGO } from "../utils/constants"
import {signOut} from "firebase/auth"
import {auth} from "../utils/Firebase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
const Header=()=>{
    const user=useSelector((store)=>store.user)   
    const navigate=useNavigate();
    const handleSignOut=()=>{
signOut(auth).then(() => {
  navigate("/");
}).catch((error) => { 
  navigate("/error");
});
    }
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