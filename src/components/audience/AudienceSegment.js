import React from "react";
import Dropdown from "react-dropdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Chart } from "react-google-charts";
//   dropdown ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
const options = ["Online", "two", "three"];
const defaultOption = options[0];

// charts$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


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
  legend: 'none',
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
const pieOptions1 = {
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
  legend: 'none',
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


const AudienceSegment = () => {
  return (
    <>
      <div className="overview">
        <div className="overview-top">
          <div className="audience-segment-top-left">
            <h3 className="h3first">Audience Segments</h3>
          </div>
          <div className="audience-segment-top-middle">
            <p className="p1">Custom Details</p>
            <input type="text" placeholder="search here" />
          </div>
          <div className="audience-segment-top-right right-align">
            <div className="overview-top-right-content">
              <p className="p1">Time Period</p>
              <Tabs>
                <TabList>
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
                </TabList>
              </Tabs>
            </div>
            <div className="overview-top-right-content">
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
          </div>
        </div>
        <div className="audience-segment-bottom">
          <div className="audience-segment-bottom-head">
            <h4 className="h6first">All Segments by Gender</h4>
            <div className="audience-segment-bottom-head-right right-align">
              <p className="p4">Key Metric:</p>
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
          </div>

          <div className="overview-tabs multiple-tabs">
            <Tabs>
              <TabList>
                <p className="p4">Show Audience by :</p>
                <Tab>Gender</Tab>
                <Tab>Age Group</Tab>
                <Tab>Income Level</Tab>
                <Tab>Audience Type</Tab>
                <Tab>Source</Tab>
              </TabList>
              <TabPanel>
                <div className="audience-segment-bottom-table">
                  <div className="audience-segment-bottom-table-left">
                    <div className="audience-segment-bottom-table-left-head">
                      <p className="p1"> Interst Segments</p>
                    </div>
                    <div className="audience-segment-bottom-table-left-data">
                      <div className="audience-srno">1</div>
                      <div className="audience-drop">
                        <Dropdown
                          options={options}
                          value={defaultOption}
                          placeholder="Select an option"
                        />
                      </div>
                    </div>
                    
                  </div>
                  <div className="audience-segment-bottom-table-middle border-both">
                    <div className="audience-segment-bottom-table-middle-head">
                      <h4 className="p5">My Network</h4>
                    </div>
                    <div className="audience-segment-bottom-table-middle-gendertype">
                      <p className="p1">visitor</p>
                      <p className="p1">Gender</p>
                    </div>
                    <div className="audience-segment-bottom-table-middle-datas">
                      <div className="middle-datas-num">
                        <h6>45,565 </h6>
                      </div>
                      <div className="middle-datas-range">
                        <input
                          type="range"
                          id="vol"
                          name="vol"
                          min="0"
                          max="50"
                        />
                      </div>
                      <div className="middle-datas-graph">
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
                          height={"100px"}
                          legend_toggle
                        />
                      </div>
                    </div>
                  </div>
                  <div className="audience-segment-bottom-table-middle ">
                    <div className="audience-segment-bottom-table-middle-head">
                      <h4 className="p5">My Network</h4>
                    </div>
                    <div className="audience-segment-bottom-table-middle-gendertype">
                      <p className="p1">visitor</p>
                      <p className="p1">Gender</p>
                    </div>
                    <div className="audience-segment-bottom-table-middle-datas">
                      <div className="middle-datas-num">
                        <h6>45,565 </h6>
                      </div>
                      <div className="middle-datas-range">
                        <input
                          type="range"
                          id="vol"
                          name="vol"
                          min="0"
                          max="50"
                        />
                      </div>
                      <div className="middle-datas-graph">
                      <Chart
                          chartType="PieChart"
                          data={[
                            ["Item", "Numbers"],
                            ["Item 1", 5000],
                            ["Item 2", 20000],
                            ["Item 3", 6000],
                            ["Item 4", 6000],
                          ]}
                          options={pieOptions1}
                          graph_id="PieChart1"
                          width={"100%"}
                          height={"100px"}
                          legend_toggle
                        />
                      </div>
                    </div>
                    </div>
                </div>
              </TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudienceSegment;
