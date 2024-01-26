import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        movieDetails:null,
        movieCredits:null,
        similarMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
         state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
         state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
         state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
         state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
         state.upcomingMovies=action.payload;
        },
        addMovieDetails:(state,action)=>{
            state.movieDetails=action.payload;
        },
        addMovieCredits:(state,action)=>{
            state.movieCredits=action.payload;
        },
        addSimilarMovies:(state,action)=>{
            state.similarMovies=action.payload;
        }
       
    },
});

export const {addNowPlayingMovies,addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpcomingMovies,addMovieDetails,addMovieCredits,addSimilarMovies}=movieSlice.actions;
export default movieSlice.reducer;