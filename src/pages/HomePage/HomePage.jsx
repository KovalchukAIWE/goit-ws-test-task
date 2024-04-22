import React from "react";
import styles from "./HomePage.module.css";
import Button from "../../components/Button/Button";

const HomePgae = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>Your Camper</h1>
        <p className={styles.text}>
          Embark on your next adventure with Your Camper - your gateway to
          freedom on the open road. Whether you're a seasoned traveler or a
          weekend explorer, we provide a wide selection of camper cars to suit
          every journey and budget.
        </p>
        <Button text="Choose Now" />
      </div>
    </div>
  );
};

export default HomePgae;
