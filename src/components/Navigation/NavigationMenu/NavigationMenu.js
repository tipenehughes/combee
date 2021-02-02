import React from "react";
import styles from "./NavigationMenu.module.css";

const NavigationMenu = ({ handleSetIsOpen }) => {
    return <div className={styles.menu} onMouseLeave={handleSetIsOpen}></div>;
};

export default NavigationMenu;
