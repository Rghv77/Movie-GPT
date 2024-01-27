import { useDispatch, useSelector } from "react-redux"
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import Header from "./Header";
import { removeFavouriteMovie } from "../utils/favouriteSlice";

const FavouriteMovies=()=>{
  const dispatch=useDispatch();
    const favList=useSelector((store)=>store.fav.item);
    const handleRemoveItem=(id)=>{
      dispatch(removeFavouriteMovie(id));
    }
    return <>
    <Header/>
    <div className="relative h-screen bg-zinc-500">
      <img src="https://res.cloudinary.com/dzbmc0pit/image/upload/f_auto,q_auto/v1/personal%20projects/MOVIES%20GPT/ps1rvj6p6t6n015ofsp0" alt="logo" className="absolute z-10 w-1/4 h-1/2 bottom-0 left-[40%]"/>
    <div className=" absolute w-full h-full z-20">
      <div className="font-extrabold flex justify-center text-4xl m-4 text- font-serif">My Movies List</div>
   <div className="w-full flex flex-wrap m-4 mt[10%]">
     {favList?.map((movie)=>{
       return <>
       <button
       className="md:py-2 md:px-4 mr-4 md:mx-4 md:my-2  md:bg-orange-500 md:hover:bg-white text-white  md:rounded-lg font-mono" onClick={()=>handleRemoveItem(movie.id)}
     >Remove -</button>       
       <Link to={"/movie/"+movie.id}><MovieCard key={movie.id} movie={movie} /></Link></>
     })
     }
     </div>
       </div>  
       </div>  
    </>
}
export default FavouriteMovies