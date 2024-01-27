import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/movieSlice";
import { useDispatch } from "react-redux";


const useMovieDetails=(id)=>{
    const dispatch=useDispatch();
    const getMovieDetails=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"?language=en-US",API_OPTIONS);
    const json=await data.json();
   
    dispatch(addMovieDetails(json))
}

useEffect(()=>{
    getMovieDetails();
},[])}

export default useMovieDetails;