import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import cuberoot from "./source/cuberoot.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <CDBSidebar className="CDBSidebar">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <img src={cuberoot} width="150" alt="" />
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to="/">
            <CDBSidebarMenuItem icon="binoculars" iconSize="lg">Overview</CDBSidebarMenuItem>
          </Link>
          <Link to="/live-view">
            <CDBSidebarMenuItem icon="eye" iconSize="lg">
              Live View
            </CDBSidebarMenuItem>
          </Link>
          <Link to="/audience">
            {" "}
            <CDBSidebarMenuItem icon="users"iconSize="lg">
              Audience
            </CDBSidebarMenuItem>
          </Link>
          <Link to="/audience-first">
            {" "}
            <CDBSidebarMenuItem icon="user"iconSize="lg">
              Audiencefirst
            </CDBSidebarMenuItem>
          </Link>
          <Link to="/geo-graphy">
            <CDBSidebarMenuItem icon="map-pin" iconSize="lg">GeoGraphy</CDBSidebarMenuItem>
          </Link>
          <Link to="/source">
            <CDBSidebarMenuItem icon="database" iconSize="lg">Source</CDBSidebarMenuItem>
          </Link>
          <Link to="/engagement">
            <CDBSidebarMenuItem icon="people-arrows" iconSize="lg">Engagement</CDBSidebarMenuItem>
          </Link>
          <Link to="/content">
            <CDBSidebarMenuItem icon="file" iconSize="lg">Content</CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "10px 2px",
            fontSize: "16px",
            fontWeight: "600",
            color: "#666",
          }}
        >
          © 2023 Cuberoot Technologies Pvt. Ltd.
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;
