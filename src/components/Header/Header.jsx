import React, { Suspense } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button className={styles.header__logoBtn} onClick={handleButtonClick}>
          <img className={styles.header__logo} src={logo} alt="logo" />
        </button>
        <div className={styles.header__links}>
          <NavLink className={styles.header__link} to="/">
            Home
          </NavLink>
          <NavLink className={styles.header__link} to="/catalog">
            Catalog
          </NavLink>
          <NavLink className={styles.header__link} to="/favorites">
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
