import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectIsLoading,
  selectError,
} from "../../store/selectors";
import { fetchAdverts } from "../../store/thunks";
import styles from "./AdvertsList.module.css";
import Loader from "../Loader/Loader";

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
        (
          { _id, name, price } // Use adverts array here
        ) => (
          <li className={styles.row} key={_id}>
            <div className={styles.item}>{name}</div>
            <div className={styles.item}>{price}</div>
          </li>
        )
      )}
    </ul>
  );
};

export default AdvertsList;
