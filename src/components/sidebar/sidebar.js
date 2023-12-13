import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleJoblist = () => {
    navigate("/addjobs");
  };

  const handleDashboard = () => {
    navigate("/home");
  };

  const handlePrinters = () => {
    navigate("/addprinter");
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-navlinks">
        <div onClick={handleDashboard}>
          <img
            src={require("../../assets/sidebar/dashboard.png")}
            width="20px"
            height="20px"
            alt=""
          />
          <p>Dashboard</p>
        </div>
        <div onClick={handleJoblist}>
          <img
            src={require("../../assets/sidebar/suitcase.png")}
            width="20px"
            height="20px"
            alt=""
          />
          <p>Job list</p>
        </div>
        <div onClick={handlePrinters}>
          <img
            src={require("../../assets/sidebar/printer.png")}
            width="20px"
            height="20px"
            alt=""
          />
          <p>Printer list</p>
        </div>
        <div>
          <img
            src={require("../../assets/sidebar/shopping-cart.png")}
            width="20px"
            height="20px"
            alt=""
          />
          <p>Store</p>
        </div>
      </div>

      <div className="sidebar-logouts">
        <div>
          <img src={require("../../assets/sidebar/settings.png")} alt="" />
          <p>Settings</p>
        </div>
        <div onClick={handleLogout}>
          <img src={require("../../assets/sidebar/logout.png")} alt="" />
          <p>logout</p>
        </div>
      </div>
    </div>
  );
}
