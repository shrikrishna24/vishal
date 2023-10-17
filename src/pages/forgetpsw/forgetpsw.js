import React from "react";
import "./forgetpsw.css";
import TextBox from "../../components/textfield/textField";
import Button from "../../components/button/Button";

export default function Forgetpsw() {
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

          <Button btype="primary" bTitle="forgetpsw">
            <span>Continue</span>
          </Button>

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="forgetpsw-footer">
            <Button btype="btn-secondary" bTitle="forgetpsw with Google">
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
