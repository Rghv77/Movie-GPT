import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    popUp:false,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    togglePopUp: (state) => {
      state.popUp = !state.popUp;
    },
  },
});

export const { changeLanguage,togglePopUp } = configSlice.actions;

export default configSlice.reducer;
