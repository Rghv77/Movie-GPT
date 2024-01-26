import { useSelector } from "react-redux"
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const FavouriteMovies=()=>{
    const favList=useSelector((store)=>store.fav.item);
    return <>
    <div className="bg-gradient-to-b from-black">
      <div className="font-extrabold flex justify-center text-3xl m-4 text-blue-700">My Movies List</div>
   <div className="w-full flex flex-wrap m-4">
     {favList.map((movie)=>{
       return <Link to={"/movie/"+movie.id}><MovieCard key={movie.id} movie={movie} /></Link>
     })}
     </div>
       </div>    
    </>
}
export default FavouriteMovies