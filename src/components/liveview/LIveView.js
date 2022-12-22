import React from "react";
import { PieChart, Pie } from "recharts";
import { MdComputer } from "react-icons/md";
import Dropdown from "react-dropdown";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { BsFillHandbagFill } from "react-icons/bs";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const LIveView = () => {

    const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

  const data1 = [
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

  // dogout chart********************************************
  const datas = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  //   bar chart^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  const data = [
    {
      name: "Page A",
      uv: 500,
      pv: 400,
      amt: 1400,
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
  //   dropdown ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <>
      <div className="liveview">
        <div className="liveview-wrapper">
          <div className="liveview-wrapper-left">
            <div className="liveview-wrapper-left-first">
              <div className="liveview-wrapper-left-head">
                <p>
                  Visitors <span>Live Now</span>
                </p>
              </div>
              <h3>3,000,685</h3>
              <p>+15% vs lorem epson</p>
              <div className="liveview-wrapper-left-bargraph">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="uv" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="liveview-wrapper-left-graph-multi">
                <div className="liveview-wrapper-left-graph-multi-first">
                  <PieChart width={190} height={200}>
                    <Pie
                      data={datas}
                      cx={100}
                      cy={90}
                      innerRadius={45}
                      outerRadius={75}
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
                <div className="liveview-wrapper-left-graph-multi-second">
                  <PieChart width={190} height={200}>
                    <Pie
                      data={datas}
                      cx={100}
                      cy={90}
                      innerRadius={45}
                      outerRadius={75}
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
              <div className="summary-wrapper-right-device">
                <h6>Devices</h6>
                <div className="summary-wrapper-right-device-all">
                  <div className="summary-wrapper-right-device-alltabs">
                    <div className="summary-wrapper-right-device-alltabs-computer">
                      <MdComputer />
                      <p>Computer</p>
                      <h6>30%</h6>
                    </div>
                    <div className="summary-wrapper-right-device-alltabs-tablet">
                      <MdComputer />
                      <p>Computer</p>
                      <h6>30%</h6>
                    </div>
                  </div>
                  <div className="summary-wrapper-right-device-alltabs">
                    <div className="summary-wrapper-right-device-alltabs-mobile">
                      <MdComputer />
                      <p>Computer</p>
                      <h6>30%</h6>
                    </div>
                    <div className="summary-wrapper-right-device-alltabs-tv">
                      <MdComputer />
                      <p>Computer</p>
                      <h6>30%</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="liveview-wrapper-middle">
            <div className="liveview-wrapper-middle-first">
              <div className="liveview-wrapper-middle-top">
                <p>Key Metric</p>
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
              <div className="liveview-wrapper-middle-head">
                <div className="head-data">
                  <p>Visitors</p>
                  <h6>2,203,548</h6>
                  <span>ecpm INR 98.00</span>
                </div>
                <div className="head-data">
                  <p>Visitors</p>
                  <h6>2,203,548</h6>
                  <span>ecpm INR 98.00</span>
                </div>
                <div className="head-data">
                  <p>Visitors</p>
                  <h6>2,203,548</h6>
                  <span>ecpm INR 98.00</span>
                </div>
              </div>
              <div className="liveview-wrapper-middle-graph">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={data1}
                    margin={{
                      top: 10,
                      right: 30,
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
            <div className="liveview-wrapper-middle-second">
              <div className="liveview-wrapper-middle-second-top">
                <p>Audience Insights</p>
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
              <div className="liveview-wrapper-middle-second-bottom">
                <div className="liveview-wrapper-middle-second-bottom-left">
                  <h6>Interest</h6>
                  <div className="middle-live-bar">
                    <BsFillHandbagFill />
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </div>
                  <div className="middle-live-bar">
                    <BsFillHandbagFill />
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </div>
                  <div className="middle-live-bar">
                    <BsFillHandbagFill />
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </div>
                  <div className="middle-live-bar">
                    <BsFillHandbagFill />
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </div>
                  <div className="middle-live-bar">
                    <BsFillHandbagFill />
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </div>
                  <div className="middle-live-bar">
                    <BsFillHandbagFill />
                    <input type="range" id="vol" name="vol" min="0" max="50" />
                  </div>
                </div>
                <div className="liveview-wrapper-middle-second-bottom-right">
                  <div className="liveview-wrapper-middle-second-bottom-right-graph">
                    <PieChart width={190} height={200}>
                      <Pie
                        data={datas}
                        cx={100}
                        cy={90}
                        innerRadius={45}
                        outerRadius={75}
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
                  <div className="liveview-wrapper-middle-second-bottom-right-graph">
                    <PieChart width={190} height={200}>
                      <Pie
                        data={datas}
                        cx={100}
                        cy={90}
                        innerRadius={45}
                        outerRadius={75}
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
                  <div className="liveview-wrapper-middle-second-bottom-right-graph">
                    <PieChart width={190} height={200}>
                      <Pie
                        data={datas}
                        cx={100}
                        cy={90}
                        innerRadius={45}
                        outerRadius={75}
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
                  <div className="liveview-wrapper-middle-second-bottom-right-graph">
                    <PieChart width={190} height={200}>
                      <Pie
                        data={datas}
                        cx={100}
                        cy={90}
                        innerRadius={45}
                        outerRadius={75}
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


              </div>
            </div>
            <div className="liveview-wrapper-middle-third">
            <div className="liveview-wrapper-middle-third-graph">
            <h6>Location</h6>
            <div className="geolocation-wrapper-top">
              <p>Map View</p>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Global"
              />
              
            </div>
            <div className="geolocation-map">
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
          </div>
            </div>
          </div>
          <div className="liveview-wrapper-right">
            <div className="liveview-wrapper-right-first">
              <div className="liveview-wrapper-right-first-top">
                <p>Trending Content</p>
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
              <div className="liveview-wrapper-right-first-bottom">
                <button>Last 30 Mins</button>
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>
                <button>Today</button>
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>{" "}
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>{" "}
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>{" "}
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>{" "}
                <div className="liveview-wrapper-right-first-bottom-content">
                  <img src="" alt="dd" />
                  <p>Lorem ipsum dolor sit ame.</p>
                  <span>589</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LIveView;
