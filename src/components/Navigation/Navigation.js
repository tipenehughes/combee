import React, { useState } from "react";
import NavigationLink from "./NavigationLink/NavigationLink";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import { AnimatePresence } from "framer-motion";
import logo from "../../assets/img/logo.png";
import styles from "./Navigation.module.css";
import DonateLink from "./DonateLink/DonateLink";

const Navigation = ({
    menuContent,
    handleSetMenuContent,
    menuOpen,
    menuDispatch,
    donateOpen,
    handleSetDonateOpen,
    handleSetDonateClosed,
}) => {
    const [index, setIndex] = useState("");

    const handleSetIndex = (i) => {
        return setIndex(i);
    };
    const navLinks = ["Whats the buzz?", "How Can I Help?"];
    return (
        <>
            <div className={styles.navBar}>
                <div
                    className={styles.navFlexItem}
                    onClick={() => {
                        menuDispatch({ type: "close" });
                        handleSetDonateClosed();
                    }}
                >
                    <div
                        className={styles.logo}
                        style={{
                            color:
                                menuOpen || donateOpen ? "#303030" : undefined,
                        }}
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
                                donateOpen={donateOpen}
                                link={link}
                                handleSetMenuContent={handleSetMenuContent}
                                index={i}
                                handleSetIndex={handleSetIndex}
                                handleSetDonateClosed={handleSetDonateClosed}
                                key={i}
                            />
                        );
                    })}
                    <div
                        className={styles.donateBtn}
                        onMouseEnter={handleSetDonateOpen}
                    >
                        Donate
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {menuOpen && <NavigationMenu menuContent={menuContent} />}
                {donateOpen && <DonateLink menuOpen={menuOpen} />}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
