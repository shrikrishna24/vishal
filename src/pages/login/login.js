import React, { useState } from "react";
import "./login.css";
import TextBox from "../../components/textfield/textField";
import Button from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("http://localhost:5173/login", {
        email,
        password,
      });
      // Assuming your server sends back a token upon successful login
      if (response.data.token) {
        // Store the token in localStorage or a global state management system
        localStorage.setItem("token", response.data.token);
        // Redirect to the home page or dashboard
        navigate("/home");
      } else {
        alert("Login failed. Invalid credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. There was an error.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-head">
          <h1>Login</h1>
        </div>

        <form className="login-fields" onSubmit={loginUser}>
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
                placeholder="Enter your Email ID here"
                value={email}
                handleChange={(value) => setEmail(value)}
              />
              <Link to={"/signup"}>
                <p className="bottom-label">Don't have account register now?</p>
              </Link>
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
                handleChange={(value) => setPassword(value)}
                placeholder="Enter your password here"
                value={password}
              />
              <p className="bottom-label">Forget Password?</p>
            </label>
          </div>

          <Button
            btype="primary"
            type="submit"
            value="login"
            bTitle="Login"
            onClick={loginUser}
          />

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="login-footer">
            <Button
              btype="secondary"
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
