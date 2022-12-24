import React from 'react'
import Sidebar from './components/Sidebar'
import { Route, Switch } from "react-router-dom";
import Topbar from './components/Topbar';
import Overview from './components/Overview';
import LIveView from './components/liveview/LIveView';
import AudienceSegment from './components/audience/AudienceSegment';
import Source from './components/source/Source';
import Content from './components/content/Content';

const App = () => {
  return (
    <>
    <div className="app">
      <div className="app-left">
      <Sidebar/>

      </div>
      <div className="app-right">
        <Topbar/>
      <Switch>
        <Route exact path="/" component={Overview} /> 
        <Route path='/live-view' component={LIveView} />
        <Route path='/audience' component={AudienceSegment} />
        <Route path='/source' component={Source} />
        <Route path='/content' component={Content} />



      </Switch>
      </div>
    </div>
    </>
  )
}

export default App