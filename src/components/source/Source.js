import React from "react";
import Dropdown from "react-dropdown";
import { PieChart, Pie, Cell } from "recharts";

const Source = () => {
  const datas = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <div className="source">
        <div className="source-top">
          <div className="source-top-left">
            <h4>Source</h4>
          </div>
          <div className="source-top-left-time">
            <p>Time Period</p>

            <div className="source-top-left-btn-drop">
              <div className="source-top-left-btn">
                <button>Pulse</button>
                <button>Historic</button>
              </div>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
          </div>
        </div>
        <div className="source-bottom-first">
          <div className="source-bottom-first-left">
            <h4>Traffic Source</h4>
            <div className="source-bottom-first-left-chart">
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
            </div>
          </div>
          <div className="source-bottom-first-right">
            <div className="source-bottom-first-right-matric">
              <p>Source Matric</p>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
            <table>
              <tr>
                <th>Channels</th>
                <th>PageViews</th>
                <th></th>
                <th>Links</th>
                <th>Visitors</th>
                <th>Avg Time</th>
                <th>Total Time Spent</th>
              </tr>
              <tr>
                <td>Direct</td>
                <td>6,54,545</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
                <td>269</td>
                <td>34,576</td>
                <td>2:56</td>
                <td>34,576</td>
              </tr>
              <tr>
                <td>Direct</td>
                <td>6,54,545</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
                <td>269</td>
                <td>34,576</td>
                <td>2:56</td>
                <td>34,576</td>
              </tr>{" "}
              <tr>
                <td>Direct</td>
                <td>6,54,545</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
                <td>269</td>
                <td>34,576</td>
                <td>2:56</td>
                <td>34,576</td>
              </tr>{" "}
              <tr>
                <td>Direct</td>
                <td>6,54,545</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
                <td>269</td>
                <td>34,576</td>
                <td>2:56</td>
                <td>34,576</td>
              </tr>{" "}
              <tr>
                <td>Direct</td>
                <td>6,54,545</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
                <td>269</td>
                <td>34,576</td>
                <td>2:56</td>
                <td>34,576</td>
              </tr>{" "}
              <tr>
                <td>Direct</td>
                <td>6,54,545</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
                <td>269</td>
                <td>34,576</td>
                <td>2:56</td>
                <td>34,576</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="source-bottom-second">
          <h6>Top Refferal Source</h6>
          <div className="audience-interest-wrpper">
            <table>
              <tr>
                <th>Sr No.</th>
                <th>Domain</th>
                <th>Channel</th>

                <th>Avg Time</th>
                <th>Visitors</th>
                <th>Links</th>
                <th>Page Views</th>
                <th></th>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>internal</td>
                <td>456</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>internal</td>
                <td>456</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>internal</td>
                <td>456</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>internal</td>
                <td>456</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>internal</td>
                <td>456</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>internal</td>
                <td>456</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>internal</td>
                <td>456</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>internal</td>
                <td>456</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>34,578</td>
                <td>
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </td>
              </tr>{" "}
              <tr>
                <td>1</td>
                <td>sub.domain.com</td>
                <td>internal</td>
                <td>456</td>
                <td>34,578</td>
                <td>34,578</td>
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

export default Source;
