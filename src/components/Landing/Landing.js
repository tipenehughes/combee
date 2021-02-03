import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import NavigationMenu from "../Navigation/NavigationMenu/NavigationMenu";
import Map from "../Map/Map";
import { AnimatePresence } from "framer-motion";
import ReactTooltip from "react-tooltip";
import styles from "./Landing.module.css";

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");

    const handleSetIsOpen = (e) => {
        !isOpen ? setIsOpen(true) : setIsOpen(false);
        
    };

    return (
        <div className={styles.landing}>
            <Navigation handleSetIsOpen={handleSetIsOpen} isOpen={isOpen} />
            <AnimatePresence>
                {isOpen && <NavigationMenu handleSetIsOpen={handleSetIsOpen} />}
            </AnimatePresence>
            <Map setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
};

export default Landing;
