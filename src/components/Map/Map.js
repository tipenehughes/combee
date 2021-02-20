import React, { useState, useEffect, memo } from "react";
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps";
import data from "../../beedata.json";
import styles from "./Map.module.css";

const Map = ({ content, setTooltipContent, menuDispatch, isChart }) => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const handleSetDimensions = () => {
        setDimensions({
            ...dimensions,
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    useEffect(() => {
        window.addEventListener("resize", handleSetDimensions);
        return () => window.removeEventListener("resize", handleSetDimensions);
    }, []);

    const geoUrl = data;

    const translate = () => {
        if (dimensions.width > 768) {
            return [
                [0, 0],
                [dimensions.width, dimensions.height],
            ];
        } else if (dimensions.width > 400) {
            return [
                [-85, 0],
                [dimensions.width + 85, dimensions.height],
            ];
        } else if (dimensions.width < 400) {
            return [
                [-280, 0],
                [dimensions.width + 280, dimensions.height],
            ];
        }
    };

    return (
        <div
            className={styles.mapContainer}
            onMouseOver={() => {
                menuDispatch({ type: "close" });
            }}
        >
            <ComposableMap
                className={styles.map}
                data-tip=""
                width={dimensions.width}
                height={dimensions.height}
                projection="geoMercator"
                projectionConfig={{
                    scale: dimensions.width <= 1024 ? 150 : 200,
                    rotation: [0, 0, 0],
                }}
            >
                <ZoomableGroup translateExtent={translate()}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const {
                                            NAME,
                                            BEE_2007,
                                            BEE_2008,
                                            BEE_2009,
                                            BEE_2010,
                                            BEE_2011,
                                            BEE_2012,
                                            BEE_2013,
                                            BEE_2014,
                                            BEE_2015,
                                            BEE_2016,
                                            BEE_2017,
                                            BEE_2018,
                                            BEE_2019,
                                        } = geo.properties;
                                        setTooltipContent({
                                            ...content,
                                            rsmKey: geo.rsmKey,
                                            name: NAME,
                                            2007: BEE_2007,
                                            2008: BEE_2008,
                                            2009: BEE_2009,
                                            2010: BEE_2010,
                                            2011: BEE_2011,
                                            2012: BEE_2012,
                                            2013: BEE_2013,
                                            2014: BEE_2014,
                                            2015: BEE_2015,
                                            2016: BEE_2016,
                                            2017: BEE_2017,
                                            2018: BEE_2018,
                                            2019: BEE_2019,
                                        });
                                    }}
                                    onMouseLeave={() => {
                                        !isChart.open && setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "#D6D6DA",
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none",
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default memo(Map);
