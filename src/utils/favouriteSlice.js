import { createSlice } from "@reduxjs/toolkit";
    
 

const favouriteSlice=createSlice({
    name:"fav",
    initialState:{
        item:[],// use set
    },
    reducers:{
        addFavouriteMovie:(state,action)=>{
            const existingMovie = state?.item?.find((movie) => movie.id === action.payload.id);
            if(!existingMovie) {state?.item?.push(action.payload);}
        },



        removeFavouriteMovie:(state,action)=>{
           state.item=state.item.filter((movie)=> movie.id!==action.payload);
        },




        clearFavouriteMovie:(state)=>{
            state.item=[];
        }
    }
});

export const {addFavouriteMovie,removeFavouriteMovie,clearFavouriteMovie}=favouriteSlice.actions;
export default favouriteSlice.reducer;