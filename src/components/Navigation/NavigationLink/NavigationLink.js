import React from "react";
import styles from "./NavigationLink.module.css";

const NavigationLink = ({
    link,
    handleSetMenuContent,
    handleSetIndex,
    index,
    menuOpen,
    menuDispatch,
}) => {
    return (
        <div
            className={styles.navItem}
            key={index}
            style={{ color: menuOpen && "#303030" }}
            onMouseEnter={() => {
                menuDispatch({ type: "open" });
                handleSetMenuContent(index);
                handleSetIndex(index);
            }}
        >
            <p>{link}</p>
        </div>
    );
};

export default NavigationLink;
