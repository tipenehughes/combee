import React from "react";
import NavigationLink from "./NavigationLink/NavigationLink";
import logo from "../../assets/img/logo.png";
import styles from "./Navigation.module.css";

const Navigation = ({ handleSetIsOpen, isOpen }) => {
    const navLinks = [
        "Whats the buzz?",
        "How Can I Help?",
        "Donate",
        "Contact",
    ];
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
                {navLinks.map((link, i) => {
                    return (
                        <NavigationLink
                            handleSetIsOpen={handleSetIsOpen}
                            isOpen={isOpen}
                            link={link}
                            key={i}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;
