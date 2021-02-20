import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    ScatterChart,
    Scatter,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Chart.module.css";

const Chart = ({ content, isChart, handleCloseChart }) => {
    const data = [
        {
            name: "2007",
            Beehives: content[2007],
        },
        {
            name: "2008",
            Beehives: content[2008],
        },
        {
            name: "2009",
            Beehives: content[2009],
        },
        {
            name: "2010",
            Beehives: content[2010],
        },
        {
            name: "2011",
            Beehives: content[2011],
        },
        {
            name: "2012",
            Beehives: content[2012],
        },
        {
            name: "2013",
            Beehives: content[2013],
            "YoY Change": content[2013] - content[2012],
        },
        {
            name: "2014",
            Beehives: content[2014],
        },
        {
            name: "2015",
            Beehives: content[2015],
        },
        {
            name: "2016",
            Beehives: content[2016],
        },
        {
            name: "2017",
            Beehives: content[2017],
        },
        {
            name: "2018",
            Beehives: content[2018],
        },
        {
            name: "2019",
            Beehives: content[2019],
        },
    ];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                key={"chart"}
                transition={{ duration: 0.5 }}
                className={styles.chartContainer}
            >
                {!content.name && (
                    <div className={styles.welcomeContainer}>
                        <h2>Choose a country to get started!</h2>
                    </div>
                )}
                {content.name && !content[2007] && (
                    <div className={styles.welcomeContainer}>
                        <h2>Sorry, it looks like this data is unavailable..</h2>
                    </div>
                )}
                <h2 className={styles.chartCountry}>{content.name}</h2>
                {isChart.chartType === "scatter" && (
                    <ResponsiveContainer width="95%" height="95%">
                        <ScatterChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Scatter dataKey="Beehives" fill="#2861ffd5" />
                        </ScatterChart>
                    </ResponsiveContainer>
                )}
                {isChart.chartType === "bar" && (
                    <ResponsiveContainer width="95%" height="95%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Beehives" fill="#2861ffd5" />
                        </BarChart>
                    </ResponsiveContainer>
                )}
                {isChart.chartType === "area" && (
                    <ResponsiveContainer width="95%" height="95%">
                        <AreaChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area dataKey="Beehives" fill="#2861ffd5" />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
                <div className={styles.close}>
                    <AiFillCloseCircle onClick={handleCloseChart} />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Chart;
