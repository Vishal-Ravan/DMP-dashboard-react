import React from "react";
import Dropdown from "react-dropdown";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
//   dropdown ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
const options = ["one", "two", "three"];
const defaultOption = options[0];

// charts$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const AudienceSegment = () => {
  return (
    <>
      <div className="audience-segment">
        <div className="audience-segment-top">
          <div className="audience-segment-top-left">
            <h3>Audience Segments</h3>
          </div>
          <div className="audience-segment-top-middle">
            <p>Custom Details</p>
            <input type="text" placeholder="search here" />
          </div>
          <div className="audience-segment-top-right">
            <div className="audience-segment-top-right-time">
              <p>Time Period</p>
              <div className="audience-segment-top-right-time-drop">
              <div className="audience-segment-top-right-time-btn">
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
        </div>
        <div className="audience-segment-bottom">
          <div className="audience-segment-bottom-head">
            <h4>All Segments by Gender</h4>
            <div className="audience-segment-bottom-head-right">
              <p>Key Metric:</p>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div className="audience-segment-bottom-audience">
            <p>Show Audience by :</p>
            <button>Gender</button>
            <button>Age Group</button>
            <button>Income Level</button>
            <button>Audience Type</button>
            <button>Source</button>
          </div>
          <div className="audience-segment-bottom-table">
            <div className="audience-segment-bottom-table-left">
              <div className="audience-segment-bottom-table-left-head">
                Interst Segments
              </div>
              <div className="audience-segment-bottom-table-left-data">
                <div className="audience-srno">1</div>
                <div className="audience-drop">
                  <p>Online Shopping</p>
                </div>
              </div>
              <div className="audience-segment-bottom-table-left-data">
                <div className="audience-srno">1</div>
                <div className="audience-drop">
                  <p>Online Shopping</p>
                </div>
              </div>
              <div className="audience-segment-bottom-table-left-data">
                <div className="audience-srno">1</div>
                <div className="audience-drop">
                  <p>Online Shopping</p>
                </div>
              </div>
              <div className="audience-segment-bottom-table-left-data">
                <div className="audience-srno">1</div>
                <div className="audience-drop">
                  <p>Online Shopping</p>
                </div>
              </div>
              <div className="audience-segment-bottom-table-left-data">
                <div className="audience-srno">1</div>
                <div className="audience-drop">
                  <p>Online Shopping</p>
                </div>
              </div>
            </div>
            <div className="audience-segment-bottom-table-middle">
              <div className="audience-segment-bottom-table-middle-head">
                <h4>My Network</h4>
              </div>
              <div className="audience-segment-bottom-table-middle-gendertype">
                <p>visitor</p>
                <p>Gender</p>
              </div>
              <div className="audience-segment-bottom-table-middle-datas">
                <div className="middle-datas-num">
                  <h6>45,565 </h6>
                </div>
                <div className="middle-datas-range">
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </div>
                <div className="middle-datas-graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="audience-segment-bottom-table-middle-datas">
                <div className="middle-datas-num">
                  <h6>45,565 </h6>
                </div>
                <div className="middle-datas-range">
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </div>
                <div className="middle-datas-graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div> <div className="audience-segment-bottom-table-middle-datas">
                <div className="middle-datas-num">
                  <h6>45,565 </h6>
                </div>
                <div className="middle-datas-range">
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </div>
                <div className="middle-datas-graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div> <div className="audience-segment-bottom-table-middle-datas">
                <div className="middle-datas-num">
                  <h6>45,565 </h6>
                </div>
                <div className="middle-datas-range">
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </div>
                <div className="middle-datas-graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div> <div className="audience-segment-bottom-table-middle-datas">
                <div className="middle-datas-num">
                  <h6>45,565 </h6>
                </div>
                <div className="middle-datas-range">
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </div>
                <div className="middle-datas-graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="audience-segment-bottom-table-middle">
              <div className="audience-segment-bottom-table-middle-head">
                <h4>My Network</h4>
              </div>
              <div className="audience-segment-bottom-table-middle-gendertype">
                <p>visitor</p>
                <p>Gender</p>
              </div>
              <div className="audience-segment-bottom-table-middle-datas">
                <div className="middle-datas-num">
                  <h6>45,565 </h6>
                </div>
                <div className="middle-datas-range">
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </div>
                <div className="middle-datas-graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="audience-segment-bottom-table-middle-datas">
                <div className="middle-datas-num">
                  <h6>45,565 </h6>
                </div>
                <div className="middle-datas-range">
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </div>
                <div className="middle-datas-graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div> <div className="audience-segment-bottom-table-middle-datas">
                <div className="middle-datas-num">
                  <h6>45,565 </h6>
                </div>
                <div className="middle-datas-range">
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </div>
                <div className="middle-datas-graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div> <div className="audience-segment-bottom-table-middle-datas">
                <div className="middle-datas-num">
                  <h6>45,565 </h6>
                </div>
                <div className="middle-datas-range">
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </div>
                <div className="middle-datas-graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div> <div className="audience-segment-bottom-table-middle-datas">
                <div className="middle-datas-num">
                  <h6>45,565 </h6>
                </div>
                <div className="middle-datas-range">
                  <input type="range" id="vol" name="vol" min="0" max="50" />
                </div>
                <div className="middle-datas-graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AudienceSegment;
