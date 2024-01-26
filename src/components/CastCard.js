import { IMG_CDN_URL } from "../utils/constants";

const CastCard=({profile})=>{
    if(!profile) return null;
    return <>
    
        <img src={IMG_CDN_URL+profile} alt="logo" className="rounded-full w-20 md:w-28 mr-4 shadow-lg shadow-black"/>
    
    </>
}


export default CastCard;