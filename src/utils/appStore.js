import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"
import favouriteReducer from "./favouriteSlice"

const appStore=configureStore({
    reducer:{ 
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config:configReducer,
        fav:favouriteReducer,
    }
})

export default appStore;