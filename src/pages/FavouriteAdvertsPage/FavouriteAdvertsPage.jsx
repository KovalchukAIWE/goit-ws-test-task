import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteAdverts } from "../../store/selectors";
import Card from "../../components/Card/Card";

const FavouriteAdvertsPage = () => {
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  return (
    <div>
      <h1>Favorite Adverts</h1>
      <div>
        {favoriteAdverts.map((advert) => (
          <Card key={advert._id} advert={advert} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteAdvertsPage;
