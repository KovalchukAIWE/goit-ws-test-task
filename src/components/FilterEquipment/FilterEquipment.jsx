import React from "react";
import styles from "./FilterEquipment.module.css";

import kitchenIcon from "../../images/categories/kitchen.svg";
import airConditionerIcon from "../../images/categories/airConditioner.svg";
import tvIcon from "../../images/categories/tv.svg";
import microwaveIcon from "../../images/categories/microwave.svg";
import bathroomIcon from "../../images/categories/shower.svg";

const FilterEquipment = () => {
  return (
    <div className={styles.filterEquipment}>
      <button className={styles.filterEquipment__button}>
        <img
          src={airConditionerIcon}
          alt=""
          className={styles.filterEquipment__icon}
        />
        <p>AC</p>
      </button>
      <button className={styles.filterEquipment__button}>
        <img src={tvIcon} alt="" className={styles.filterEquipment__icon} />
        <p>TV</p>
      </button>
      <button className={styles.filterEquipment__button}>
        <img
          src={bathroomIcon}
          alt=""
          className={styles.filterEquipment__icon}
        />
        <p>shower/WC</p>
      </button>
      <button className={styles.filterEquipment__button}>
        <img
          src={kitchenIcon}
          alt=""
          className={styles.filterEquipment__icon}
        />
        <p>kitchen</p>
      </button>
      <button className={styles.filterEquipment__button}>
        <img
          src={microwaveIcon}
          alt=""
          className={styles.filterEquipment__icon}
        />
        <p>microwave</p>
      </button>
    </div>
  );
};

export default FilterEquipment;
