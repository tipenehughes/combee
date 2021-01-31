import React from "react";
import logo from "../../assets/img/logo.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.navFlexItem}>
                <div className={styles.logo}>
                    <h1>Combee</h1>
                </div>
                <div className={styles.logoImg}>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className={styles.navFlexItem}>
                <div className={styles.navItem}>
                    <p>Whats the buzz?</p>
                </div>
                <div className={styles.navItem}>
                    <p>How can I help?</p>
                </div>
                <div className={styles.navItem}>
                    <p>Donate</p>
                </div>
                <div className={styles.navItem}>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
