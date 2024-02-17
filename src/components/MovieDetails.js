
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetals";
import { useSelector } from "react-redux";
import ActorList from "./ActorList";
import useMovieCredits from "../hooks/useMovieCredits";
import MainDetails from "./MainDetails";
import MovieList from "./MovieList";
import useSimilarMovies from "../hooks/useSimilarMovies";
import Header from "./Header";
import useMovieTrailer from "../hooks/useMovieTrailer";
 
const MovieDetails=()=>{   
    
  const {id}=useParams();
    useMovieDetails(id);
    useMovieCredits(id);
    useSimilarMovies(id);
    useMovieTrailer(id);
    const similarMovies=useSelector((store)=>store.movies.similarMovies);
   if(!similarMovies) return null;

    return <>
    <Header/>
    <MainDetails/>
    <div className=" bg-gradient-to-br from-red-400 to-slate-300">
        <div className=" mt-0 pl-4 md:pl-12 relative z-20">
      <ActorList/>  
      <MovieList title={"Similar Movies"} movies={similarMovies}/>    
      </div> 
      </div>
     
      
   
    </>
}

export default MovieDetails;