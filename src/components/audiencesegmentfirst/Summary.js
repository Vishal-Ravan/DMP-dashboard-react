import React from "react";
import { Chart } from "react-google-charts";
import { ResponsiveContainer } from "recharts";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Summary = () => {
  const pieOptions = {
    is3D: true,

    slices: [
      {
        color: "#00a3e0",
      },
      {
        color: "#f2a900",
      },
      {
        color: "F16A21",
      },
      {
        color: "#e9a227",
      },
    ],
    legend: {
      position: "right",
      alignment: "center",
      textStyle: {
        color: "000",
        fontSize: 18,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
    },
    fontName: "Roboto",
    fontSize: 16,
    color: "000",
  };
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
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
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className="summary-audience">
        <div className="summary-audience-wrapper-left">
          <h6 className="h6first">Gender Traffic</h6>
          <div className="audience-wrapper-left dtl">
            <Chart
              chartType="PieChart"
              data={[
                ["Item", "Numbers"],
                ["Item 1", 5000],
                ["Item 2", 20000],
                ["Item 3", 6000],
                ["Item 4", 6000],
              ]}
              options={pieOptions}
              graph_id="PieChart"
              width={"100%"}
              height={"200px"}
              legend_toggle
            />
            <div className="audience-left-table tw">
              <table>
                <tr>
                  <th className="p1">Gender</th>
                  <th className="p1">PageViews</th>
                  <th className="p1">Share</th>
                </tr>
                <tr>
                  <td className="p3">Male</td>
                  <td className="num2">6,203,269</td>
                  <td className="num3">65%</td>
                </tr>
                <tr>
                  <td className="p3">Female</td>
                  <td className="num2">6,203,269</td>
                  <td className="num3">30%</td>
                </tr>
                <tr>
                  <td className="p3"> Other</td>
                  <td className="num2">6,203,269</td>
                  <td className="num3">5%</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="summary-audience-wrapper-right">
          <ResponsiveContainer>
            <AreaChart
              width={730}
              height={390}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Summary;
