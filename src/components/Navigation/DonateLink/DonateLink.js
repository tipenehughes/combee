import React from "react";
import { motion } from "framer-motion";
import styles from "../NavigationMenu/NavigationMenu.module.css";

import tbc from "../../../assets/img/brandLogos/tbc.png";
import foe from "../../../assets/img/brandLogos/foe.png";
import pp from "../../../assets/img/brandLogos/pp.png";
import ohb from "../../../assets/img/brandLogos/ohb.png";

const DonateLink = ({ menuOpen }) => {
    const menuVariants = {
        hidden: {
            y: -200,
        },
        visible: {
            y: 0,
            transition: {
                duration: 0.3,
                type: "spring",
            },
        },
        exit: {
            y: -400,
            transition: {
                duration: 0.2,
                type: "ease",
            },
        },
    };
    return (
        <motion.div
            className={styles.menu}
            variants={menuVariants}
            initial={menuOpen ? false : "hidden"}
            animate="visible"
            exit="exit"
            key={"menu"}
        >
            <div className={styles.menuContainer}>
                <div className={styles.menuItem}>
                    <div className={styles.imageContainer}>
                        <img src={tbc} alt="" />
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.imageContainer}>
                        <img src={foe} alt="" />
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.imageContainer}>
                        <img src={pp} alt="" />
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.imageContainer}>
                        <img src={ohb} alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DonateLink;
