import React, { useState } from "react";
import "./signup.css";
import TextBox from "../../components/textfield/textField";
import Button from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("http://localhost:5173/signup", {
        email,
        name,
        password,
      });
      alert("Registration Successful. Now you can log in.");
      if (response.data) {
        console.log(response.data);
        navigate("/home");
      }
    } catch (error) {
      alert(
        "Registration failed. The email is already in use or there was an error."
      );
      console.error("Registration error:", error);
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-head">
          <h1>Sign Up</h1>
        </div>
        <form className="signup-fields" onSubmit={registerUser}>
          <div>
            <img
              className="input-icons"
              src={require("../../assets/email.png")}
              alt=""
            />
            <label>
              Email ID
              <TextBox
                inputName="email"
                value={email}
                handleChange={(e) => setEmail(e)}
                type={"email"}
                placeholder="Enter your Email ID here"
              />
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
              <TextBox
                inputName="name"
                value={name}
                handleChange={(e) => setName(e)}
                type={"text"}
                placeholder="Enter your Username here"
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
              Password
              <TextBox
                inputName="password"
                value={password}
                handleChange={(e) => setPassword(e)}
                type={"password"}
                placeholder="Enter your password here"
              />
            </label>
          </div>
          <Button
            type="submit"
            value="register"
            btype="primary"
            bTitle="Sign up"
            onClick={registerUser}
          />

          <div className="alreadylogin">
            Have an Account?
            <Link to="/login" className="login-link">
              Log In
            </Link>
          </div>

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="signup-footer">
            <Button
              btype="secondary"
              bTitle="Signup with Google"
              btnImg={require("../../assets/google.png")}
              btnImgSize={"20px"}
            />
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
