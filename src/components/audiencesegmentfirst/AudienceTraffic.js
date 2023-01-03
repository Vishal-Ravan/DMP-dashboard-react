import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const AudienceTraffic = () => {
  return (
    <>
      <div className="audience-engagement">
        <table>
          <tr>
            <th></th>

            <th className="p1">Gender</th>
            <th className="p1">Trend</th>
            <th className="p1">Visitors</th>
            <th className="p1">Avg. Time</th>
            <th className="p1">PageViews</th>
            <th></th>
          </tr>
          <tr>
            <td className="num5">1</td>
            <td className="num4">Male</td>
            <td></td>
            <td className="num4">565</td>
            <td className="num4">0.80 min</td>
            <td className="num5">65,767</td>
            <td style={{ width: "230px", paddingLeft: "0" }}>
              <ProgressBar
                completed="66"
                baseBgColor="#fff"
                bgColor="#666"
                height="30px"
                className="progress-bar"
                borderRadius={0}
              />
            </td>
          </tr>
          <tr>
            <td className="num5">1</td>
            <td className="num4">Male</td>
            <td></td>
            <td className="num4">565</td>
            <td className="num4">0.80 min</td>
            <td className="num5">65,767</td>
            <td style={{ width: "230px", paddingLeft: "0" }}>
              <ProgressBar
                completed="96"
                baseBgColor="#fff"
                bgColor="#666"
                height="30px"
                className="progress-bar"
                borderRadius={0}
              />
            </td>
          </tr>{" "}
          <tr>
            <td className="num5">1</td>
            <td className="num4">Male</td>
            <td></td>
            <td className="num4">565</td>
            <td className="num4">0.80 min</td>
            <td className="num5">65,767</td>
            <td style={{ width: "230px", paddingLeft: "0" }}>
              <ProgressBar
                completed="12"
                baseBgColor="#fff"
                bgColor="#666"
                height="30px"
                className="progress-bar"
                borderRadius={0}
              />
            </td>
          </tr>{" "}
          <tr>
            <td className="num5">1</td>
            <td className="num4">Male</td>
            <td></td>
            <td className="num4">565</td>
            <td className="num4">0.80 min</td>
            <td className="num5">65,767</td>
            <td style={{ width: "230px", paddingLeft: "0" }}>
              <ProgressBar
                completed="86"
                baseBgColor="#fff"
                bgColor="#666"
                height="30px"
                className="progress-bar"
                borderRadius={0}
              />
            </td>
          </tr>{" "}
          <tr>
            <td className="num5">1</td>
            <td className="num4">Male</td>
            <td></td>
            <td className="num4">565</td>
            <td className="num4">0.80 min</td>
            <td className="num5">65,767</td>
            <td style={{ width: "230px", paddingLeft: "0" }}>
              <ProgressBar
                completed="36"
                baseBgColor="#fff"
                bgColor="#666"
                height="30px"
                className="progress-bar"
                borderRadius={0}
              />
            </td>
          </tr>{" "}
          <tr>
            <td className="num5">1</td>
            <td className="num4">Male</td>
            <td></td>
            <td className="num4">565</td>
            <td className="num4">0.80 min</td>
            <td className="num5">65,767</td>
            <td style={{ width: "230px", paddingLeft: "0" }}>
              <ProgressBar
                completed="46"
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
    </>
  );
};

export default AudienceTraffic;
