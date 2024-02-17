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
    <div className="relative w-screen h-screen bg-gradient-to-br from from-black via-slate-400 to-red-400">
      {/* <img src="https://res.cloudinary.com/dzbmc0pit/image/upload/f_auto,q_auto/v1/personal%20projects/MOVIES%20GPT/ps1rvj6p6t6n015ofsp0" alt="logo" className="absolute z-10 w-1/4 h-1/2 bottom-0 left-[40%]"/> */}
      {/* <div className="absolute w-screen h-screen bg-gradient-to-br from from-black via-slate-400 to-red-400">

        
      </div> */}
    <div className=" absolute w-full h-full z-20">
      <div className="font-bold flex justify-center text-4xl m-16 text- font-serif text-white shadow-lg shadow-black bg-black">WatchList</div>
      {favList.length===0 &&<div className="font-bold flex justify-center text-4xl m-10 text- font-serif  shadow-sm shadow-black">Empty ☹️☹️☹️</div>}
   <div className=" w-full flex flex-wrap m-4 mt[10%]">
     {favList?.map((movie)=>{
       return <div className=" flex flex-col" >
      
       <Link to={"/movie/"+movie.id}><MovieCard key={movie.id} movie={movie} /></Link>
       <div className="absolute  left my-4 mb-2 md:m-0">
       <button onClick={()=>handleRemoveItem(movie.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md -mt-10 md:-mt-0 py-2 px-2  font-mono">
           -
        </button>       
        </div>
       </div>
     })
     }
     </div>
       </div>  
       </div>  
    </>
}
export default FavouriteMovies