import React from "react";
import styles from "./VehicleDetails.module.css";

const VehicleDetails = ({ advert }) => {
  const { form, length, width, height, tank, consumption } = advert;

  return (
    <div>
      <p className={styles.vehicleDetailsTitle}>VehicleDetails</p>
      <div className={styles.vehicleDetailsDescription}>
        <p className={styles.vehicleDetailsItem}>
          Form:<span>{form}</span>
        </p>
        <p className={styles.vehicleDetailsItem}>
          Length:<span>{length}</span>
        </p>
        <p className={styles.vehicleDetailsItem}>
          Width:<span>{width}</span>
        </p>
        <p className={styles.vehicleDetailsItem}>
          Height:<span>{height}</span>
        </p>
        <p className={styles.vehicleDetailsItem}>
          Tank:<span>{tank}</span>
        </p>
        <p className={styles.vehicleDetailsItem}>
          Consumption:<span>{consumption}</span>
        </p>
      </div>
    </div>
  );
};

export default VehicleDetails;
