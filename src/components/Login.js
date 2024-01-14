import { BG_URL } from "../utils/constants";

const Login=()=>{
    return <>
    <div>
        <img src={BG_URL} alt="background"/>
        <form onSubmit={(e) => e.preventDefault()} className=" top-10 w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
>
            <h1 className=" font-bold text-3xl">Sign Up </h1>
            <input type="email" placeholder="Full Name" className="my-4 p-4 bg-slate-700 w-full rounded-sm"/>
            <input type="email" placeholder="Email Address" className="my-4 p-4 bg-slate-700 w-full rounded-sm"/>
            <input type="password" placeholder="Password" className="my-4 p-4 bg-slate-700 w-full rounded-sm"/>
            <button className="my-4 p-4 bg-red-600 w-full rounded-md">Sign Up</button>
            <div className="mt-4">
                <span className=" font-extralight">Already Registered?</span>
                <span className=" cursor-pointer hover:underline font-medium"> Sign In now.</span>
            </div>
        </form>
    </div>
    </>
}

export default Login;