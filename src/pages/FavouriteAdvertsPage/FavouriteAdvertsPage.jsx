import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteAdverts } from "../../store/selectors";
import Favorite from "../../components/Favorite/Favorite";
import styles from "./FavouriteAdvertsPage.module.css";

const FavouriteAdvertsPage = () => {
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  return (
    <div className={styles.container}>
      <h1 className={styles.favoriteAdvertsPage__title}>Favorite Adverts</h1>
      <div>
        {favoriteAdverts.map((advert) => (
          <Favorite key={advert._id} advert={advert} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteAdvertsPage;
