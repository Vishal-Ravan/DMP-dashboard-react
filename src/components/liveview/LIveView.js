import React from "react";
import { MdComputer } from "react-icons/md";
import Dropdown from "react-dropdown";
import { BsFillHandbagFill } from "react-icons/bs";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import GeoLocation from "../overviewtabs/GeoLocation";
import Chart from "react-google-charts";
import ProgressBar from "@ramonak/react-progress-bar";

const LIveView = () => {
  // dogout chart********************************************

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
      //   position: "right",
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
                <p className="p1">
                  Visitors <span className="btn3">Live Now</span>
                </p>
              </div>
              <div className="tac">
                <h3>3,000,685</h3>
                <p className="p1">
                  {" "}
                  +15% <span className="num4">vs lorem epson </span>
                </p>
              </div>
              <div className="liveview-wrapper-left-bargraph">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="uv" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="liveview-wrapper-left-graph-multi">
                <div className="liveview-wrapper-left-graph-multi-first">
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
                    height={"120px"}
                    legend_toggle
                  />
                </div>
                <div className="liveview-wrapper-left-graph-multi-second">
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
                    graph_id="PieCharts"
                    width={"100%"}
                    height={"120px"}
                    legend_toggle
                  />
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
              </div>
            </div>
            <div className="liveview-wrapper-left-second">
              <div className="liveview-wrapper-left-second-publishing">
                <h6 className="h6first">Publishing Operation</h6>
                <div className="publishing-content">
                  <div className="publishing-content-left">
                    <p className="p1">New Content</p>
                    <h6 className="num">542</h6>
                    <p className="p2">
                      Vs lorem epson <span>15%</span>{" "}
                    </p>
                  </div>
                  <div className="publishing-content-right">
                    <button className="btn3">Published Today</button>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart width={150} height={40} data={data}>
                        <Bar dataKey="uv" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="publishing-content">
                  <div className="publishing-content-left">
                    <p className="p1">New Content</p>
                    <h6 className="num">542</h6>
                    <p className="p2">
                      Vs lorem epson <span>15%</span>{" "}
                    </p>
                  </div>
                  <div className="publishing-content-right">
                    <button className="btn3">Published Today</button>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart width={150} height={40} data={data}>
                        <Bar dataKey="uv" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="liveview-wrapper-left-second-authors">
                <div className="liveview-wrapper-left-second-authors-head right-align">
                  <p className="p1">Top Authors</p>
                  <Dropdown
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                </div>
                <div className="liveview-wrapper-left-second-authors-details">
                  <img
                    src="https://media.istockphoto.com/id/1352918375/photo/saguaro-sunset-silhouette.jpg?s=612x612&w=is&k=20&c=ZBOdA-maoQB1vr-TpuoKG0W8euHPu3CJu8W0dmUN4go="
                    alt="d"
                  />
                  <h6 className="num4">lorem ipsum</h6>
                  <p className="num3">528</p>
                </div>
                <div className="liveview-wrapper-left-second-authors-details">
                  <img
                    src="https://media.istockphoto.com/id/1352918375/photo/saguaro-sunset-silhouette.jpg?s=612x612&w=is&k=20&c=ZBOdA-maoQB1vr-TpuoKG0W8euHPu3CJu8W0dmUN4go="
                    alt="d"
                  />
                  <h6 className="num4">lorem ipsum</h6>
                  <p className="num3">528</p>
                </div>{" "}
                <div className="liveview-wrapper-left-second-authors-details">
                  <img
                    src="https://media.istockphoto.com/id/1352918375/photo/saguaro-sunset-silhouette.jpg?s=612x612&w=is&k=20&c=ZBOdA-maoQB1vr-TpuoKG0W8euHPu3CJu8W0dmUN4go="
                    alt="d"
                  />
                  <h6 className="num4">lorem ipsum</h6>
                  <p className="num3">528</p>
                </div>{" "}
                <div className="liveview-wrapper-left-second-authors-details">
                  <img
                    src="https://media.istockphoto.com/id/1352918375/photo/saguaro-sunset-silhouette.jpg?s=612x612&w=is&k=20&c=ZBOdA-maoQB1vr-TpuoKG0W8euHPu3CJu8W0dmUN4go="
                    alt="d"
                  />
                  <h6 className="num4">lorem ipsum</h6>
                  <p className="num3">528</p>
                </div>{" "}
                <div className="liveview-wrapper-left-second-authors-details">
                  <img
                    src="https://media.istockphoto.com/id/1352918375/photo/saguaro-sunset-silhouette.jpg?s=612x612&w=is&k=20&c=ZBOdA-maoQB1vr-TpuoKG0W8euHPu3CJu8W0dmUN4go="
                    alt="d"
                  />
                  <h6 className="num4">lorem ipsum</h6>
                  <p className="num3">528</p>
                </div>{" "}
                <div className="liveview-wrapper-left-second-authors-details">
                  <img
                    src="https://media.istockphoto.com/id/1352918375/photo/saguaro-sunset-silhouette.jpg?s=612x612&w=is&k=20&c=ZBOdA-maoQB1vr-TpuoKG0W8euHPu3CJu8W0dmUN4go="
                    alt="d"
                  />
                  <h6 className="num4">lorem ipsum</h6>
                  <p className="num3">528</p>
                </div>
              </div>
            </div>
          </div>
          <div className="liveview-wrapper-right-side">
            <div className="liveview-wrapper-right-side-wrapper">
              <div className="liveview-wrapper-middle">
                <div className="liveview-wrapper-middle-first">
                  <div className="liveview-wrapper-middle-top right-align">
                    <p className="p1">Key Metric</p>
                    <Dropdown
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                    />
                  </div>
                  <div className="liveview-wrapper-middle-head">
                    <div className="head-data">
                      <p className="p1">Visitors</p>
                      <h6 className="num">2,203,548</h6>
                      <p className="p2">
                        ecpm INR <span> 98.00 </span>
                      </p>
                    </div>
                    <div className="head-data">
                      <p className="p1">Visitors</p>
                      <h6 className="num">2,203,548</h6>
                      <p className="p2">
                        ecpm INR <span> 98.00 </span>
                      </p>
                    </div>
                    <div className="head-data">
                      <p className="p1">Visitors</p>
                      <h6 className="num">2,203,548</h6>
                      <p className="p2">
                        ecpm INR <span> 98.00 </span>
                      </p>
                    </div>
                  </div>
                  <div className="liveview-wrapper-middle-graph">
                    <ResponsiveContainer>
                      <AreaChart
                        width={730}
                        height={390}
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#f16a21"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#f16a21"
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#f2a900"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#f2a900"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="#f16a21"
                          fillOpacity={1}
                          fill="url(#colorUv)"
                        />
                        <Area
                          type="monotone"
                          dataKey="pv"
                          stroke="#f2a900"
                          fillOpacity={1}
                          fill="url(#colorPv)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="liveview-wrapper-middle-second">
                  <div className="liveview-wrapper-middle-second-top right-align">
                    <h6 className="h6first">Audience Insights</h6>
                    <Dropdown
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                    />
                  </div>
                  <div className="liveview-wrapper-middle-second-bottom">
                    <div className="liveview-wrapper-middle-second-bottom-left">
                      <p className="p1">Interest</p>
                      <div className="middle-live-bar">
                        <BsFillHandbagFill />
                        <span style={{ width: "150px", paddingLeft: "0" }}>
                          <ProgressBar
                            completed="10"
                            baseBgColor="transparent"
                            bgColor="#666"
                            height="30px"
                            className="progress-bar"
                            borderRadius={0}
                          />
                        </span>
                      </div>
                      <div className="middle-live-bar">
                        <BsFillHandbagFill />
                        <span style={{ width: "150px", paddingLeft: "0" }}>
                          <ProgressBar
                            completed="43"
                            baseBgColor="transparent"
                            bgColor="#666"
                            height="30px"
                            className="progress-bar"
                            borderRadius={0}
                          />
                        </span>
                      </div>
                      <div className="middle-live-bar">
                        <BsFillHandbagFill />
                        <span style={{ width: "150px", paddingLeft: "0" }}>
                          <ProgressBar
                            completed="43"
                            baseBgColor="transparent"
                            bgColor="#666"
                            height="30px"
                            className="progress-bar"
                            borderRadius={0}
                          />
                        </span>
                      </div>
                      <div className="middle-live-bar">
                        <BsFillHandbagFill />
                        <span style={{ width: "150px", paddingLeft: "0" }}>
                          <ProgressBar
                            completed="43"
                            baseBgColor="transparent"
                            bgColor="#666"
                            height="30px"
                            className="progress-bar"
                            borderRadius={0}
                          />
                        </span>
                      </div>
                      <div className="middle-live-bar">
                        <BsFillHandbagFill />
                        <span style={{ width: "150px", paddingLeft: "0" }}>
                          <ProgressBar
                            completed="43"
                            baseBgColor="transparent"
                            bgColor="#666"
                            height="30px"
                            className="progress-bar"
                            borderRadius={0}
                          />
                        </span>
                      </div>
                      <div className="middle-live-bar">
                        <BsFillHandbagFill />
                        <span style={{ width: "150px", paddingLeft: "0" }}>
                          <ProgressBar
                            completed="43"
                            baseBgColor="transparent"
                            bgColor="#666"
                            height="30px"
                            className="progress-bar"
                            borderRadius={0}
                          />
                        </span>
                      </div>
                      <div className="middle-live-bar">
                        <BsFillHandbagFill />
                        <span style={{ width: "150px", paddingLeft: "0" }}>
                          <ProgressBar
                            completed="100"
                            baseBgColor="transparent"
                            bgColor="#666"
                            height="30px"
                            className="progress-bar"
                            borderRadius={0}
                          />
                        </span>
                      </div>
                      <div className="middle-live-bar">
                        <BsFillHandbagFill />
                        <span style={{ width: "150px", paddingLeft: "0" }}>
                          <ProgressBar
                            completed="90"
                            baseBgColor="transparent"
                            bgColor="#666"
                            height="30px"
                            className="progress-bar"
                            borderRadius={0}
                          />
                        </span>
                      </div>
                      <div className="middle-live-bar">
                        <BsFillHandbagFill />
                        <span style={{ width: "150px", paddingLeft: "0" }}>
                          <ProgressBar
                            completed="79"
                            baseBgColor="transparent"
                            bgColor="#666"
                            height="30px"
                            className="progress-bar"
                            borderRadius={0}
                          />
                        </span>
                      </div>
                      <div className="middle-live-bar">
                        <BsFillHandbagFill />
                        <span style={{ width: "150px", paddingLeft: "0" }}>
                          <ProgressBar
                            completed="30"
                            baseBgColor="transparent"
                            bgColor="#666"
                            height="30px"
                            className="progress-bar"
                            borderRadius={0}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="liveview-wrapper-middle-second-bottom-right">
                      <div className="liveview-wrapper-middle-second-bottom-right-graph">
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
                          graph_id="PieChart1"
                          width={"100%"}
                          height={"120px"}
                          legend_toggle
                        />
                      </div>
                      <div className="liveview-wrapper-middle-second-bottom-right-graph">
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
                          graph_id="PieChart3"
                          width={"100%"}
                          height={"120px"}
                          legend_toggle
                        />
                      </div>{" "}
                      <div className="liveview-wrapper-middle-second-bottom-right-graph">
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
                          graph_id="PieChart4"
                          width={"100%"}
                          height={"120px"}
                          legend_toggle
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="liveview-wrapper-right ">
                <div className="liveview-wrapper-right-first">
                  <div className="liveview-wrapper-right-first-top right-align">
                    <p className="p1">Trending Content</p>
                    <Dropdown
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                    />
                  </div>
                  <div className="liveview-wrapper-right-first-bottom">
                    <button className="btn3">Last 30 Mins</button>
                    <div className="liveview-wrapper-right-first-bottom-content">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg"
                        alt="dd"
                      />
                      <p className="p2">Lorem ipsum dolor sit ame.</p>
                      <span className="num3">589</span>
                    </div>
                    <div className="liveview-wrapper-right-first-bottom-content">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg"
                        alt="dd"
                      />
                      <p className="p2">Lorem ipsum dolor sit ame.</p>
                      <span className="num3">589</span>
                    </div>{" "}
                    <div className="liveview-wrapper-right-first-bottom-content">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg"
                        alt="dd"
                      />
                      <p className="p2">Lorem ipsum dolor sit ame.</p>
                      <span className="num3">589</span>
                    </div>{" "}
                    <div className="liveview-wrapper-right-first-bottom-content">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg"
                        alt="dd"
                      />
                      <p className="p2">Lorem ipsum dolor sit ame.</p>
                      <span className="num3">589</span>
                    </div>{" "}
                    <div className="liveview-wrapper-right-first-bottom-content">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg"
                        alt="dd"
                      />
                      <p className="p2">Lorem ipsum dolor sit ame.</p>
                      <span className="num3">589</span>
                    </div>{" "}
                    <div className="liveview-wrapper-right-first-bottom-content">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_960_720.jpg"
                        alt="dd"
                      />
                      <p className="p2">Lorem ipsum dolor sit ame.</p>
                      <span className="num3">589</span>
                    </div>
                    <button className="btn3 mt-3">Today</button>
                    <div className="liveview-wrapper-right-first-bottom-content">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/04/17/23/28/radio-telescope-1335759_960_720.jpg"
                        alt="dd"
                      />
                      <p className="p2">Lorem ipsum dolor sit ame.</p>
                      <span className="num3">589</span>
                    </div>
                    <div className="liveview-wrapper-right-first-bottom-content">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/04/17/23/28/radio-telescope-1335759_960_720.jpg"
                        alt="dd"
                      />
                      <p className="p2">Lorem ipsum dolor sit ame.</p>
                      <span className="num3">589</span>
                    </div>
                    <div className="liveview-wrapper-right-first-bottom-content">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/04/17/23/28/radio-telescope-1335759_960_720.jpg"
                        alt="dd"
                      />
                      <p className="p2">Lorem ipsum dolor sit ame.</p>
                      <span className="num3">589</span>
                    </div>
                    <div className="liveview-wrapper-right-first-bottom-content">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/04/17/23/28/radio-telescope-1335759_960_720.jpg"
                        alt="dd"
                      />
                      <p className="p2">Lorem ipsum dolor sit ame.</p>
                      <span className="num3">589</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="right-geo-Location">
              <GeoLocation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LIveView;
