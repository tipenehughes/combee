import React from "react";
import styles from "./NavigationLink.module.css";

const NavigationLink = ({
    link,
    isOpen,
    handleSetIsOpen,
    handleSetMenuContent,
    handleSetIndex,
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
                handleSetIndex(index);
            }}
        >
            <p>{link}</p>
        </div>
    );
};

export default NavigationLink;
