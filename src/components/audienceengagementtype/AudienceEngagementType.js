import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import Dropdown from "react-dropdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AudienceEngagementWeekDay from "./AudienceEngagementWeekDay";

const AudienceEngagementType = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <div className="overview">
        <div className="source-top overview-top">
          <div className="source-top-left">
            <h4 className="h3first">Audience Engagement</h4>
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
        <div className="audienceengagementtype-tabs multiple-tabs">
          <Tabs>
            <TabList>
              <Tab>Frequency</Tab>
              <Tab>Recency</Tab>
              <Tab>Time Spent </Tab>
              <Tab>Page Depth </Tab>
            </TabList>
            <TabPanel>
              <div className="audience-engagement-types-table audience-interest">
                <h6 className="h6first">Frequency of Sessions</h6>
                <table>
                  <tr>
                    <th className="p1">Number of Sessions</th>
                    <th className="p1">Sessions</th>
                    <th></th>
                    <th className="p1">PageViews</th>
                    <th></th>
                    <th className="p1">Page Depth vs. Site Average</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                </table>
              </div>
              <div className="audience-engagement-types-table-bottom audience-segment-bottom">
                <div className="audience-segment-bottom-head">
                  <h4 className="h6first">
                    Top Engaging Client IDs :{" "}
                    <span className="p1"> Contributing 200+ Sessions</span>
                  </h4>
                  <div className="audience-segment-bottom-head-right right-align">
                    <p className="p4">Show Clients by:</p>
                    <Dropdown
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <table>
                  <tr>
                    <th></th>
                    <th className="p1">Client ID</th>
                    <th className="p1">Trend</th>
                    <th className="p1">Sessions</th>
                    <th className="p1">Total Time</th>
                    <th className="p1">Avg. Time</th>
                    <th className="p1">PageViews</th>
                  </tr>
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="audience-engagement-types-table audience-interest">
                <div className="h6first">Recency of Sessions</div>
                <table>
                  <tr>
                    <th className="p1">Days Since Last Sessions</th>
                    <th className="p1">Sessions</th>
                    <th></th>
                    <th className="p1">PageViews</th>
                    <th></th>
                    <th className="p1">Page Depth vs. Site Average</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr> <tr>
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr> <tr>
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr> <tr>
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr> <tr>
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr> <tr>
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr> <tr>
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr> <tr>
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr> <tr>
                    <td className="num5">1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                </table>
              </div>
              <div className="audience-engagement-types-table-bottom audience-segment-bottom">
                <div className="audience-segment-bottom-head">
                  <h4 className="h6first">
                    Top Engaging Client IDs :{" "}
                    <span className="p1"> Active 15 -30 days ago</span>
                  </h4>
                  <div className="audience-segment-bottom-head-right right-align">
                    <p className="p4">Show Clients by:</p>
                    <Dropdown
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <table>
                  <tr>
                    <th></th>
                    <th className="p1">Client ID</th>
                    <th className="p1">Trend</th>
                    <th className="p1">Sessions</th>
                    <th className="p1">Total Time</th>
                    <th className="p1">Avg. Time</th>
                    <th className="p1">PageViews</th>
                  </tr>
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="audience-engagement-types-table audience-interest">
                <div className="h6first">Time Spent</div>
                <table>
                  <tr>
                    <th className="p1">Session Durations</th>
                    <th className="p1">Sessions</th>
                    <th></th>
                    <th className="p1">PageViews</th>
                    <th></th>
                    <th className="p1">Page Depth vs. Site Average</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="num4">0-10 Seconds</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num4">0-10 Seconds</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr><tr>
                    <td className="num4">0-10 Seconds</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr><tr>
                    <td className="num4">0-10 Seconds</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr><tr>
                    <td className="num4">0-10 Seconds</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr><tr>
                    <td className="num4">0-10 Seconds</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                  </tr><tr>
                    <td className="num4">0-10 Seconds</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                </table>
              </div>
              <div className="audience-engagement-types-table-bottom audience-segment-bottom">
                <div className="audience-segment-bottom-head">
                  <h4 className="h6first">
                    Top Engaging Client IDs :{" "}
                    <span className="p1">
                      {" "}
                      : Spending 181-600 Seconds per Session
                    </span>
                  </h4>
                  <div className="audience-segment-bottom-head-right right-align">
                    <p className="p4">Show Clients by:</p>
                    <Dropdown
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <table>
                  <tr>
                    <th></th>
                    <th className="p1">Client ID</th>
                    <th className="p1">Trend</th>
                    <th className="p1">Sessions</th>
                    <th className="p1">Total Time</th>
                    <th className="p1">Avg. Time</th>
                    <th className="p1">PageViews</th>
                  </tr>
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="audience-engagement-types-table audience-interest">
                <div className="h6first">
                  Number of Pages Viewed per Sessions
                </div>
                <table>
                  <tr>
                    <th className="p1">Page Depth</th>
                    <th className="p1">Sessions</th>
                    <th></th>
                    <th className="p1">PageViews</th>
                    <th></th>
                    <th className="p1">Page Depth vs. Site Average</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td className="num5"> 1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5"> 1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5"> 1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5"> 1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5"> 1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5"> 1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                    <td className="num5"> 1</td>
                    <td className="num4">34,676</td>
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
                    <td className="num5">34,676</td>
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
                    <td className="num4">53,767</td>
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
                </table>
              </div>
              <div className="audience-engagement-types-table-bottom audience-segment-bottom">
                <div className="audience-segment-bottom-head">
                  <h4 className="h6first">
                    Top Engaging Client IDs :{" "}
                    <span className="p1"> : Viewing 10 pages per Session</span>
                  </h4>
                  <div className="audience-segment-bottom-head-right right-align">
                    <p className="p4">Show Clients by:</p>
                    <Dropdown
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <table>
                  <tr>
                    <th></th>
                    <th className="p1">Client ID</th>
                    <th className="p1">Trend</th>
                    <th className="p1">Sessions</th>
                    <th className="p1">Total Time</th>
                    <th className="p1">Avg. Time</th>
                    <th className="p1">PageViews</th>
                  </tr>
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>{" "}
                  <tr>
                    <td className="num5">1.</td>
                    <td className="num4">5454584854548545.54</td>
                    <td className="num4"> graph</td>
                    <td className="num4">398</td>
                    <td className="num4">2:51:34</td>
                    <td className="num4">0.82 min</td>
                    <td className="num5">34,578</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <AudienceEngagementWeekDay />
    </>
  );
};

export default AudienceEngagementType;
