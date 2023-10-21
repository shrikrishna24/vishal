import React from "react";
import "./resetpsw.css";
import TextBox from "../../components/textfield/textField";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

export default function Resetpsw() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login");
  };

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

          <Button
            handleClick={handleContinue}
            btype="primary"
            bTitle="Continue"
          />

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="resetpsw-footer">
            <Button
              handleClick={handleContinue}
              btype="secondary"
              bTitle="Return to Login"
              btnImg={require("../../assets/enter.png")}
              btnImgSize={"20px"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
