import React from "react";
import "./forgetpsw.css";
import TextBox from "../../components/textfield/textField";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

export default function Forgetpsw() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/login");
  };

  const handleReset = () => {
    navigate("/resetpsw");
  };

  return (
    <div className="forgetpsw-container">
      <div className="forgetpsw-content">
        <div className="forgetpsw-head">
          <h1>Forgot your password?</h1>
          <h4>
            Don't worry, we'll send you a message to help you reset your
            passsword.
          </h4>
        </div>

        <form className="forgetpsw-fields">
          <div>
            <img
              className="input-icons"
              src={require("../../assets/email.png")}
              alt=""
            />
            <label>
              Email ID
              <TextBox
                type={"email"}
                placeholder="Enter your Registered Email ID here"
              />
            </label>
          </div>

          <Button handleClick={handleReset} btype="primary" bTitle="Continue" />

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="forgetpsw-footer">
            <Button
              handleClick={handleReturn}
              btype="secondary"
              bTitle="Return To Login"
              btnImg={require("../../assets/enter.png")}
              btnImgSize={"20px"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
