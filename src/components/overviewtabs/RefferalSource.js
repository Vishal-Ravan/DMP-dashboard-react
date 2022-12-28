import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import Dropdown from "react-dropdown";

const RefferalSource = () => {
  const datas = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const options = ["Online Shopping", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <div className="refferal-source">
        <div className="refferal-source-wrapper">
          
          <div className="refferal-source-wrapper-left dtl">
            <h6 className="h6first">Traffic Source</h6>
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
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
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
