import React from "react";
import Navigation from "../Navigation/Navigation";
import Map from "../Map/Map";
import styles from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.landing}>
            <Navigation />
            <Map />
        </div>
    );
};

export default Landing;
