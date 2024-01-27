import { useSelector } from "react-redux";
import CastCard from "./CastCard";

const ActorList=()=>{
    const movieCredits=useSelector((store)=>store.movies.movieCredits);
    if(!movieCredits) return null;
    const cast=movieCredits.cast;
    return <>
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white font-serif">Cast</h1>
      <div className="flex  overflow-x-scroll">
    {
        cast.map((actor)=>{            
            return <CastCard profile={actor.profile_path} key={actor.id}/>
        })
    }
    </div>
    </div>
    </>
}
export default ActorList;