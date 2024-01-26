import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addFavouriteMovie } from "../utils/favouriteSlice";

const MainDetails=()=>{
    const movieDetails=useSelector((store)=>store.movies.movieDetails)
    const dispatch=useDispatch();
    if(!movieDetails) return null;
    const handleAddButtonClick=()=>{
        dispatch(addFavouriteMovie(movieDetails))
      }
    console.log(movieDetails)
    
    return <>
    <div className="relative aspect-video bg-gradient-to-r  from-black">
   { movieDetails.backdrop_path?<img src={IMG_CDN_URL+movieDetails.backdrop_path} alt="logo" className="absolute  w-full h-full -z-50 opacity-30"/>:<img src={IMG_CDN_URL+movieDetails.poster_path} alt="logo" className="absolute  w-full h-full -z-50 opacity-70"/>}
   <div className="absolute w-full h-full flex justify-between">
    <img src={IMG_CDN_URL+movieDetails.poster_path} alt="logo" className="w-1/4 h-3/4 rounded-lg my-[10%] m-4"/>
    <div className="w-1/2 my-[10%]">
    <p className="font-extrabold text-3xl ">{movieDetails.original_title?movieDetails.original_title:"Name"} <span className="text-black font-normal">({movieDetails.release_date?movieDetails.release_date:"Date"})</span></p>
   
    
    <div className="mt-4">{movieDetails?.genres.map((genre)=>{return <span className="hover:text-black text-white m-2 text-lg  rounded-md cursor-pointer">{genre.name}</span>})}</div>
    
    
              <button onClick={handleAddButtonClick} className=" py-2 px-4  my-4 font-bold bg-orange-500 hover:bg-white text-black  rounded-lg">Add to Favourite</button>    
   
 
    <p className="text-white text-lg mt-8 font-bold">OverView:</p>

    <p className="text-white mt-0  md:mt-2 h-16 overflow-y-scroll font-bold">{movieDetails.overview
?movieDetails.overview
:"Overview"}</p>

<div class="w-20 flex flex-col items-center justify-center bg-blue-500 rounded-full mt-4 h-20"><div class="text-white font-bold">{movieDetails.vote_average}</div> <div>⭐⭐⭐</div>
</div>
</div>
   

    </div>
   </div>
    </>
}

export default MainDetails;