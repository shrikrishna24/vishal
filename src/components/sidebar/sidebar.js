import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-navlinks">
        <div>
          <img src={require("../../assets/sidebar/dashboard.png")} width="20px" height="20px" alt="" />
          <p>Dashboard</p>
        </div>
        <div>
          <img src={require("../../assets/sidebar/suitcase.png")} width="20px" height="20px" alt="" />
          <p>Job list</p>
        </div>
        <div>
          <img src={require("../../assets/sidebar/printer.png")} width="20px" height="20px" alt="" />
          <p>Printer list</p>
        </div>
        <div>
          <img src={require("../../assets/sidebar/shopping-cart.png")} width="20px" height="20px" alt="" />
          <p>Store</p>
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
