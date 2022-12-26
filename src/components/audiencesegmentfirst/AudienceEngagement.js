import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const AudienceEngagement = () => {
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
            <h5>Engagement by Gender</h5>
            <h6>
              Average Volume of Gender Traffic by Day of Week and Time of Day
            </h6>
          </div>
          <div className="audience-engagement-wrapper-right">
            <button>Value</button>
            <button>Percentage</button>
          </div>
        </div>
        <div className="audience-engagement-bottom">
          <div className="audience-engagement-bottom-left">
              <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Legend />
                <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
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
