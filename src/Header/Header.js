import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "./IEEELOGO.png";
import Navigation from "./Navigation";

const Header = () => {
    const [chk,setchk]=useState('false');
    const toggleBtnHandler=()=>{
        if(chk){
            setchk(false);
        }else{
            setchk(true);
        }
    }
  return (
    <header className={styles["main-header"]}>
      <div className={styles["header-btn"]}>
        <div className={styles.logo}>
          <img src={logo} alt="IEEE" />
        </div>
        <button className={styles["toggle-button"]} onClick={toggleBtnHandler}>
          <span className={styles["toggle-button__bar"]}></span>
          <span className={styles["toggle-button__bar"]}></span>
          <span className={styles["toggle-button__bar"]}></span>
        </button>
      </div>
      <Navigation chk={chk}/>
    </header>
  );
};

export default Header;
