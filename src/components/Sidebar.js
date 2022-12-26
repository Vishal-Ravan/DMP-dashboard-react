import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import cuberoot from "./source/cuberoot.png"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
      <CDBSidebar className="CDBSidebar">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}><img src={cuberoot} width='150' alt=''/></CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
          <Link to='/'><CDBSidebarMenuItem icon="th-large">Overview</CDBSidebarMenuItem></Link>
            <Link to='/live-view'><CDBSidebarMenuItem icon="sticky-note">Live View</CDBSidebarMenuItem></Link>
            <Link to='/audience'> <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Audience
            </CDBSidebarMenuItem></Link>
            <Link to='/audience-first'> <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Audiencefirst
            </CDBSidebarMenuItem></Link>
          <Link to='/geo-graphy'><CDBSidebarMenuItem icon="th-large">GeoGraphy</CDBSidebarMenuItem></Link>

          <Link to='/source'><CDBSidebarMenuItem icon="th-large">Source</CDBSidebarMenuItem></Link>
          <Link to='/content'><CDBSidebarMenuItem icon="th-large">Engagement</CDBSidebarMenuItem></Link>

          <Link to='/content'><CDBSidebarMenuItem icon="th-large">Content</CDBSidebarMenuItem></Link>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  );
};

export default Sidebar;