import { BG_URL } from "../utils/constants";
import { useRef, useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(false);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const handleSignButton=()=>{
    //    const isnotValid=CheckValid(email.current.value,password.current.value);
    //    if(isnotValid) return;

        if(!isSignInForm){

        }
        else {

        }
    }
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return <>
    <Header/>
    <div>
        <img src={BG_URL} alt="background"/>
        <form onSubmit={(e) => e.preventDefault()} className=" top-10 w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
>
            <h1 className=" font-bold text-3xl">{isSignInForm?"Sign In":"Sign Up"} </h1>
            {!isSignInForm&&<input type="email" placeholder="Full Name" className="my-4 p-4 bg-slate-700 w-full rounded-sm" ref={name}/>}
            <input type="email" placeholder="Email Address" className="my-4 p-4 bg-slate-700 w-full rounded-sm" ref={email}/>
            <input type="password" placeholder="Password" className="my-4 p-4 bg-slate-700 w-full rounded-sm" ref={password}/>
            <button className="my-4 p-4 bg-red-600 w-full rounded-md" onClick={handleSignButton}>Sign Up</button>
            <div className="mt-4">
                <span className=" font-extralight">Already Registered?</span>
                <span className=" cursor-pointer hover:underline font-medium" onClick={toggleSignInForm}>{isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}</span>
            </div>
        </form>
    </div>
    </>
}

export default Login;