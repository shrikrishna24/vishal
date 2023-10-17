import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="box">
          <img
            className="input-icons"
            src={require("../../assets/email.png")}
            alt=""
          />
          <span>Search</span>
        </div>
        <div className="welcome">
          <h3>Hey John, Welcome to Webprint</h3>
        </div>
        <div className="boxes">
          <div className="newbox"></div>
          <div className="newbox"></div>
          <div className="newbox"></div>
        </div>
      </div>
    </div>
  );
}
