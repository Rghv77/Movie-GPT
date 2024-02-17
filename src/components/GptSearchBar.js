import openai from "../utils/openai";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS,SUPPORTED_LANGUAGES } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

  

    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

   

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex items-center justify-center mt-8 ">

      <form
        className="relative mt-20"
        onSubmit={(e) => e.preventDefault()}
      >
     
        <input
          ref={searchText}
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 w-64 sm:w-96"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="absolute right-0 top-0 h-full px-4 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none transition duration-300"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
        
       
        
      </form>
      <div className="ml-4 mt-20"> 
      <select
              className="px-4 py-2 bg-slate-400 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
     </div>
     </div>


  
  );
};
export default GptSearchBar;
