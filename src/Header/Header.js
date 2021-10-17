import React from "react";
import styles from "./Header.module.css";
import logo from "./IEEELOGO.png";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={styles["main-header"]}>
      <div className={styles["header-btn"]}>
        <div className={styles.logo}>
          <img src={logo} alt="IEEE" />
        </div>
        <button className={styles["toggle-button"]}>
          <span className={styles["toggle-button__bar"]}></span>
          <span className={styles["toggle-button__bar"]}></span>
          <span className={styles["toggle-button__bar"]}></span>
        </button>
      </div>
      <Navigation/>
    </header>
  );
};

export default Header;
