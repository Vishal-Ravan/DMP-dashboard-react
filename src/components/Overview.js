import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { MdComputer } from "react-icons/md";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import AudienceProfile from "./overviewtabs/AudienceProfile";
import AudienceInterest from "./overviewtabs/AudienceInterest";
import RefferalSource from "./overviewtabs/RefferalSource";
import GeoLocation from "./overviewtabs/GeoLocation";
import Content from "./overviewtabs/Content";
const Overview = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  //   area Chart &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  const data = [
    {
      name: "Page A",
      uv: 0,
      pv: 400,
      amt: 400,
    },
    {
      name: "Page B",
      uv: 1000,
      pv: 198,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 1500,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 308,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 290,
      pv: 4300,
      amt: 2100,
    },
  ];

  //    Dougout Chart ***************************************
  const datas = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <div className="overview">
        <div className="overview-top">
          <div className="overview-top-left">
            <h3 className="h3first">Site Performance</h3>
          </div>
          <div className="overview-top-right right-align">
            <div className="overview-top-right-content">
              <p className="p1">Post Published</p>
              <h5>345</h5>
            </div>
            <div className="overview-top-right-content">
              <p className="p1">Publishing Trend</p>
              <h5>345</h5>
            </div>
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
        <div className="overview-tabs multiple-tabs">
          <Tabs>
            <TabList>
              <Tab>Summary</Tab>
              <Tab>Audience Profile</Tab>
              <Tab>Interest Segments</Tab>
              <Tab>Referral Sources</Tab>
              <Tab>Geo Location</Tab>
              <Tab>Top Content</Tab>
            </TabList>
            <TabPanel className="summary">
              <div className="summary-wrapper ph">
                <div className="summary-wrapper-left pls">
                  <h6 className="h6first">Key Metric</h6>
                  <div className="summary-left-top">
                    <div className="summary-left-top-content">
                      <p className="p1">Visitors</p>
                      <h5 className="num">65,296</h5>
                      <p className="p2">
                        Vs lorem epson <span>15%</span>{" "}
                      </p>
                    </div>
                    <div className="summary-left-top-content">
                      <p className="p1">Page Views</p>
                      <h5 className="num">6,565,296</h5>
                      <p className="p2">
                        Vs lorem epson <span>15%</span>{" "}
                      </p>
                    </div>
                    <div className="summary-left-top-content">
                      <p className="p1">Engaged Time</p>
                      <h5 className="num">8,235,296 min</h5>
                      <p className="p2">
                        Vs lorem epson <span>15%</span>{" "}
                      </p>
                    </div>
                    <div className="summary-left-top-content">
                      <p className="p1">Min/Visitor</p>
                      <h5 className="num">1.23 min</h5>
                      <p className="p2">
                        Vs lorem epson <span>15%</span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="summary-left-charts lc">
                    <div style={{ width: "100%", height: 300 }}>
                      <ResponsiveContainer>
                        <AreaChart
                          data={data}
                          margin={{
                            top: 10,
                            right: 0,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#8884d8"
                            fill="#8884d8"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <div className="summary-wrapper-right prs">
                  <h6 className="h6first">Visitor Breakdown</h6>
                  <div className="summary-wrapper-right-visitordetails">
                    <div className="summary-wrapper-right-visitordetails-left">
                      <div className="visitor-heading hb">
                        <p className="p1">Visitor Type</p>
                        <p className="p1">Share</p>
                      </div>
                      <div className="visitor-content cb">
                        <p className="p1">New</p>
                        <p className="num2">6,203,269</p>
                        <h6 className="num3">55%</h6>
                      </div>
                      <div className="visitor-content cb">
                        <p className="p1">Returning</p>
                        <p className="num2">6,203,269</p>
                        <h6 className="num3">35%</h6>
                      </div>
                      <div className="visitor-content cb">
                        <p className="p1">Loyal</p>
                        <p className="num2">6,767,203</p>
                        <h6 className="num3">10%</h6>
                      </div>
                    </div>
                    <div className="summary-wrapper-right-visitordetails-right">
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
                      <button className="btn1">View Audience Engagement</button>
                    </div>
                  </div>
                  <div className="summary-wrapper-right-device device-mt">
                    <h6 className="h6first">Devices</h6>
                    <div className="summary-wrapper-right-device-all">
                      <div className="summary-wrapper-right-device-alltabs ct-div">
                        <div className="summary-wrapper-right-device-alltabs-computer computer">
                          <MdComputer />
                          <p className="p1">Computer</p>
                          <h6 className="num">30%</h6>
                        </div>
                        <div className="summary-wrapper-right-device-alltabs-tablet tablet">
                          <MdComputer />
                          <p className="p1">Computer</p>
                          <h6 className="num">30%</h6>
                        </div>
                      </div>
                      <div className="summary-wrapper-right-device-alltabs">
                        <div className="summary-wrapper-right-device-alltabs-mobile mobile">
                          <MdComputer />
                          <p className="p1">Computer</p>
                          <h6 className="num">30%</h6>
                        </div>
                        <div className="summary-wrapper-right-device-alltabs-tv tv">
                          <MdComputer />
                          <p className="p1">Computer</p>
                          <h6 className="num">30%</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt">
                      <button className="btn1 mt-3">
                        View Device Property
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <AudienceProfile />
            </TabPanel>

            <TabPanel>
              <AudienceInterest />
            </TabPanel>

            <TabPanel>
              <RefferalSource />
            </TabPanel>
            <TabPanel>
              <GeoLocation />
            </TabPanel>
            <TabPanel>
              <Content />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Overview;
