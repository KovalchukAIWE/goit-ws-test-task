import React from "react";
import styles from "./FilterInput.module.css";

const FilterInput = ({ type, name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={"Location"}
      value={value}
      onChange={onChange}
      className={styles.filterInput}
    />
  );
};

export default FilterInput;
