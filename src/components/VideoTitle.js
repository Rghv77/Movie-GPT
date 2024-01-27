import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview,movieId }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold font-serif">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg h-1/4 w-1/2 overflow-y-scroll font-mono scrollbar-none">{overview}</p>
      <div className="my-4 mb-2 md:m-0">
       
       <Link to={"/movie/"+movieId}> <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button></Link>
      </div>
    </div>
  );
};
export default VideoTitle;
