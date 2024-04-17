import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Header.module.css";
import Loader from "../Loader/Loader";

const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <NavLink className={styles.headerLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.headerLink} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={styles.headerLink} to="/favorites">
          Favorites
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Header;
