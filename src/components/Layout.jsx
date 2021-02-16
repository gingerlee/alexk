import React from "react";
import "./Layout.scss";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";

const Layout = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Welcome />
      </div>
    </div>
  );
};

export default Layout;
