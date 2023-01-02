import React from "react";
import Dropdown from "react-dropdown";
import { Tabs, TabList, Tab } from "react-tabs";
import { Chart } from "react-google-charts";
import ProgressBar from "@ramonak/react-progress-bar";

const Source = () => {
  const pieOptions = {
    is3D: true,

    slices: [
      {
        color: "#00a3e0",
      },
      {
        color: "F16A21",
      },
      {
        color: "#e9a227",
      },
      { color: "#198754" },
    ],
    legend: {
      position: "center",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      left: 3,
      top: 0,
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
    },
    fontName: "Roboto",
    fontSize: 12,
    color: "000",
  };

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
                <Chart
                  chartType="PieChart"
                  data={[
                    ["Item", "Numbers"],
                    ["Item 1", 5000],
                    ["Item 2", 20000],
                    ["Item 3", 6000],
                    ["Item 4", 5000],
                  ]}
                  options={pieOptions}
                  graph_id="PieChart"
                  width={"100%"}
                  height={"280px"}
                  legend_toggle
                />
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
                  <td style={{ width: "150px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="8"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                  <td className="num4">269</td>
                  <td className="num4">34,576</td>
                  <td className="num4">2:56</td>
                  <td className="num4">34,576</td>
                </tr>
                <tr>
                  <td className="num4">Direct</td>
                  <td className="num5">6,54,545</td>
                  <td style={{ width: "150px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="48"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                  <td className="num4">269</td>
                  <td className="num4">34,576</td>
                  <td className="num4">2:56</td>
                  <td className="num4">34,576</td>
                </tr>{" "}
                <tr>
                  <td className="num4">Direct</td>
                  <td className="num5">6,54,545</td>
                  <td style={{ width: "150px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="48"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                  <td className="num4">269</td>
                  <td className="num4">34,576</td>
                  <td className="num4">2:56</td>
                  <td className="num4">34,576</td>
                </tr>{" "}
                <tr>
                  <td className="num4">Direct</td>
                  <td className="num5">6,54,545</td>
                  <td style={{ width: "150px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="48"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
                  </td>
                  <td className="num4">269</td>
                  <td className="num4">34,576</td>
                  <td className="num4">2:56</td>
                  <td className="num4">34,576</td>
                </tr>{" "}
                <tr>
                  <td className="num4">Direct</td>
                  <td className="num5">6,54,545</td>
                  <td style={{ width: "150px", paddingLeft: "0" }}>
                    <ProgressBar
                      completed="48"
                      baseBgColor="#fff"
                      bgColor="#666"
                      height="30px"
                      className="progress-bar"
                      borderRadius={0}
                    />
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
                <td style={{ width: "200px", paddingLeft: "0" }}>
                  <ProgressBar
                    completed="48"
                    baseBgColor="#fff"
                    bgColor="#666"
                    height="30px"
                    className="progress-bar"
                    borderRadius={0}
                  />
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
                <td style={{ width: "200px", paddingLeft: "0" }}>
                  <ProgressBar
                    completed="48"
                    baseBgColor="#fff"
                    bgColor="#666"
                    height="30px"
                    className="progress-bar"
                    borderRadius={0}
                  />
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
                <td style={{ width: "200px", paddingLeft: "0" }}>
                  <ProgressBar
                    completed="18"
                    baseBgColor="#fff"
                    bgColor="#666"
                    height="30px"
                    className="progress-bar"
                    borderRadius={0}
                  />
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
                <td style={{ width: "200px", paddingLeft: "0" }}>
                  <ProgressBar
                    completed="88"
                    baseBgColor="#fff"
                    bgColor="#666"
                    height="30px"
                    className="progress-bar"
                    borderRadius={0}
                  />
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
                <td style={{ width: "200px", paddingLeft: "0" }}>
                  <ProgressBar
                    completed="48"
                    baseBgColor="#fff"
                    bgColor="#666"
                    height="30px"
                    className="progress-bar"
                    borderRadius={0}
                  />
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
                <td style={{ width: "200px", paddingLeft: "0" }}>
                  <ProgressBar
                    completed="78"
                    baseBgColor="#fff"
                    bgColor="#666"
                    height="30px"
                    className="progress-bar"
                    borderRadius={0}
                  />
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
                <td style={{ width: "200px", paddingLeft: "0" }}>
                  <ProgressBar
                    completed="48"
                    baseBgColor="#fff"
                    bgColor="#666"
                    height="30px"
                    className="progress-bar"
                    borderRadius={0}
                  />
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
                <td style={{ width: "200px", paddingLeft: "0" }}>
                  <ProgressBar
                    completed="38"
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
      </div>
    </>
  );
};

export default Source;
