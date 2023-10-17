import React from "react";
import Routing from "../routing/routing";
import Sidebar from "../components/sidebar/sidebar";
import "./content.css";
export default function Content() {
  return (
    <div className="container">

      <Sidebar />

      <div className="content">
        <Routing />
      </div>
    </div>
  );
}
