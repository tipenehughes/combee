import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Map from "../Map/Map";
import ReactTooltip from "react-tooltip";
import styles from "./Landing.module.css";

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState({
        rsmKey: "",
        name: "",
        2007: "",
        2017: "",
    });
    console.log(content);
    const [menuContent, setMenuContent] = useState("");

    const handleSetIsOpen = () => {
        !isOpen && setIsOpen(true);
    };
    const handleSetIsClosed = () => {
        isOpen && setIsOpen(false);
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
            <Map
                content={content}
                setTooltipContent={setContent}
                handleSetIsClosed={handleSetIsClosed}
            />
            <ReactTooltip
                className={styles.tooltip}
                data-html="true"
                multiline="true"
                type="info"
            >
                {content.rsmKey && (
                    <div>
                        <h3>{content.name}</h3>
                        <p>
                            Beehives in 2007:{" "}
                            {content["2007"]
                                ? content["2007"]
                                : "Data Unavailable"}
                        </p>
                        <p>
                            Beehives in 2017:{" "}
                            {content["2017"]
                                ? content["2017"]
                                : "Data Unavailable"}
                        </p>
                        <p>
                            Percentage Increase:{" "}
                            {Math.ceil(
                                ((content["2017"] - content["2007"]) /
                                    content["2007"]) *
                                    100
                            )}
                            %
                        </p>
                    </div>
                )}
            </ReactTooltip>
        </div>
    );
};

export default Landing;
