import React from "react";
import {
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
import styles from "./Barchart.module.css";

const Barchart = ({ content, isChart }) => {
    const data = [
        {
            name: "2007",
            Beehives: content[2007],
            amt: 2400,
        },
        {
            name: "2008",
            Beehives: content[2008],
            amt: 2210,
        },
        {
            name: "2009",
            Beehives: content[2009],
            amt: 2290,
        },
        {
            name: "2010",
            Beehives: content[2010],
            amt: 2000,
        },
        {
            name: "2011",
            Beehives: content[2011],
            amt: 2181,
        },
        {
            name: "2012",
            Beehives: content[2012],
            amt: 2500,
        },
        {
            name: "2013",
            Beehives: content[2013],
            amt: 2100,
        },
        {
            name: "2014",
            Beehives: content[2014],
            amt: 2100,
        },
        {
            name: "2015",
            Beehives: content[2015],
            amt: 2100,
        },
        {
            name: "2016",
            Beehives: content[2016],
            amt: 2100,
        },
        {
            name: "2017",
            Beehives: content[2017],
            amt: 2100,
        },
        {
            name: "2018",
            Beehives: content[2018],
            amt: 2100,
        },
        {
            name: "2019",
            Beehives: content[2019],
            amt: 2100,
        },
    ];

    return (
        <div className={styles.barchartContainer}>
            <h3>{content.name}</h3>
            {isChart.chartType === "scatter" && (
                <ScatterChart
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
                    <Scatter dataKey="Beehives" fill="#82ca9d" />
                </ScatterChart>
            )}
            {isChart.chartType === "bar" && (
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
                    <Bar dataKey="Beehives" fill="#82ca9d" />
                </BarChart>
            )}
            {isChart.chartType === "area" && (
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
                    <Area dataKey="Beehives" fill="#82ca9d" />
                </AreaChart>
            )}
        </div>
    );
};

export default Barchart;
