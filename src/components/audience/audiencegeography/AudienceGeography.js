import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Dropdown from "react-dropdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
        <div className="audiencegeography-wrapper-table">
          <Tabs>
            <TabList>
              <Tab>City</Tab>
              <Tab>State</Tab>
              <Tab>Country </Tab>
              <Tab>Contient </Tab>
              <Tab>Sub Contient </Tab>
            </TabList>

            <TabPanel>
              <table>
                <tr>
                  <th>Sr No.</th>
                  <th>City</th>
                  <th>Trend</th>
                  <th>Visitors</th>
                  <th>Avg. Time</th>

                  <th>PageViews</th>

                  <th></th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>New Delhi</td>
                  <td></td>
                  <td>269</td>
                  <td>0.80min</td>
                  <td>53,767</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>New Delhi</td>
                  <td></td>
                  <td>269</td>
                  <td>0.80min</td>
                  <td>53,767</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr><tr>
                  <td>1</td>
                  <td>New Delhi</td>
                  <td></td>
                  <td>269</td>
                  <td>0.80min</td>
                  <td>53,767</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr><tr>
                  <td>1</td>
                  <td>New Delhi</td>
                  <td></td>
                  <td>269</td>
                  <td>0.80min</td>
                  <td>53,767</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                </tr>
              </table>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AudienceGeography;
