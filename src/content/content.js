import React from "react";
import Routing from "../routing/routing";
import Sidebar from "../components/sidebar/sidebar";
import "./content.css";
export default function Content() {
  return (
    <div className="container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content">
        <Routing />
      </div>
    </div>
  );
}
