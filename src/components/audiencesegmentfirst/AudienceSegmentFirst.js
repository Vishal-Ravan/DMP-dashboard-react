import Dropdown from "react-dropdown";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Summary from "./Summary";
import AudienceEngagement from "./AudienceEngagement";
import AudienceTraffic from "./AudienceTraffic";

const AudienceSegmentFirst = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <>
      <div className="audiencesegmentfirst">
        <div className="source-top">
          <div className="source-top-left">
            <h4>Audience Demography - Gender</h4>
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

        <div className="audiencesegmentfirst-wrapper-tab">
          <Tabs>
            <TabList>
              <Tab>Summary</Tab>
              <Tab>Engagment</Tab>
              <Tab>Traffic Performance</Tab>
            </TabList>

            <TabPanel>
              <Summary />
            </TabPanel>
            <TabPanel>
                <AudienceEngagement/>
            </TabPanel>
            <TabPanel>
              <AudienceTraffic/>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AudienceSegmentFirst;
