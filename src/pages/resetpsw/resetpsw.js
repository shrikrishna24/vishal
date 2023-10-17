import React from "react";
import "./resetpsw.css";
import TextBox from "../../components/textfield/textField";
import Button from "../../components/button/Button";

export default function Resetpsw() {
  return (
    <div className="resetpsw-container">
      <div className="resetpsw-content">
        <div className="resetpsw-head">
          <h1>Reset Password</h1>
        </div>

        <form className="resetpsw-fields">
          <div>
            <img
              className="input-icons"
              src={require("../../assets/password.png")}
              alt=""
            />
            <label>
              Password
              <TextBox
                type={"password"}
                placeholder="Enter your New Password here"
              />
            </label>
          </div>
          <div>
            <img
              className="input-icons"
              src={require("../../assets/password.png")}
              alt=""
            />
            <label>
              Confirm Password
              <TextBox
                type={"password"}
                placeholder="Confirm your New Password here"
              />
            </label>
          </div>

          <Button btype="primary" bTitle="resetpsw">
            <span>Continue</span>
          </Button>

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="resetpsw-footer">
            <Button btype="btn-secondary" bTitle="resetpsw with Google">
              <div className="enter-icon">
                <img src={require("../../assets/enter.png")} alt="" />
              </div>
              <span>
                <a href="/login">Return to Login</a>
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
