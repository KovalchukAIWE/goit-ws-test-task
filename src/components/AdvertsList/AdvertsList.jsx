import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectIsLoading,
  selectError,
} from "../../store/selectors";
import { fetchAdverts } from "../../store/thunks";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import styles from "./AdvertsList.module.css";

const AdvertsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const allAdverts = useSelector(selectAdverts);

  const [visibleAdverts, setVisibleAdverts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setVisibleAdverts(allAdverts.slice(0, endIndex));
  }, [allAdverts, currentPage, itemsPerPage]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (isLoading && !error) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ul>
        {visibleAdverts.map(
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
      <div className={styles.advertsListButton}>
        {visibleAdverts.length < allAdverts.length && (
          <ButtonLoadMore onClick={loadMore} text="Load more" />
        )}
      </div>
    </div>
  );
};

export default AdvertsList;
