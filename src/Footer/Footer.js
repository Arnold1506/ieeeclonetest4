import React from "react";
import styles from './Footer.module.css';


const Footer=()=>{
    return(
        <footer className={styles['main-footer']}>
            <div className={styles['footer-head']}>
                <div className={styles['left-footer']}>
                    <h1>Address</h1>
                    <div className={styles['footer-content']}>
                    Vidyalankar Institute of Technology, Vidyalankar campus, Vidyalankar College Marg, Wadala East, Mumbai, Maharashtra 400037.
                    </div>
                </div>
                <div className={styles['center-footer']}>
                <h1>Feedback</h1>
                <div className={styles['footer-content']}>
                Please send us your ideas, bug reports, suggestions! <br /> Any feedback would be appreciated.
                </div>
                </div>
                <div className={styles['right-footer']}>
                <h1>Contact</h1>
                <div className={styles['footer-content']}>
                Email: vidyalankarieee@gmail.com <br /> 
                Phone: +91 9082425941 <br />
                Phone: +91 8454094449 <br />
                </div>
                </div>
            </div>
            <div className={styles['footer-end']}>
                <ul className={styles['footer-list']}>
                    <li className={styles['footer-list__item']}>IEEE-VIT Website developed by Me!</li>
                    <li className={styles['footer-list__item']}>Code of Conduct</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;