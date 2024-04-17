import React from "react";
import styles from "./Category.module.css";
import showerIcon from "../../images/categories/shower.svg";
import kitchenIcon from "../../images/categories/kitchen.svg";
import airConditionerIcon from "../../images/categories/airConditioner.svg";
import adultsIcon from "../../images/categories/adults.svg";
import bedsIcon from "../../images/categories/beds.svg";
import tvIcon from "../../images/categories/tv.svg";
import cdIcon from "../../images/categories/cd.svg";
import radioIcon from "../../images/categories/radio.svg";
import toiletIcon from "../../images/categories/toilet.svg";
import freezerIcon from "../../images/categories/freezer.svg";
import hobIcon from "../../images/categories/hob.svg";
import microwaveIcon from "../../images/categories/microwave.svg";
import gasIcon from "../../images/categories/gas.svg";
import waterIcon from "../../images/categories/water.svg";
import bathroomIcon from "../../images/categories/shower.svg";

const iconPaths = {
  shower: showerIcon,
  kitchen: kitchenIcon,
  airConditioner: airConditionerIcon,
  adults: adultsIcon,
  beds: bedsIcon,
  TV: tvIcon,
  CD: cdIcon,
  radio: radioIcon,
  toilet: toiletIcon,
  freezer: freezerIcon,
  hob: hobIcon,
  microwave: microwaveIcon,
  gas: gasIcon,
  water: waterIcon,
  bathroom: bathroomIcon,
};

const Category = ({ details }) => {
  return (
    details &&
    Object.entries(details).map(([key, value]) => {
      if (value > 1) {
        return (
          <div key={key} className={styles.category}>
            <img
              src={iconPaths[key]}
              alt={key}
              className={styles.categoryIcon}
            />
            <span className={styles.categoryValue}>{value}</span>
            {key}
          </div>
        );
      } else if (value === 1) {
        return (
          <div key={key} className={styles.category}>
            <img
              src={iconPaths[key]}
              alt={key}
              className={styles.categoryIcon}
            />
            {key}
          </div>
        );
      }
      return null;
    })
  );
};
export default Category;
