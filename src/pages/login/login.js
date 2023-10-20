import React from "react";
import "./login.css";
import TextBox from "../../components/textfield/textField";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  const handleForget = () => {
    navigate("/forgetpsw");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-head">
          <h1>Login</h1>
        </div>

        <form className="login-fields">
          <div>
            <img
              className="input-icons"
              src={require("../../assets/email.png")}
              alt=""
            />
            <label>
              Email ID
              <TextBox type={"email"} placeholder="Enter your Email ID here" />
              <p onClick={handleSignup} className="bottom-label">
                Don't have account register now?
              </p>
            </label>
          </div>
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
                placeholder="Enter your password here"
              />
              <p onClick={handleForget} className="bottom-label">
                Forget Password?
              </p>
            </label>
          </div>

          <Button
            handleClick={handleLogin}
            btype="btn-primary"
            bTitle="Login"
          />

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="login-footer">
            <Button
              btype="btn-secondary"
              bTitle="Login with Google"
              btnImg={require("../../assets/google.png")}
              btnImgSize={"20px"}
            />
            <div>
              <p>
                By clicking “Login with Google/Email/SAML” above you acknowledge
                that you have read and understood and agree to WebPrint's Terms
                & Conditions & Privacy Policy
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
