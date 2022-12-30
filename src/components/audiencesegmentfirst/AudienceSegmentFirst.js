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
      <div className="overview">
        <div className="source-top overview-top">
          <div className="source-top-left">
            <h4 className="h3first">Audience Demography - Gender</h4>
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

        <div className="audiencesegmentfirst-wrapper-tab multiple-tabs">
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
              <AudienceEngagement />
            </TabPanel>
            <TabPanel>
              <AudienceTraffic />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AudienceSegmentFirst;
