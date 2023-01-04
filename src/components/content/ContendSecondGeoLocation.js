import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import Dropdown from "react-dropdown";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const ContendSecondGeoLocation = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  const options = ["Cities", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <div className="audience">
        <h6 className="h6first">Location  driving Traffic To Articles</h6>
        <div className="geolocation-wrapper">
          <div className="geolocation-wrapper-left">
            <div className="geolocation-wrapper-top">
              <p className="p1">Top Location</p>
              <span className="table-dd1">
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </span>
            </div>
            <div className="geolocation-table">
              <table>
                <tr>
                  <th className="p1">City</th>
                  <th className="p1">PageView </th>

                  <th className="p1">Share</th>
                </tr>
                <tr>
                  <td className="num2">New Delhi</td>
                  <td className="num5">28%</td>
                  <td style={{ width: "200px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="70"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="num2">New Delhi</td>
                  <td className="num5">28%</td>
                  <td style={{ width: "200px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="70"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                </tr><tr>
                  <td className="num2">New Delhi</td>
                  <td className="num5">28%</td>
                  <td style={{ width: "200px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="70"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                </tr><tr>
                  <td className="num2">New Delhi</td>
                  <td className="num5">28%</td>
                  <td style={{ width: "200px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="70"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                </tr><tr>
                  <td className="num2">New Delhi</td>
                  <td className="num5">28%</td>
                  <td style={{ width: "200px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="70"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                </tr><tr>
                  <td className="num2">New Delhi</td>
                  <td className="num5">28%</td>
                  <td style={{ width: "200px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="70"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                </tr><tr>
                  <td className="num2">New Delhi</td>
                  <td className="num5">28%</td>
                  <td style={{ width: "200px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="70"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                </tr><tr>
                  <td className="num2">New Delhi</td>
                  <td className="num5">28%</td>
                  <td style={{ width: "200px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="70"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                </tr><tr>
                  <td className="num2">New Delhi</td>
                  <td className="num5">28%</td>
                  <td style={{ width: "200px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="70"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="geolocation-wrapper-right plr">
            <div className="geolocation-wrapper-top">
              <p className="p1">Map View</p>
              <span className="table-dd1">
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Global"
                />
              </span>
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

export default ContendSecondGeoLocation;
