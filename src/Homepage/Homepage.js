import React from "react";
import styles from './Homepage.module.css';
import emblem from './ieeeemblem.jpg';
import college from './Vit.jpg';
import user from './user.png';

const Homepage=()=>{
    return(
        <main>
            <section className={styles['first-content']}>
                <div className={styles['header-content']}>
                <h1>IEEE-VIT</h1>
                <h2>Institute of Electrical and Electronic Engineering</h2>
                </div>
            </section>
            <section className={styles['mobile-first-content']}>
                <h1>IEEE-Vit</h1>
                <h2>Institute of Electrical and Electronic Engineering</h2>
            </section>
            <section className={styles['main-content']}>
                <h1>ABOUT IEEE</h1>
                <div className={styles['content-one']}>
                <div>
                <h2>MISSION</h2>
                <p>In this information age, where innovation has become a necessity, IEEE provides a platform to innovate for a better tomorrow. Comprising of more than 423,000 members in over 160 countries, along with highly cited publications, conferences, and technology standards, as well as professional and educational activities, IEEE inspires to pioneer in engineering, computing and technology information around the globe.</p>
                </div>
                <div className={styles.content}>
                    <img src={emblem} alt="IEEE Emblem" />
                </div>
                </div>

                
                <div className={styles['content-two']}>
                <div className={styles.content}>
                    <img src={college} alt="IEEE Emblem" />
                </div>
                <div>
                <h2>VISION</h2>
                <p>IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</p>
                </div>
                </div>


                <div className={styles['content-three']}>
                <div>
                <h2>About IEEE VIT Student Branch</h2>
                <p>IEEE-Vidyalankar Insitute of Technology Student Branch was formed in 2009. We started gaining traction in 2011 and have been consistent in conducting various events since then. IEEE-VIT bagged the Best Student Chapter Award in IEEE Bombay Section for the year 2014-15, and was one of the 11 nominees for the IEEE India Council Outstanding Student Chapter Award. Currently, IEEE VIT serves over 180 active student members and many senior members in the institute.</p>
                </div>
                </div>
            </section>
            <br />
            <section>
                <div className={styles.title}>TechWeb Heads</div>
                <div className={styles['label-container-twh']}>
                    <div className={styles['label']}>
                    <div className={styles['label-image']}>
                        <img src={user} alt="" />
                    </div>
                    <div className={styles['label-name']}>
                        <h1>Test Name</h1>
                    </div>
                    </div>
                    <div className={styles['label']}>
                    <div className={styles['label-image']}>
                        <img src={user} alt="" />
                    </div>
                    <div className={styles['label-name']}>
                        <h1>Test Name</h1>
                    </div>
                    </div>
                </div>
                <div className={styles.title}>WorkForce Members</div>
                <div className={styles['label-container-twh']}>
                    <div className={styles['label']}>
                    <div className={styles['label-image']}>
                        <img src={user} alt="" />
                    </div>
                    <div className={styles['label-name']}>
                        <h1>Test Name</h1>
                    </div>
                    </div>
                    <div className={styles['label']}>
                    <div className={styles['label-image']}>
                        <img src={user} alt="" />
                    </div>
                    <div className={styles['label-name']}>
                        <h1>Test Name</h1>
                    </div>
                    </div>
                    <div className={styles['label']}>
                    <div className={styles['label-image']}>
                        <img src={user} alt="" />
                    </div>
                    <div className={styles['label-name']}>
                        <h1>Test Name</h1>
                    </div>
                    </div>
                    <div className={styles['label']}>
                    <div className={styles['label-image']}>
                        <img src={user} alt="" />
                    </div>
                    <div className={styles['label-name']}>
                        <h1>Test Name</h1>
                    </div>
                    </div>
                    <div className={styles['label']}>
                    <div className={styles['label-image']}>
                        <img src={user} alt="" />
                    </div>
                    <div className={styles['label-name']}>
                        <h1>Test Name</h1>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Homepage;