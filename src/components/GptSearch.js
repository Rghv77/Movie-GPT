import { useDispatch } from "react-redux";
import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import Header from "./Header";
import { toggleGptSearchView } from "../utils/gptSlice";

const GptSearch=()=>{
    const dispatch = useDispatch();
    dispatch(toggleGptSearchView());
    return <>
    <Header/>
    <div className="absolute -z-10"> 
        <img src={BG_URL} alt="background"/>
        </div>
    <GptSearchBar/>
    <GptMovieSuggestions/>
    </>
}

export default GptSearch;