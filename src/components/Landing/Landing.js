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
        2008: "",
        2009: "",
        2010: "",
        2011: "",
        2012: "",
        2013: "",
        2014: "",
        2015: "",
        2016: "",
        2017: "",
        2018: "",
        2019: "",
    });
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
        return current !== "Data Unavailable"
            ? `${Math.ceil(((current - prev) / prev) * 100)}`
            : "Data Unavailable";
    };

    const dataDisplay = () => {
        if (content[2019]) {
            return content[2019];
        } else if (!content[2019] && content[2018]) {
            return content[2018];
        } else if (!content[2018] && content[2017]) {
            return content[2017];
        } else if (!content[2017] && content[2016]) {
            return content[2016];
        } else {
            return "Data Unavailable";
        }
    };

    const dateDisplay = () => {
        if (content[2019]) {
            return "2019";
        } else if (!content[2019] && content[2018]) {
            return "2018";
        } else if (!content[2018] && content[2017]) {
            return "2017";
        } else if (!content[2017] && content[2016]) {
            return "2016";
        } else {
            return "2019";
        }
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
                data-html={true}
                multiline={true}
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
                            Beehives in {dateDisplay()}:{" "}
                            <span className={styles.number}>
                                {dataDisplay()}
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
                                            dataDisplay()
                                        ) >= 0
                                            ? "green"
                                            : "red",
                                }}
                            >
                                {percentageChange(
                                    content["2007"],
                                    dataDisplay()
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
