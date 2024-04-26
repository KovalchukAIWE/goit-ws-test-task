import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CataloguePage/CatalogPage"));
const FavouriteAdvertsPage = lazy(() =>
  import("../../pages/FavouriteAdvertsPage/FavouriteAdvertsPage")
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavouriteAdvertsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
