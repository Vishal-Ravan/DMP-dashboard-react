import React from "react";
import { Chart } from "react-google-charts";

const AudienceProfile = () => {
  // left-audience-chart
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
  
  return (
    <>
      <div className="audience">
        <h5>Audience</h5>
        <div className="audience-wrapper">
          <div className="audience-wrapper-left dtl">
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
              height={"180px"}
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
          <div className="audience-wrapper-middle dtl">
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
              height={"180px"}
              legend_toggle
            />
            <div className="audience-middle-table tw ">
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
          <div className="audience-wrapper-right dtr">
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
              graph_id="PieChart2"
              width={"100%"}
              height={"180px"}
              legend_toggle
            />
            <div className="audience-right-table tw">
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
      </div>
    </>
  );
};

export default AudienceProfile;
