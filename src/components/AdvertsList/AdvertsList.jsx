import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectIsLoading,
  selectError,
} from "../../store/selectors";
import { fetchAdverts } from "../../store/thunks";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";

const AdvertsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  if (isLoading && !error) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {adverts.map(
        ({
          _id,
          gallery,
          name,
          price,
          rating,
          reviews,
          location,
          description,
          details,
        }) => (
          <Card
            key={_id}
            gallery={gallery}
            name={name}
            price={price}
            rating={rating}
            reviews={reviews}
            location={location}
            description={description}
            details={details}
          />
        )
      )}
    </ul>
  );
};

export default AdvertsList;
