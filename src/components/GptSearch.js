import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
    return <>
    <div className="absolute -z-10"> 
        <img src={BG_URL} alt="background"/>
        </div>
    <GptSearchBar/>
    <GptMovieSuggestions/>
    </>
}

export default GptSearch;