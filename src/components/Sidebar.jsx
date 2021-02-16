import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <a className="navbar-link" href="/">
          About Alex Kretchmer
        </a>
      </div>
      <div className="navbar-item">
        <a className="navbar-link" href="/">
          UFO html scraper
        </a>
      </div>
      <div className="navbar-item">
        <a className="navbar-link" href="/">
          NASA machine learning
        </a>
      </div>
      <div className="navbar-item">
        <a className="navbar-link" href="/">
          The truth is out there
        </a>
      </div>
      <div className="navbar-item">
        <a className="navbar-link" href="/">
          OSU data science masters
        </a>
      </div>
      <div className="navbar-item">
        <a className="navbar-link" href="/">
          Data, daddy, adidas
        </a>
      </div>
      <div className="navbar-item">
        <a className="navbar-link" href="/">
          Mapping corona
        </a>
      </div>
      <div className="navbar-item">
        <a className="navbar-link" href="/">
          Soccer, jersey data vis
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
