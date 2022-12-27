import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import AudienceEngagementType from "../audienceengagementtype/AudienceEngagementType";

const Summary = () => {
  const datas = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
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
          <h6>Gender Traffic</h6>
          <div className="summmary-audience-wrapper-left-chart">
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

            <table>
              <tr>
                <th>Gender</th>
                <th>PageViews</th>
                <th>Share</th>
              </tr>
              <tr>
                <td>Male</td>
                <td>6,54,545</td>
                <td>65%</td>
              </tr>
              <tr>
                <td>Male</td>
                <td>6,54,545</td>
                <td>65%</td>
              </tr>
              <tr>
                <td>Male</td>
                <td>6,54,545</td>
                <td>65%</td>
              </tr>
            </table>
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
      <br />
      <br />
      <br />
      <br />
<AudienceEngagementType/>
    </>
  );
};

export default Summary;
