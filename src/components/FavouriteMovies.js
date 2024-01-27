import { useSelector } from "react-redux"
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import Header from "./Header";

const FavouriteMovies=()=>{
    const favList=useSelector((store)=>store.fav.item);
    return <>
    <Header/>
    <div className="relative w-screen h-screen bg-zinc-500">
      <img src="https://res.cloudinary.com/dzbmc0pit/image/upload/f_auto,q_auto/v1/personal%20projects/MOVIES%20GPT/ps1rvj6p6t6n015ofsp0" alt="logo" className="absolute z-10 w-1/4 h-1/2 bottom-0 left-[40%]"/>
    <div className=" absolute w-full h-full z-20">
      <div className="font-extrabold flex justify-center text-4xl m-4 text- font-serif mt-[10%]">My Movies List</div>
   <div className="w-full flex flex-wrap m-4 mt[10%]">
     {favList.map((movie)=>{
       return <Link to={"/movie/"+movie.id}><MovieCard key={movie.id} movie={movie} /></Link>
     })}
     </div>
       </div>  
       </div>  
    </>
}
export default FavouriteMovies