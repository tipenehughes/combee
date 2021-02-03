import React from "react";
import { motion } from "framer-motion";

import styles from "./NavigationMenu.module.css";

const NavigationMenu = ({ handleSetIsOpen }) => {
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
            initial="hidden"
            animate="visible"
            exit="exit"
            key={"menu"}
            onMouseLeave={handleSetIsOpen}
        ></motion.div>
    );
};

export default NavigationMenu;
