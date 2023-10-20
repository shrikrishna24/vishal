import React from "react";
import "./addprinter.css";
import Card from "../../components/card/card";
import TextField from "../../components/textfield/textField";
import Button from "../../components/button/Button";
import TextBox from "../../components/textfield/textField";

export default function Addprinter() {
  return (
    <div className="addprinter-container">
      <div className="addprinter-left">
        <div className="search-bar">
          <img
            src={require("../../assets/search.png")}
            alt=""
            height="20px"
            width="20px"
          />
          <TextField name="Search" placeholder="Search" type="text" />
        </div>

        <Card ctype="card-primary">
          <div className="job-heading">
            <div>
              <h4>Recent printer</h4>
            </div>
            <div>
              <h4>View all</h4>
            </div>
          </div>
          <table className="job-table">
            <thead>
              <th>Job Name</th>
              <th>Job ID</th>
              <th>File Name</th>
              <th>Filament used</th>
              <th>Time required</th>
            </thead>
            <tbody>
              <tr>
                <td>Job</td>
                <td>Filename</td>
                <td>ID</td>
                <td>10gm</td>
                <td>2hrs</td>
              </tr>
              <tr>
                <td>Job</td>
                <td>Filename</td>
                <td>ID</td>
                <td>10gm</td>
                <td>2hrs</td>
              </tr>
              <tr>
                <td>Job</td>
                <td>Filename</td>
                <td>ID</td>
                <td>10gm</td>
                <td>2hrs</td>
              </tr>
              <tr>
                <td>Job</td>
                <td>Filename</td>
                <td>ID</td>
                <td>10gm</td>
                <td>2hrs</td>
              </tr>
              <tr>
                <td>Job</td>
                <td>Filename</td>
                <td>ID</td>
                <td>10gm</td>
                <td>2hrs</td>
              </tr>
            </tbody>
          </table>
        </Card>
        <Button
          btype="secondary"
          bTitle="Add Printer"
          btnImg={require("../../assets/addprinter.png")}
          btnImgSize={"25px"}
        />
        <Card ctype="card-primary">
          <div className="selection">
            <div>
              <label>Printr Name</label>
              <TextBox type={"text"} placeholder="Enter Printer name" />
            </div>
            <div>
              <label>Printer Type</label>
              <TextBox type={"text"} placeholder="" />
            </div>
            <div>
              <label>Printer Volume</label>
              <TextBox type={"text"} placeholder="" />
            </div>
          </div>
        </Card>
      </div>

      <div className="addprinter-right">
        <Card ctype="card-primary">
          <img src={require("../../assets/bell.png")} alt="" />
          <img src={require("../../assets/profile-user.png")} alt="" />
        </Card>

        <Card ctype="card-primary"></Card>

        <Card ctype="card-primary"></Card>
      </div>
    </div>
  );
}
