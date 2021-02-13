import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Filter from "../Filter/Filter";
import Chart from "../Charts/Chart";
import Map from "../Map/Map";
import ReactTooltip from "react-tooltip";
import styles from "./Landing.module.css";

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChart, setIsChart] = useState({
        open: false,
        chartType: "bar",
    });
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

    console.log(content);

    const [dateRange, setDateRange] = useState({
        start: 2007,
        end: 2019,
    });

    const [menuContent, setMenuContent] = useState("");

    const handleSetIsOpen = () => {
        !isOpen && setIsOpen(true);
    };
    const handleSetIsClosed = () => {
        isOpen && setIsOpen(false);
    };

    const handleSetIsChart = (e) => {
        setIsChart({ ...isChart, open: true, chartType: e.target.value });
    };

    const handleCloseChart = () => {
        setIsChart({ ...isChart, open: false });
    };

    const handleSetDateRangeStart = (e) => {
        setDateRange({ ...dateRange, start: e.target.value });
    };

    const handleSetDateRangeEnd = (e) => {
        setDateRange({ ...dateRange, end: e.target.value });
    };

    const handleSetMenuContent = (index) => {
        return setMenuContent(index);
    };
    const percentageChange = (prev, current) => {
        return current !== ""
            ? `${Math.ceil(((current - prev) / prev) * 100)}`
            : "Data Unavailable";
    };

    return (
        <div className={styles.landing}>
            {isChart.open && (
                <Chart
                    content={content}
                    isChart={isChart}
                    handleCloseChart={handleCloseChart}
                />
            )}
            <Navigation
                handleSetIsOpen={handleSetIsOpen}
                handleSetIsClosed={handleSetIsClosed}
                isOpen={isOpen}
                menuContent={menuContent}
                handleSetMenuContent={handleSetMenuContent}
            />
            <Filter
                handleSetDateRangeStart={handleSetDateRangeStart}
                handleSetDateRangeEnd={handleSetDateRangeEnd}
                handleSetIsChart={handleSetIsChart}
            />
            <Map
                content={content}
                setTooltipContent={setContent}
                isChart={isChart}
                handleSetIsClosed={handleSetIsClosed}
            />
            {!isChart.open && (
                <ReactTooltip
                    className={styles.tooltip}
                    data-html={true}
                    delayHide={500}
                >
                    {content.rsmKey && (
                        <div>
                            <h3>{content.name}</h3>
                            <p>
                                Beehives in {dateRange.start}:{" "}
                                <span className={styles.number}>
                                    {content[dateRange.start] !== ""
                                        ? content[dateRange.start]
                                        : "Data Unavailable"}
                                </span>
                            </p>
                            <p>
                                Beehives in {dateRange.end}:{" "}
                                <span className={styles.number}>
                                    {content[dateRange.end] !== ""
                                        ? content[dateRange.end]
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
                                                content[dateRange.start],
                                                content[dateRange.end]
                                            ) >= 0
                                                ? "green"
                                                : "red",
                                    }}
                                >
                                    {percentageChange(
                                        content[dateRange.start],
                                        content[dateRange.end]
                                    )}
                                </span>
                            </p>
                        </div>
                    )}
                </ReactTooltip>
            )}
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
