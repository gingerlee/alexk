import React from "react";
import "./Layout.scss";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
import Shaka from "../../img/shaka.svg";

const Layout = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
        <img className="shaka-svg" src={Shaka} alt="" />
      </div>
      <div className="content">
        <Welcome />
      </div>
    </div>
  );
};

export default Layout;
