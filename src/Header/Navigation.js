import React from "react";
import styles from './Navigation.module.css';

const Navigation=(props)=>{
    return(
        
        < nav className={styles["main-nav"]}>
            <ul className={styles["main-nav__items"]}>
                <li className={styles["main-nav__item"]}>
                    <a href="/">Home</a>
                </li>
                <li className={styles["main-nav__item"]}>
                    <a href="/">Events</a>
                </li>
                <li className={styles["main-nav__item"]}>
                    <a href="/">Iris</a>
                </li>
                <li className={styles["main-nav__item"]}>
                    <a href="/">Voyager</a>
                </li>
                <li className={styles["main-nav__item"]}>
                    <a href="/">About Us</a>
                </li>
                <li className={styles["main-nav__item"]}>
                    <a href="/">The Team</a>
                </li>
                <li className={styles["main-nav__item"]}>
                    <a href="/">Our Blog</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;