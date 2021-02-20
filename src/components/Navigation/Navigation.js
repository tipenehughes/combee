import React, { useState } from "react";
import NavigationLink from "./NavigationLink/NavigationLink";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import { AnimatePresence } from "framer-motion";
import logo from "../../assets/img/logo.png";
import styles from "./Navigation.module.css";

const Navigation = ({
    menuContent,
    handleSetMenuContent,
    menuOpen,
    menuDispatch,
}) => {
    const [index, setIndex] = useState("");

    const handleSetIndex = (i) => {
        return setIndex(i);
    };
    const navLinks = ["Whats the buzz?", "How Can I Help?", "Donate"];
    return (
        <>
            <div className={styles.navBar}>
                <div
                    className={styles.navFlexItem}
                    onClick={() => {
                        menuDispatch({ type: "close" });
                    }}
                >
                    <div
                        className={styles.logo}
                        style={{ color: menuOpen && "#303030" }}
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
                                menuDispatch={menuDispatch}
                                menuOpen={menuOpen}
                                link={link}
                                handleSetMenuContent={handleSetMenuContent}
                                index={i}
                                handleSetIndex={handleSetIndex}
                                key={i}
                            />
                        );
                    })}
                </div>
            </div>
            <AnimatePresence>
                {menuOpen && <NavigationMenu menuContent={menuContent} />}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
