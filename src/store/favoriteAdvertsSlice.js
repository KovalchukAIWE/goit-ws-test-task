import { createSlice } from "@reduxjs/toolkit";

const loadFavoriteAdverts = () => {
  const favoriteAdverts = localStorage.getItem("favoriteAdverts");
  return favoriteAdverts ? JSON.parse(favoriteAdverts) : [];
};

const saveFavoriteAdverts = (favoriteAdverts) => {
  localStorage.setItem("favoriteAdverts", JSON.stringify(favoriteAdverts));
};

const favoriteAdvertsSlice = createSlice({
  name: "favoriteAdverts",
  initialState: loadFavoriteAdverts(),
  reducers: {
    addFavoriteAdvert: (state, action) => {
      state.push(action.payload);
      saveFavoriteAdverts(state);
    },
    removeFavoriteAdvert: (state, action) => {
      const newState = state.filter(
        (advert) => advert._id !== action.payload._id
      );
      saveFavoriteAdverts(newState);
      return newState;
    },
  },
});

export const { addFavoriteAdvert, removeFavoriteAdvert } =
  favoriteAdvertsSlice.actions;
export default favoriteAdvertsSlice.reducer;
