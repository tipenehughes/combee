import React from "react";
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps";
import styles from "./Map.module.css";

const Map = () => {
    const geoUrl =
        "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
    const mapWidth = 800;
    const mapHeight = 370;
    return (
        <div className={styles.map}>
            <ComposableMap
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
