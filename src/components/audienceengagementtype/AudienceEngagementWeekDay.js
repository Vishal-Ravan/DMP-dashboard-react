import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Dropdown from "react-dropdown";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import {
  // ComposedChart,
  Line,
  // Area,
  // Bar,
  XAxis,
  YAxis,
  LineChart,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AudienceEngagementWeekDay = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  charts(FusionCharts);
  const dataSource = {
    chart: {
      // caption: "Medal Tally for 2017",
      // subcaption: "Olympics vs Paralympics",
      // plottooltext: "$label won <b>$dataValue</b> medals in $seriesName",
      // theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "USA",
          },
          {
            label: "United Kingdom",
          },
          {
            label: "China",
          },
          {
            label: "Russia",
          },
          {
            label: "Germany",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "Olympics",
        data: [
          {
            value: "121",
          },
          {
            value: "67",
          },
          {
            value: "70",
          },
          {
            value: "55",
          },
          {
            value: "42",
          },
        ],
      },
      {
        seriesname: "Paralympics",
        data: [
          {
            value: "115",
          },
          {
            value: "147",
          },
          {
            value: "239",
          },
          {
            value: "",
          },
          {
            value: "57",
          },
        ],
      },
    ],
  };

  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
  const dataSources = {
    // chart: {
    //   caption: "Countries with Highest Deforestation Rate",
    //   subcaption: "For the year 2017",
    //   yaxisname: "Deforested Area{br}(in Hectares)",
    //   decimals: "1",
    //   theme: "fusion",
    // },
    data: [
      {
        label: "Brazil",
        value: "1466000",
      },
      {
        label: "Indonesia",
        value: "1147800",
      },
      {
        label: "Russian Federation",
        value: "532200",
      },
      {
        label: "Mexico",
        value: "395000",
      },
      {
        label: "Papua New Guinea",
        value: "250200",
      },
      {
        label: "Peru",
        value: "224600",
      },
      {
        label: "U.S.A",
        value: "215200",
      },
      {
        label: "Bolivia",
        value: "135200",
      },
      {
        label: "Sudan",
        value: "117807",
      },
      {
        label: "Nigeria",
        value: "82000",
      },
    ],
  };

  return (
    <>
      <div className="overview">
        <div className="source-top overview-top">
          <div className="source-top-left">
            <h4 className="h3first">Day of Week and Time of Day</h4>
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
        <div className="audiencesegmentfirst-wrapper-tab multiple-tabs">
          <Tabs>
            <TabList>
              <Tab>Devices</Tab>
              <Tab>Visitor Type</Tab>
              <Tab>Gender</Tab>
              <Tab>Age Group</Tab>
              <Tab>Income Level</Tab>

            </TabList>

            <TabPanel>
              <div className="audience-engagement">
                <div className="audience-engagement-wrapper">
                  <div className="audience-engagement-wrapper-left">
                    <h5 className="h6first">
                      Distribution of Traffic by Device
                    </h5>
                    <p className="p1">
                      Average Volume of Device Traffic by Day of Week and Time
                      of Day
                    </p>
                  </div>
                </div>
                <div className="audience-engagement-bottom">
                  <div className="audience-engagement-bottom-left">
                    <ReactFusioncharts
                      type="msbar3d"
                      width="9%"
                      height="450px"
                      dataFormat="JSON"
                      dataSource={dataSource}
                    />
                  </div>
                  <div className="audience-engagement-bottom-right">
                    <LineChart
                      width={530}
                      height={400}
                      data={data}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend verticalAlign="top" height={36} />
                      <Line
                        name="pv of pages"
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                      />
                      <Line
                        name="uv of pages"
                        type="monotone"
                        dataKey="uv"
                        stroke="#82ca9d"
                      />
                    </LineChart>
                  </div>
                </div>
              </div>

              <div className="audience-engagement">
                <div className="audience-engagement-bottom">
                  <div className="audience-engagement-bottom-left">
                    <ReactFusioncharts
                      type="column3d"
                      width="97%"
                      height="450px"
                      dataFormat="JSON"
                      dataSource={dataSources}
                    />
                  </div>
                  <div className="audience-engagement-bottom-right">
                    <LineChart
                      width={530}
                      height={400}
                      data={data}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend verticalAlign="top" height={36} />
                      <Line
                        name="pv of pages"
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                      />
                      <Line
                        name="uv of pages"
                        type="monotone"
                        dataKey="uv"
                        stroke="#82ca9d"
                      />
                    </LineChart>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AudienceEngagementWeekDay;
