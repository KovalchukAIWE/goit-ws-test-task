import React from "react";
import styles from "./VehicleType.module.css";

import vanIcon from "../../images/categories/van.svg";
import alcoveIcon from "../../images/categories/alcove.svg";
import vanFullyIntegrated from "../../images/categories/fully-integrated.svg";

const VehicleType = () => {
  return (
    <div className={styles.vehicleType}>
      <button className={styles.vehicleType__button}>
        <img src={vanIcon} alt="" className={styles.vehicleType__icon} />
        <p>Van</p>
      </button>
      <button className={styles.vehicleType__button}>
        <img src={alcoveIcon} alt="" className={styles.vehicleType__icon} />
        <p>Alcove</p>
      </button>
      <button className={styles.vehicleType__button}>
        <img
          src={vanFullyIntegrated}
          alt=""
          className={styles.vehicleType__icon}
        />
        <p>Fully-integrated</p>
      </button>
    </div>
  );
};

export default VehicleType;
