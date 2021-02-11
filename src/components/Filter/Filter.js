import React from "react";
import styles from "./Filter.module.css";

const Filter = ({
    handleSetDateRangeStart,
    handleSetDateRangeEnd,
    handleSetIsChart,
    handleCloseChart,
}) => {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.form}>
                <form action="">
                    <label for="start" className={styles.label}>
                        Start Year:{" "}
                    </label>
                    <select
                        name="start"
                        id="start"
                        className={styles.select}
                        onChange={handleSetDateRangeStart}
                    >
                        <option value={2007} selected>
                            2007
                        </option>
                        <option value={2008}>2008</option>
                        <option value={2009}>2009</option>
                        <option value={2010}>2010</option>
                        <option value={2011}>2011</option>
                        <option value={2012}>2012</option>
                        <option value={2013}>2013</option>
                        <option value={2014}>2014</option>
                        <option value={2015}>2015</option>
                        <option value={2016}>2016</option>
                        <option value={2017}>2017</option>
                        <option value={2018}>2018</option>
                        <option value={2019}>2019</option>
                    </select>
                    <label for="end" className={styles.label}>
                        End Year:{" "}
                    </label>
                    <select
                        name="end"
                        id="end"
                        className={styles.select}
                        onChange={handleSetDateRangeEnd}
                    >
                        <option value={2007}>2007</option>
                        <option value={2008}>2008</option>
                        <option value={2009}>2009</option>
                        <option value={2010}>2010</option>
                        <option value={2011}>2011</option>
                        <option value={2012}>2012</option>
                        <option value={2013}>2013</option>
                        <option value={2014}>2014</option>
                        <option value={2015}>2015</option>
                        <option value={2016}>2016</option>
                        <option value={2017}>2017</option>
                        <option value={2018}>2018</option>
                        <option value={2019} selected>
                            2019
                        </option>
                    </select>
                </form>
            </div>
            <div>
                <h3>Visualize</h3>
                <button onClick={handleSetIsChart} value={"bar"}>
                    Bar Chart
                </button>
                <button onClick={handleSetIsChart} value={"scatter"}>
                    Scatter Chart
                </button>
                <button onClick={handleSetIsChart} value={"area"}>
                    Area Chart
                </button>
                <button onClick={handleCloseChart}>Close</button>
            </div>
        </div>
    );
};

export default Filter;
