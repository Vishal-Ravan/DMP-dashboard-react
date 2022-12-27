import React from "react";
import Dropdown from "react-dropdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AudienceEngagementType = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <div className="audienceengagementtype">
        <div className="audiencegeography-wrapper">
          <div className="source-top">
            <div className="source-top-left">
              <h4>Audience Engagement </h4>
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
        </div>
        <div className="audienceengagementtype-tabs">
          <Tabs>
            <TabList>
              <Tab>Frequency</Tab>
              <Tab>Recency</Tab>
              <Tab>Time Spent </Tab>
              <Tab>Page Depth </Tab>
            </TabList>
            <TabPanel>
              <div className="audience-engagement-types-table">
                <div className="h3">Frequency of Sessions</div>
                <table>
                  <tr>
                    <th>Number of Sessions</th>
                    <th>Sessions</th>
                    <th></th>
                    <th>PageViews</th>
                    <th></th>
                    <th>Page Depth vs. Site Average</th>

                    <th></th>

                    <th></th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="audience-engagement-types-table-bottom">
                <div className="audience-engagement-types-table-bottom-head">
                  <div className="audience-engagement-types-table-bottom-head-left">
                    <h6>Top Engaging Client IDs :</h6>
                    <p>Contributing 200+ Sessions</p>
                  </div>
                  <div className="audience-engagement-types-table-bottom-head-right">
                    <p>Show Clients by:</p>
                    <Dropdown />
                  </div>
                </div>
                <table>
                  <tr>
                    <th></th>
                    <th>Client ID</th>
                    <th>Trend</th>
                    <th>Sessions</th>
                    <th>Total Time</th>
                    <th>Avg. Time</th>
                    <th>PageViews</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="audience-engagement-types-table">
                <div className="h3">Recency of Sessions</div>
                <table>
                  <tr>
                    <th>Days Since Last Sessions</th>
                    <th>Sessions</th>
                    <th></th>
                    <th>PageViews</th>
                    <th></th>
                    <th>Page Depth vs. Site Average</th>

                    <th></th>

                    <th></th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="audience-engagement-types-table-bottom">
                <div className="audience-engagement-types-table-bottom-head">
                  <div className="audience-engagement-types-table-bottom-head-left">
                    <h6>Top Engaging Client IDs :</h6>
                    <p>Active 15 -30 days ago</p>
                  </div>
                  <div className="audience-engagement-types-table-bottom-head-right">
                    <p>Show Clients by:</p>
                    <Dropdown />
                  </div>
                </div>
                <table>
                  <tr>
                    <th></th>
                    <th>Client ID</th>
                    <th>Trend</th>
                    <th>Sessions</th>
                    <th>Total Time</th>
                    <th>Avg. Time</th>
                    <th>PageViews</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="audience-engagement-types-table">
                <div className="h3">Time Spent</div>
                <table>
                  <tr>
                    <th>Session Durations</th>
                    <th>Sessions</th>
                    <th></th>
                    <th>PageViews</th>
                    <th></th>
                    <th>Page Depth vs. Site Average</th>

                    <th></th>

                    <th></th>
                  </tr>
                  <tr>
                    <td>0-10 Seconds</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="audience-engagement-types-table-bottom">
                <div className="audience-engagement-types-table-bottom-head">
                  <div className="audience-engagement-types-table-bottom-head-left">
                    <h6>Top Engaging Client IDs :</h6>
                    <p>Spending 181-600 Seconds per Session</p>
                  </div>
                  <div className="audience-engagement-types-table-bottom-head-right">
                    <p>Show Clients by:</p>
                    <Dropdown />
                  </div>
                </div>
                <table>
                  <tr>
                    <th></th>
                    <th>Client ID</th>
                    <th>Trend</th>
                    <th>Sessions</th>
                    <th>Total Time</th>
                    <th>Avg. Time</th>
                    <th>PageViews</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="audience-engagement-types-table">
                <div className="h3">Number of Pages Viewed per Sessions</div>
                <table>
                  <tr>
                    <th>Page Depth</th>
                    <th>Sessions</th>
                    <th></th>
                    <th>PageViews</th>
                    <th></th>
                    <th>Page Depth vs. Site Average</th>

                    <th></th>

                    <th></th>
                  </tr>
                  <tr>
                    <td> 1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>34,676</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                    <td>53,767</td>
                    <td>
                      <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="0"
                        max="50"
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="audience-engagement-types-table-bottom">
                <div className="audience-engagement-types-table-bottom-head">
                  <div className="audience-engagement-types-table-bottom-head-left">
                    <h6>Top Engaging Client IDs :</h6>
                    <p>Viewing 10 Pages per Sessions</p>
                  </div>
                  <div className="audience-engagement-types-table-bottom-head-right">
                    <p>Show Clients by:</p>
                    <Dropdown />
                  </div>
                </div>
                <table>
                  <tr>
                    <th></th>
                    <th>Client ID</th>
                    <th>Trend</th>
                    <th>Sessions</th>
                    <th>Total Time</th>
                    <th>Avg. Time</th>
                    <th>PageViews</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5454584854548545.54</td>
                    <td> graph</td>
                    <td>398</td>
                    <td>2:51:34</td>
                    <td>0.82 min</td>
                    <td>34,578</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AudienceEngagementType;
