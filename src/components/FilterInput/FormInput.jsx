import React from "react";
import styles from "./FormInput.module.css";

const FormInput = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default FormInput;
