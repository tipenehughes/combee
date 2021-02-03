import React from "react";
import { motion } from "framer-motion";

import item1 from "../../../assets/img/menuItems/Asset 8.svg";
import item2 from "../../../assets/img/menuItems/Asset 11.svg";
import item3 from "../../../assets/img/menuItems/Asset 1.svg";

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
        >
            <div className={styles.menuContainer}>
                <div className={styles.menuItem}>
                    <div className={styles.imageContainer}>
                        <img src={item1} alt="" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>So, whats the big deal?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ex quisquam adipisci deserunt iure totam dolore non minima? A, obcaecati?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo? Facere optio placeat accusamus adipisci.</p>
                    </div>
                    <p></p>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.imageContainer}>
                        <img src={item2} alt="" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Okay, why are bees so important?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, vero!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non delectus, maxime porro ab minima odio.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <p></p>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.imageContainer}>
                        <img src={item3} alt="" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>All right, whats this site about?</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis et eaque magni consequuntur? Sint eaque suscipit, eveniet ab temporibus optio.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <p></p>
                </div>
            </div>
        </motion.div>
    );
};

export default NavigationMenu;
