import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const AudienceProfile = () => {
  // left-audience-chart

  const datas = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <div className="audience">
        <h5>Audience</h5>
        <div className="audience-wrapper">
          <div className="audience-wrapper-left">
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
            <div className="audience-left-table">
              <table>
                <tr>
                  <th>Gender</th>
                  <th>PageViews</th>
                  <th>Share</th>
                </tr>
                <tr>
                  <td>Male</td>
                  <td>6,203,269</td>
                  <td>65%</td>
                </tr>
                <tr>
                  <td>Female</td> 
                  <td>6,203,269</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td> Other</td> 
                  <td>6,203,269</td>
                  <td>5%</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="audience-wrapper-middle">
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
            <div className="audience-middle-table">
              <table>
                <tr>
                  <th>Gender</th>
                  <th>PageViews</th>
                  <th>Share</th>
                </tr>
                <tr>
                  <td>Male</td>
                  <td>6,203,269</td>
                  <td>65%</td>
                </tr>
                <tr>
                  <td>Female</td> 
                  <td>6,203,269</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td> Other</td> 
                  <td>6,203,269</td>
                  <td>5%</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="audience-wrapper-right">
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
            <div className="audience-right-table">
              <table>
                <tr>
                  <th>Gender</th>
                  <th>PageViews</th>
                  <th>Share</th>
                </tr>
                <tr>
                  <td>Male</td>
                  <td>6,203,269</td>
                  <td>65%</td>
                </tr>
                <tr>
                  <td>Female</td>
                   <td>6,203,269</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td> Other</td> 
                  <td>6,203,269</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td> Other</td> 
                  <td>6,203,269</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td> Other</td> 
                  <td>6,203,269</td>
                  <td>5%</td>
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
