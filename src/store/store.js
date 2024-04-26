import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./advertsSlice";
import favoriteAdvertsReducer from "./favoriteAdvertsSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
    console.log("error");
  }
};

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favoriteAdverts: favoriteAdvertsReducer,
});

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
