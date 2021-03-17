import React from "react";
import styles from "./NavigationLink.module.css";

const NavigationLink = ({
    link,
    handleSetMenuContent,
    handleSetIndex,
    index,
    menuOpen,
    donateOpen,
    menuDispatch,
    handleSetDonateClosed,
}) => {
    return (
        <div
            className={styles.navItem}
            key={index}
            style={{ color: menuOpen || donateOpen ? "#303030" : undefined }}
            onMouseEnter={() => {
                menuDispatch({ type: "open" });
                handleSetMenuContent(index);
                handleSetIndex(index);
                handleSetDonateClosed();
            }}
        >
            <p>{link}</p>
        </div>
    );
};

export default NavigationLink;
