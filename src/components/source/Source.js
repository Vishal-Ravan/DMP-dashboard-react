import React from "react";
import Dropdown from "react-dropdown";
import { Tabs, TabList, Tab } from "react-tabs";
import { PieChart, Pie, Cell } from "recharts";

const Source = () => {
  const datas = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <div className="overview">
        <div className="source-top overview-top">
          <div className="source-top-left">
            <h4 className="h3first">Source</h4>
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
        <div className="audience-segment-bottom">
          <div className="audience-segment-bottom-head">
            <h4 className="h6first">Traffic Source</h4>
            <div className="audience-segment-bottom-head-right right-align">
              <p className="p4">Source Metric:</p>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div className="source-bottom-first">
            <div className="source-bottom-first-left dtl">
              <div className="source-bottom-first-left-chart">
                <PieChart width={220} height={200}>
                  <Pie
                    data={datas}
                    cx={100}
                    cy={90}
                    innerRadius={50}
                    outerRadius={90}
                    fill="#8884d8"
                    // paddingAngle={0}
                    dataKey="value"
                  >
                    {datas.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </div>
            <div className="source-bottom-first-right audience-interest">
              <table>
                <tr>
                  <th className="p1">Channels</th>
                  <th className="p1">PageViews</th>
                  <th></th>
                  <th className="p1">Links</th>
                  <th className="p1">Visitors</th>
                  <th className="p1">Avg Time</th>
                  <th className="p1">Total Time Spent</th>
                </tr>
                <tr>
                  <td className="num4">Direct</td>
                  <td className="num5">6,54,545</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                  <td className="num4">269</td>
                  <td className="num4">34,576</td>
                  <td className="num4">2:56</td>
                  <td className="num4">34,576</td>
                </tr>
                <tr>
                  <td className="num4">Direct</td>
                  <td className="num5">6,54,545</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                  <td className="num4">269</td>
                  <td className="num4">34,576</td>
                  <td className="num4">2:56</td>
                  <td className="num4">34,576</td>
                </tr>{" "}
                <tr>
                  <td className="num4">Direct</td>
                  <td className="num5">6,54,545</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                  <td className="num4">269</td>
                  <td className="num4">34,576</td>
                  <td className="num4">2:56</td>
                  <td className="num4">34,576</td>
                </tr>{" "}
                <tr>
                  <td className="num4">Direct</td>
                  <td className="num5">6,54,545</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                  <td className="num4">269</td>
                  <td className="num4">34,576</td>
                  <td className="num4">2:56</td>
                  <td className="num4">34,576</td>
                </tr>{" "}
                <tr>
                  <td className="num4">Direct</td>
                  <td className="num5">6,54,545</td>
                  <td>
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </td>
                  <td className="num4">269</td>
                  <td className="num4">34,576</td>
                  <td className="num4">2:56</td>
                  <td className="num4">34,576</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="audience-segment-bottom">
          <h6 className="h6first">Top Refferal Source</h6>
          <div className="audience-interest-wrpper">
            <table>
              <tr>
                <th></th>
                <th className="p1">Domain</th>
                <th className="p1">Channel</th>

                <th className="p1">Avg Time</th>
                <th className="p1">Visitors</th>
                <th className="p1">Links</th>
                <th className="p1">Page Views</th>
                <th></th>
              </tr>
              <tr>
                <td className="num5">1.</td>
                <td className="num4">sub.domain.com</td>
                <td className="num4">internal</td>
                <td className="num4">456</td>
                <td className="num4">34,578</td>
                <td className="num4">34,578</td>
                <td className="num5">34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td className="num5">1.</td>
                <td className="num4">sub.domain.com</td>
                <td className="num4">internal</td>
                <td className="num4">456</td>
                <td className="num4">34,578</td>
                <td className="num4">34,578</td>
                <td className="num5">34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td className="num5">1.</td>
                <td className="num4">sub.domain.com</td>
                <td className="num4">internal</td>
                <td className="num4">456</td>
                <td className="num4">34,578</td>
                <td className="num4">34,578</td>
                <td className="num5">34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td className="num5">1.</td>
                <td className="num4">sub.domain.com</td>
                <td className="num4">internal</td>
                <td className="num4">456</td>
                <td className="num4">34,578</td>
                <td className="num4">34,578</td>
                <td className="num5">34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td className="num5">1.</td>
                <td className="num4">sub.domain.com</td>
                <td className="num4">internal</td>
                <td className="num4">456</td>
                <td className="num4">34,578</td>
                <td className="num4">34,578</td>
                <td className="num5">34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td className="num5">1.</td>
                <td className="num4">sub.domain.com</td>
                <td className="num4">internal</td>
                <td className="num4">456</td>
                <td className="num4">34,578</td>
                <td className="num4">34,578</td>
                <td className="num5">34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Source;
