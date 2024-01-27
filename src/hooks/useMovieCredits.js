import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieCredits } from "../utils/movieSlice";
import { useDispatch } from "react-redux";


const useMovieCredits=(id)=>{
    const dispatch=useDispatch();
    const getMovieCredits=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/credits?language=en-US",API_OPTIONS);
    const json=await data.json();
  
    dispatch(addMovieCredits(json))
}

useEffect(()=>{
    getMovieCredits();
},[])
}

export default useMovieCredits;