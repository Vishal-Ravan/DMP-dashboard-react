import React from "react";
import Dropdown from "react-dropdown";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GeoLocation = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <div className="geolocation">
        <div className="geolocation-wrapper">
          <div className="geolocation-wrapper-left">
            <h6>Location</h6>
            <div className="geolocation-wrapper-top">
              <p>Top Location</p>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
            <div className="geolocation-table">
              <table>
                <tr>
                  <th>City</th>
                  <th>PageView Share</th>

                  <th></th>
                </tr>
                <tr>
                  <td>New Delhi</td>
                  <td>28%</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr>
                <tr>
                  <td>New Delhi</td>
                  <td>28%</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr>
                <tr>
                  <td>New Delhi</td>
                  <td>28%</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr>
                <tr>
                  <td>New Delhi</td>
                  <td>28%</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr>
                <tr>
                  <td>New Delhi</td>
                  <td>28%</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr>
                <tr>
                  <td>New Delhi</td>
                  <td>28%</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr>
                <tr>
                  <td>New Delhi</td>
                  <td>28%</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="geolocation-wrapper-right">
            <h6>Location</h6>
            <div className="geolocation-wrapper-top">
              <p>Map View</p>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Global"
              />
            </div>
            <div className="geolocation-map">
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
        </div>
      </div>
    </>
  );
};

export default GeoLocation;
