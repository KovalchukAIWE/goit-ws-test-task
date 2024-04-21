import React from "react";
import Category from "../Category/Category";
import styles from "./Features.module.css";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import BookForm from "../BookForm/BookForm";

const Features = ({ advert }) => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresLeft}>
        <div className={styles.featuresCategories}>
          <Category details={advert.details} />
        </div>
        <VehicleDetails advert={advert} />
      </div>
      <div className={styles.featuresRight}>
        <BookForm />
      </div>
    </div>
  );
};

export default Features;
