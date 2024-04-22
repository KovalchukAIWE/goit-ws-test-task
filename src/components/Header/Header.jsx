import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import logo from "../../images/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
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
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Header;
