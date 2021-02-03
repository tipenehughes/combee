import React from "react";
import bee from "../../../assets/img/bee.svg";
import styles from "./NavigationLink.module.css";

const NavigationItem = ({ link, isOpen, handleSetIsOpen, key }) => {
    return (
        <div
            className={styles.navItem}
            key={key}
            style={{ color: isOpen && "#303030" }}
            onMouseOver={!isOpen ? handleSetIsOpen : undefined}
        >
            <div className={styles.bee}>
                <img src={bee} alt="" />
            </div>
            <p>{link}</p>
        </div>
    );
};

export default NavigationItem;
