import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Dropdown from "react-dropdown";

const AudienceGeography = () => {

    const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <div className="audiencegeography">
        <div className="audiencegeography-wrapper">
          <div className="source-top">
            <div className="source-top-left">
              <h4>Audience Demography </h4>
            </div>
            <div className="source-top-left-time">
              <p>Time Period</p>

              <div className="source-top-left-btn-drop">
                <div className="source-top-left-btn">
                  <button>Pulse</button>
                  <button>Historic</button>
                </div>
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="audiencegeography-wrapper-map">
          <ComposableMap>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </>
  );
};

export default AudienceGeography;
