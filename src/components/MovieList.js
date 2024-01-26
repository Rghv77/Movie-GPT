import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-black">{title}</h1>
      <div className="flex overflow-x-scroll">

          {(movies?.map((movie) => (
           <Link to={"/movie/"+movie.id}>  <MovieCard key={movie.id} movie={movie} /></Link>
          )))}
        

      </div>
    </div>
  );
};
export default MovieList;
