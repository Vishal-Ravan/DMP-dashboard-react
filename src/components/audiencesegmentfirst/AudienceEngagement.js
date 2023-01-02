import React from "react";
import { Tab, TabList, Tabs } from "react-tabs";
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
const AudienceEngagement = () => {
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

  return (
    <>
      <div className="audience-engagement">
        <div className="audience-engagement-wrapper">
          <div className="audience-engagement-wrapper-left">
            <h5 className="h6first">Engagement by Gender</h5>
            <h6 className="p1">
              Average Volume of Gender Traffic by Day of Week and Time of Day
            </h6>
          </div>
          <div className="audience-engagement-wrapper-right right-align">
            <div className="overview-top-right-content">
              <Tabs>
                <TabList>
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
                </TabList>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="audience-engagement-bottom">
          <div className="audience-engagement-bottom-left">
            <ReactFusioncharts
              type="msbar3d"
              width="97%"
              height="55%"
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
    </>
  );
};

export default AudienceEngagement;
