import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetals";
import { useSelector } from "react-redux";
import ActorList from "./ActorList";
import useMovieCredits from "../hooks/useMovieCredits";
import MainDetails from "./MainDetails";
import MovieList from "./MovieList";
import useSimilarMovies from "../hooks/useSimilarMovies";
import Header from "./Header";
 
const MovieDetails=()=>{
   
    
    const {id}=useParams();
    useMovieDetails(id);
    useMovieCredits(id);
    useSimilarMovies(id);
    const similarMovies=useSelector((store)=>store.movies.similarMovies);
   if(!similarMovies) return null;
   console.log(similarMovies);
    return <>
    <Header/>
    <MainDetails/>
    <div className=" my-4 pl-4 relative z-20">
      <ActorList/>      
      </div> 
     
      <MovieList title={"Similar Movies"} movies={similarMovies}/>
   
    </>
}

export default MovieDetails;