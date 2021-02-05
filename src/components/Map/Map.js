import React, { memo } from "react";
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps";
import data from "../../beedata.json";
import styles from "./Map.module.css";

const Map = ({ content, setTooltipContent, handleSetIsClosed }) => {
    const geoUrl = data;
    const mapWidth = 800;
    const mapHeight = 370;
    return (
        <div className={styles.map} onMouseOver={handleSetIsClosed}>
            <ComposableMap
                data-tip=""
                width={mapWidth}
                height={mapHeight}
                projectionConfig={{ scale: 150 }}
            >
                <ZoomableGroup
                    translateExtent={[
                        [0, 0],
                        [mapWidth, mapHeight],
                    ]}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        console.log(geo);
                                        const {
                                            NAME,
                                            BEE_2007,
                                            BEE_2017,                                           
                                        } = geo.properties;
                                        setTooltipContent({
                                            ...content,
                                            rsmKey: geo.rsmKey,
                                            name: NAME,
                                            "2007": BEE_2007,
                                            "2017": BEE_2017,

                                        });
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
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

export default Map;
