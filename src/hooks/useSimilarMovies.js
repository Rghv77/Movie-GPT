// 


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSimilarMovies } from "../utils/movieSlice";

const useSimilarMovies = (id) => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getSimilarMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+id+"/similar?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSimilarMovies(json.results));
  };

  useEffect(() => {
    getSimilarMovies();
  }, [id]);
};

export default useSimilarMovies;
