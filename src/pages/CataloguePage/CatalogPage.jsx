import React from "react";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import FilterEquipment from "../../components/FilterEquipment/FilterEquipment";
import VehicleType from "../../components/VehicleType/VehicleType";
import Button from "../../components/Button/Button";
import FilterInput from "../../components/FormInput/FilterInput";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.catalogPage}>
        <div className={styles.catalogPage__filter}>
          <div className={styles.catalogPage__filterInput}>
            <p className={styles.catalogPage__filterInputLabel}>Location</p>
            <FilterInput />
          </div>
          <div className={styles.catalogPage__filterEquipment}>
            <p className={styles.catalogPage__filterTitle}>Vehicle equipment</p>
            <FilterEquipment />
          </div>
          <div className={styles.catalogPage__filterVehicleType}>
            <p className={styles.catalogPage__filterTitle}>Vehicle type</p>
            <VehicleType />
          </div>
          <Button text="Search" />
        </div>
        <div className={styles.catalogPage__list}>
          <AdvertsList />;
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
