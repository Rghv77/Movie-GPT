
import { IMG_CDN_URL } from "../utils/constants";



const MovieCard = ({ movie }) => {
 

  if (!movie ||!movie.poster_path) return null;  
  
  return (
    <div className=" relative w-36 md:w-48 pr-4">       
     <img alt="Movie Card" src={IMG_CDN_URL + movie.poster_path} className=" transform transition-transform duration-300 hover:scale-95 border border-solid border-black shadow-lg  shadow-black rounded-md" />
    </div>
  );
};
export default MovieCard;
