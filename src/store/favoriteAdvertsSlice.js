import { createSlice } from "@reduxjs/toolkit";

const favoriteAdvertsSlice = createSlice({
  name: "favoriteAdverts",
  initialState: [],
  reducers: {
    addFavoriteAdvert: (state, action) => {
      state.push(action.payload);
    },
    removeFavoriteAdvert: (state, action) => {
      return state.filter((advert) => advert._id !== action.payload._id);
    },
  },
});

export const { addFavoriteAdvert, removeFavoriteAdvert } =
  favoriteAdvertsSlice.actions;
export default favoriteAdvertsSlice.reducer;
