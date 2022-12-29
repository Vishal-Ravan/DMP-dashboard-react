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
      <div className="audiencegeography overview">
        <div className="source-top overview-top">
          <div className="source-top-left">
            <h4 className="h3first">Audience Demography </h4>
          </div>
          <div className="audience-segment-top-right right-align">
            <div className="overview-top-right-content">
              <p className="p1">Time Period</p>
              <Tabs>
                <TabList>
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
                </TabList>
              </Tabs>
            </div>
            <div className="overview-top-right-content">
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
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
        <div className="audiencegeography-wrapper-table multiple-tabs">
          <Tabs>
            <TabList>
              <Tab>City</Tab>
              <Tab>State</Tab>
              <Tab>Country </Tab>
              <Tab>Contient </Tab>
              <Tab>Sub Contient </Tab>
            </TabList>

            <TabPanel>
              <div className="audience-interest">
                <div className="audience-interest-wrpper">
                  <table>
                    <tr>
                      <th></th>
                      <th className="p1">City</th>
                      <th className="p1">Trend</th>
                      <th className="p1">Visitors</th>
                      <th className="p1">Avg. Time</th>

                      <th className="p1">PageViews</th>

                      <th></th>
                    </tr>
                    <tr>
                      <td className="num5">1.</td>
                      <td className="num4">New Delhi</td>
                      <td></td>
                      <td className="num4">269</td>
                      <td className="num4">0.80 min</td>
                      <td className="num5">53,767</td>
                      <td>
                        <input
                          type="range"
                          id="vol"
                          name="vol"
                          min="0"
                          max="50"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="num5">1.</td>
                      <td className="num4">New Delhi</td>
                      <td></td>
                      <td className="num4">269</td>
                      <td className="num4">0.80 min</td>
                      <td className="num5">53,767</td>
                      <td>
                        <input
                          type="range"
                          id="vol"
                          name="vol"
                          min="0"
                          max="50"
                        />
                      </td>
                    </tr><tr>
                      <td className="num5">1.</td>
                      <td className="num4">New Delhi</td>
                      <td></td>
                      <td className="num4">269</td>
                      <td className="num4">0.80 min</td>
                      <td className="num5">53,767</td>
                      <td>
                        <input
                          type="range"
                          id="vol"
                          name="vol"
                          min="0"
                          max="50"
                        />
                      </td>
                    </tr><tr>
                      <td className="num5">1.</td>
                      <td className="num4">New Delhi</td>
                      <td></td>
                      <td className="num4">269</td>
                      <td className="num4">0.80 min</td>
                      <td className="num5">53,767</td>
                      <td>
                        <input
                          type="range"
                          id="vol"
                          name="vol"
                          min="0"
                          max="50"
                        />
                      </td>
                    </tr><tr>
                      <td className="num5">1.</td>
                      <td className="num4">New Delhi</td>
                      <td></td>
                      <td className="num4">269</td>
                      <td className="num4">0.80 min</td>
                      <td className="num5">53,767</td>
                      <td>
                        <input
                          type="range"
                          id="vol"
                          name="vol"
                          min="0"
                          max="50"
                        />
                      </td>
                    </tr><tr>
                      <td className="num5">1.</td>
                      <td className="num4">New Delhi</td>
                      <td></td>
                      <td className="num4">269</td>
                      <td className="num4">0.80 min</td>
                      <td className="num5">53,767</td>
                      <td>
                        <input
                          type="range"
                          id="vol"
                          name="vol"
                          min="0"
                          max="50"
                        />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
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
