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
    const percentageChange = (prev, current) => {
        return current
            ? `${Math.ceil(((current - prev) / prev) * 100)}`
            : "Data Unavailable";
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
                // type="info"
            >
                {content.rsmKey && (
                    <div>
                        <h3>{content.name}</h3>
                        <p>
                            Beehives in 2007:{" "}
                            <span className={styles.number}>
                                {content["2007"]
                                    ? content["2007"]
                                    : "Data Unavailable"}
                            </span>
                        </p>
                        <p>
                            Beehives in 2019:{" "}
                            <span className={styles.number}>
                                {content["2019"]
                                    ? content["2019"]
                                    : "Data Unavailable"}
                            </span>
                        </p>
                        <p>
                            Percentage change :{" "}
                            <span
                                className={styles.number}
                                style={{
                                    color:
                                        percentageChange(
                                            content["2007"],
                                            content["2019"]
                                        ) >= 0
                                            ? "green"
                                            : "red",
                                }}
                            >
                                {percentageChange(
                                    content["2007"],
                                    content["2019"]
                                )}
                            </span>
                        </p>
                    </div>
                )}
            </ReactTooltip>
            <div className={styles.source}>
                <small>
                    Source: Food and Agriculture Organization of the United
                    Nations.
                </small>
            </div>
        </div>
    );
};

export default Landing;
