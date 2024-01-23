import { BG_URL, USER_AVATAR } from "../utils/constants";
import { useRef, useState } from "react";
import Header from "./Header";
import { CheckValid } from "../utils/CheckValid";
import { auth } from "../utils/Firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login=()=>{ 
    const [errorMessage,setErrorMessage]=useState(null);
    const [isSignInForm,setIsSignInForm]=useState(false);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const handleSignButton=()=>{
       const error=CheckValid(email.current.value,password.current.value);
       setErrorMessage(error);
       if(error) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user=userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_AVATAR
    }).then(() => {
      // Profile updated!
      const {email,displayName,uid,photoURL}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/browse");
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+ errorMessage);  
  });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+ errorMessage);  
  });
        }
    }
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return <>
    <Header/>  
    <div> 
        <img src={BG_URL} alt="background" className="absolute"/>
        <form onSubmit={(e) => e.preventDefault()} className=" my-28 w-3/12 transform left-1/2 -translate-x-1/2 absolute px-12 py-8 bg-black text-white rounded-lg bg-opacity-80"
>
            <h1 className=" font-bold text-3xl">{isSignInForm?"Sign In":"Sign Up"} </h1>
            {!isSignInForm&&<input type="text" placeholder="Full Name" className="my-4 p-4 bg-slate-700 w-full rounded-sm" ref={name}/>}
            <input type="email" placeholder="Email Address" className="my-4 p-4 bg-slate-700 w-full rounded-sm" ref={email}/>
            <input type="password" placeholder="Password" className="my-4 p-4 bg-slate-700 w-full rounded-sm" ref={password}/>
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="my-4 p-4 bg-red-600 w-full rounded-md hover:bg-slate-400" onClick={handleSignButton}>{isSignInForm?"Sign In":"Sign Up"}</button>
            <div className="mt-4">
               
                <span className=" cursor-pointer hover:underline font-medium" onClick={toggleSignInForm}>{isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}</span>
            </div>
        </form>
    </div>
    </>
}

export default Login;