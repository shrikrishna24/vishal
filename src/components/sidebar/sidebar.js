import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-content">
      <div className="sidebar-navlinks">
        <div>
          <img src={require("../../assets/sidebar/dashboard.png")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/sidebar/suitcase.png")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/sidebar/printer.png")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/sidebar/shopping-cart.png")} alt="" />
        </div>
      </div>
      <div className="sidebar-logouts">
        <div>
          <img src={require("../../assets/sidebar/settings.png")} alt="" />
        </div>
        <div>
          <img src={require("../../assets/sidebar/logout.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
