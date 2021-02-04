import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Map from "../Map/Map";
import ReactTooltip from "react-tooltip";
import styles from "./Landing.module.css";

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("");
    const [menuContent, setMenuContent] = useState("");
    console.log(menuContent);

    console.log(content);

    console.log(isOpen);

    const handleSetIsOpen = () => {
        return !isOpen && setIsOpen(true);
    };
    const handleSetIsClosed = (e) => {
        return isOpen && setIsOpen(false);
    };

    const handleSetMenuContent = (index) => {
        return setMenuContent(index);
    };

    return (
        <div className={styles.landing}>
            <Navigation
                handleSetIsOpen={handleSetIsOpen}
                handleSetIsClosed={handleSetIsClosed}
                isOpen={isOpen}
                menuContent={menuContent}
                handleSetMenuContent={handleSetMenuContent}
            />
            <Map setTooltipContent={setContent} />
            <ReactTooltip data-html={true} insecure={true} multiline={true}>
                {content}
            </ReactTooltip>
        </div>
    );
};

export default Landing;
