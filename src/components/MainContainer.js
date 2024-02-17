import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const index=Math.floor(Math.random() * (movies.length  + 1))
  const mainMovie = movies[index];

  const { original_title,overview,id } = mainMovie;

  

  return (
    <div className="pt-[30%] bg-red-600 md:pt-0 w-screen">
      <VideoTitle title={original_title?original_title:null} overview={overview?overview:null} movieId={id?id:null} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
