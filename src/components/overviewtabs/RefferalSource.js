import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const RefferalSource = () => {
  const datas = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <div className="refferal-source">
        <div className="refferal-source-wrapper">
          <div className="refferal-source-wrapper-left">
            <h6>Traffic Source</h6>
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
          <div className="refferal-source-wrapper-Right">
            <h6>Top Reffering Domain</h6>

            <table>
              <tr>
                <th>Sr No.</th>
                <th>Domain</th>
                <th>Links</th>
                <th>Shares</th>
                <th>Page Views</th>
                <th></th>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>269</td>
                <td>-</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>269</td>
                <td>-</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>269</td>
                <td>-</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>269</td>
                <td>-</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>269</td>
                <td>-</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>269</td>
                <td>-</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>269</td>
                <td>-</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>269</td>
                <td>-</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>269</td>
                <td>-</td>
                <td>34,578</td>
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
