import React from "react";
import Sidebar from "./components/Sidebar";
import { Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar";
import Overview from "./components/Overview";
import LIveView from "./components/liveview/LIveView";
import AudienceSegment from "./components/audience/AudienceSegment";
import Source from "./components/source/Source";
import Content from "./components/content/Content";
import AudienceSegmentFirst from "./components/audiencesegmentfirst/AudienceSegmentFirst";
import AudienceGeography from "./components/audience/audiencegeography/AudienceGeography";
import AudienceEngagementType from "./components/audienceengagementtype/AudienceEngagementType";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app-left">
          <Sidebar />
        </div>
        <div className="app-right">
          <Topbar />
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route path="/live-view" component={LIveView} />
            <Route path="/audience" component={AudienceSegment} />
            <Route path="/source" component={Source} />
            <Route path="/content" component={Content} />
            <Route path="/engagement" component={AudienceEngagementType} />
            <Route path="/geo-graphy" component={AudienceGeography} />
            <Route path="/audience-first" component={AudienceSegmentFirst} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
