import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import Dropdown from "react-dropdown";
import { Chart } from "react-google-charts";

const RefferalSource = () => {
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

  const options = ["Online Shopping", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <div className="refferal-source">
        <div className="refferal-source-wrapper">
          <div className="refferal-source-wrapper-left dtl">
            <h6 className="h6first">Traffic Source</h6>
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
          <div className="refferal-source-wrapper-Right plr">
            <h6 className="h6first">Top Reffering Domain</h6>

            <table>
              <tr>
                <th></th>
                <th className="p1">Domain</th>
                <th className="p1">Links</th>
                <th className="p1">Shares</th>
                <th className="p1">Page Views</th>
                <th></th>
              </tr>
              <tr>
                <td>1</td>
                <td className="table-dd">
                  <Dropdown
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                </td>
                <td className="num4">269</td>
                <td className="num5">-</td>
                <td className="num5">34,578</td>
                <td style={{ width: "150px", paddingLeft: "0" }}>
                  <ProgressBar
                    completed="70"
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
        </div>
      </div>
    </>
  );
};

export default RefferalSource;
