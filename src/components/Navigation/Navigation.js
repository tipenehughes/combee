import React from "react";
import logo from "../../assets/img/logo.png";
import styles from "./Navigation.module.css";

const Navigation = ({ handleSetIsOpen, isOpen }) => {
    return (
        <div className={styles.navBar}>
            <div className={styles.navFlexItem}>
                <div
                    className={styles.logo}
                    style={{ color: isOpen && "#303030" }}
                >
                    <h1>Combee</h1>
                </div>
                <div className={styles.logoImg}>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className={styles.navFlexItem}>
                <div
                    className={styles.navItem}
                    style={{ color: isOpen && "#303030" }}
                    onMouseOver={!isOpen && handleSetIsOpen}
                >
                    <p>Whats the buzz?</p>
                </div>
                <div
                    className={styles.navItem}
                    style={{ color: isOpen && "#303030" }}
                    onMouseOver={!isOpen && handleSetIsOpen}
                >
                    <p>How can I help?</p>
                </div>
                <div
                    className={styles.navItem}
                    style={{ color: isOpen && "#303030" }}
                    onMouseOver={!isOpen && handleSetIsOpen}
                >
                    <p>Donate</p>
                </div>
                <div
                    className={styles.navItem}
                    style={{ color: isOpen && "#303030" }}
                    onMouseOver={!isOpen && handleSetIsOpen}
                >
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
