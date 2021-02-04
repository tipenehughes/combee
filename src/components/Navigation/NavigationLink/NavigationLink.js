import React from "react";
import bee from "../../../assets/img/bee.svg";
import styles from "./NavigationLink.module.css";

const NavigationLink = ({
    link,
    isOpen,
    handleSetIsOpen,
    handleSetMenuContent,
    index,
}) => {
    return (
        <div
            className={styles.navItem}
            key={index}
            style={{ color: isOpen && "#303030" }}
            onMouseEnter={() => {
                handleSetIsOpen();
                handleSetMenuContent(index);
            }}
        >
            <p>{link}</p>
        </div>
    );
};

export default NavigationLink;
