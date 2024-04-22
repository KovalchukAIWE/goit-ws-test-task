import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import advertsReducer from "./advertsSlice";
import favoriteAdvertsReducer from "./favoriteAdvertsSlice";

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favoriteAdverts: favoriteAdvertsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
