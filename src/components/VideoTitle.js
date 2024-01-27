import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview,movieId }) => {
  return (
    <div className=" -mt-28 md:mt-0 w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-md font-thin md:text-6xl md:font-bold font-serif">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg h-1/4 w-1/2 overflow-y-scroll font-mono scrollbar-none">{overview}</p>
      <div className="my-4 mb-2 md:m-0">
       
       <Link to={"/movie/"+movieId}> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 xl:py-6 xl:px-12 font-mono">
          More Info
        </button></Link>
      </div>
    </div>
  );
};
export default VideoTitle;
