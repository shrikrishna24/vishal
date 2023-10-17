import React from "react";
import "./home.css";
import Card from "../../components/card/card";


export default function Home() {
  return (
    <div className="home-container">

      <div className="home-left">
        <Card ctype='card-primary'>
          <img
            className="input-icons"
            src={require("../../assets/email.png")}
            alt=""
          />
          <span>Search</span>
        </Card>

        <div className="home-heading">
          <h3>Hey John, Welcome to Webprint</h3>
        </div>

        <div className="data-card">
          <Card ctype='card-primary'></Card>
          <Card ctype='card-primary'></Card>
          <Card ctype='card-primary'></Card>
        </div>

        <Card ctype='card-primary '>
          <div>
            <h4>October</h4>
          </div>
        </Card>

        <Card ctype='card-primary'>
          <div className="job-heading">
            <div>
              <h4>Recent Jobs</h4>
            </div>
            <div>
              <h4>View all</h4>
            </div>
          </div>
        </Card>

      </div>

      <div className="home-right">

        <Card ctype='card-primary'>
          <img
            src={require("../../assets/email.png")}
            alt=""
          />
          <img
            src={require("../../assets/email.png")}
            alt=""
          />
        </Card>

        <Card ctype='card-primary'></Card>

        <Card ctype='card-primary'></Card>
      </div>
    </div>
  );
}
