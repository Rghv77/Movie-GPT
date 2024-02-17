import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addFavouriteMovie } from "../utils/favouriteSlice";
import { useState } from "react";


const MainDetails=()=>{
  const dispatch=useDispatch();
  const [mute,setMute]=useState(false);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    const movieDetails=useSelector((store)=>store.movies.movieDetails)
    const [popUp,setPopUp]=useState(false);
   
    
    
    if(!movieDetails) return null;    
    const handleAddButtonClick=()=>{
        dispatch(addFavouriteMovie(movieDetails))
      }
   
    const openPopUp=()=>{
        setPopUp(!popUp);        
    }
    return <>
    <div className="relative aspect-video bg-gradient-to-br  from-black mt-16 md:mt-0  ">
    {popUp && trailerVideo && <div className="">
      <iframe
        className="absolute  w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute="+mute+"&playlist="+trailerVideo?.key+"&loop=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>} 
   { movieDetails.backdrop_path?<img src={IMG_CDN_URL+movieDetails.backdrop_path} alt="logo" className="absolute  w-full h-full -z-50 opacity-30"/>:<img src={IMG_CDN_URL+movieDetails.poster_path} alt="logo" className="absolute  w-full h-full -z-50 opacity-30"/>}
   <div className=" absolute w-full h-full flex justify-between">
    {!popUp&&<img src={IMG_CDN_URL+movieDetails.poster_path} alt="logo" className="w-1/4 h-3/4 rounded-lg my-[10%] m-4 shadow-lg shadow-black"/>}
    <div className="hidden md:inline-block w-1/2 my-[10%] mx-4">
    <p className="font-extrabold text-5xl text-yellow-700 font-serif shadow-sm shadow-black ">{movieDetails.original_title?movieDetails.original_title:"Name"} <span className=" text-yellow-600 font-normal">({movieDetails.release_date?movieDetails.release_date:"Date"})</span></p>
   
    
    <div className="mt-4 overflow-x-scroll scrollbar-none">{movieDetails?.genres.map((genre)=>{return <span key={genre.name} className="text-lg  text-white m-2 rounded-md font-thin shadow-sm shadow-black">{genre.name}</span>})}</div>
    
    <div className="flex">
              <button onClick={handleAddButtonClick} className=" py-2 px-4  my-4 font-bold bg-orange-500 hover:bg-white text-black  rounded-lg font-mono shadow-lg shadow-black">Add to Favourite</button>    
              <button onClick={openPopUp} className=" py-2 px-4  m-4 font-bold bg-red-500 hover:bg-white text-black  rounded-lg font-mono shadow-lg shadow-black">{popUp?"Close Video":"Watch Trailer"} 📽️</button>   
              {popUp&&<button onClick={()=>{setMute(!mute)}} className=" py-2 px-4  m-4 font-bold bg-green-500 hover:bg-white text-black  rounded-lg font-mono shadow-lg shadow-black">{mute?"Turn On Sound":"Turn Off Sound"} 🔊</button>}   
              </div>
              <div className="w-20 flex flex-col items-center justify-center bg-blue-500 rounded-full mt-4 h-20 shadow-lg shadow-black"><div className="text-white font-bold font-mono">{movieDetails.vote_average}</div> <div>⭐⭐⭐</div>
</div>
              
 <div className="hidden md:block shadow-sm shadow-black">
    <p className=" text-white text-2xl mb-2  mt-8 font-bold font-mono">OverView:</p>

    <p className="text-white mt-0  md:mt-2 h-16 overflow-y-scroll font-bold font-mono scrollbar-none">{movieDetails.overview
?movieDetails.overview
:"Overview"}</p>
</div>


</div>
   

    </div>
   </div>
   <div className="md:hidden bg-gradient-to-r from-black to-slate-300 w-screen flex justify-between">
    
    <div className="w-screen my-2">
    <p className=" w-full font-extrabold overflow-x-scroll text-lg text-yellow-500 font-serif shadow-sm shadow-black px-10 ">{movieDetails.original_title?movieDetails.original_title:"Name"} <span className=" text-yellow-600 font-normal">({movieDetails.release_date?movieDetails.release_date:"Date"})</span></p>
   
    
    <div className="mt-2 w-full px-2 flex overflow-x-scroll">{movieDetails?.genres.map((genre)=>{return <span key={genre.name} className="text-sm  text-white mx-2 rounded-md font-thin shadow-sm shadow-black">{genre.name}</span>})}</div>
    
    <div className="flex">
              <button onClick={handleAddButtonClick} className="bg-blue-500 text-white py-2 px-4 my-8 ml-4 mr-2  rounded-md font-mono shadow-lg shadow-black">Add to Favourite</button>    
              <button onClick={openPopUp} className="bg-blue-500 text-white py-2 px-4 my-8 mx-2  rounded-md font-mono shadow-lg shadow-black">{popUp?"Close Video":"Watch Trailer"} 📽️</button>   
              {popUp&&<button onClick={()=>{setMute(!mute)}} className=" bg-green-500 text-white py-2 px-4 my-8 mx-2  rounded-md font-mono shadow-lg shadow-black">{mute?"Turn On Sound":"Turn Off Sound"} 🔊</button>}   
              </div>
              <div className="shadow-sm shadow-black px-4 overflow-x-scroll scrollbar-none">
    <p className=" text-white text-2xl mb-2  mt-8 font-bold font-mono">OverView:</p>

    <p className="text-white mt-0 h-24 overflow-y-scroll font-bold font-mono scrollbar-none">{movieDetails.overview
?movieDetails.overview
:"Overview"}</p>
</div>
              <div className="flex shadow-lg shadow-black"><div className="text-white text-lg mb-2 ml-4 mr-2  mt-8 font-bold font-mono">Rating</div><div className="w-20 flex flex-col items-center justify-center bg-blue-500 rounded-full mt-4 h-10 text-white font-bold font-mono">{movieDetails.vote_average}</div>
</div>
              



</div>
   

    </div>
    </>
}

export default MainDetails;