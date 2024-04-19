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
import Modal from "../Modal/Modal";

const AdvertsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const allAdverts = useSelector(selectAdverts);

  const [visibleAdverts, setVisibleAdverts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAdvert, setSelectedAdvert] = useState(null);
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

  const openModal = (advert) => {
    setSelectedAdvert(advert);
  };

  const closeModal = () => {
    setSelectedAdvert(null);
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
        {visibleAdverts.map((advert) => (
          <Card key={advert._id} advert={advert} onShowMore={openModal} />
        ))}
      </ul>
      <div className={styles.advertsListButton}>
        {visibleAdverts.length < allAdverts.length && (
          <ButtonLoadMore onClick={loadMore} text="Load more" />
        )}
      </div>
      <Modal
        isOpen={!!selectedAdvert}
        onClose={closeModal}
        advert={selectedAdvert}
      />
    </div>
  );
};

export default AdvertsList;
