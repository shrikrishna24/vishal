import React from "react";
import "./signup.css";
import TextBox from "../../components/textfield/textField";
import Button from "../../components/button/Button";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-head">
          <h1>Sign Up</h1>
        </div>

        <form className="signup-fields">
          <div>
            <img
              className="input-icons"
              src={require("../../assets/email.png")}
              alt=""
            />
            <label>
              Email ID
              <TextBox type={"email"} placeholder="Enter your Email ID here" />
            </label>
          </div>
          <div>
            <img
              className="input-icons"
              src={require("../../assets/user.png")}
              alt=""
            />
            <label>
              Username
              <TextBox type={"text"} placeholder="Enter your Username here" />
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
            </label>
          </div>

          <Button btype="primary" bTitle="signup">
            <span>Sign Up</span>
          </Button>

          <div className="alreadylogin">
            Have an Account?<a href="/login">Log In</a>
          </div>

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="signup-footer">
            <Button btype="btn-secondary" bTitle="signup with Google">
              <div className="google-icon">
                <img src={require("../../assets/google.png")} alt="" />
              </div>
              <span>Signup with Google</span>
            </Button>
            <div>
              <p>
                By clicking “signup with Google/Email/SAML” above you
                acknowledge that you have read and understood and agree to
                WebPrint's Terms & Conditions & Privacy Policy
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
