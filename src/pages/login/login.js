import React from 'react'
import './login.css'
import TextBox from '../../components/textfield/textField'
import Button from '../../components/button/Button'


export default function Login() {
    return (
        <div className='login-container'>
            <div className='login-content'>
                <div className='login-head'>
                    <h1>Login</h1>
                </div>

                <form className='login-fields'>

                    <div>
                        <img className='input-icons' src={require("../../assets/email.png")} alt="" />
                        <label>Email ID
                            <TextBox type={'email'} placeholder="Enter your Email ID here" />
                            <p className='bottom-label'>Don't have account register now?</p>
                        </label>
                    </div>
                    <div>

                        <img className='input-icons' src={require("../../assets/password.png")} alt="" />
                        <label>Email ID
                            <TextBox type={'password'} placeholder="Enter your password here" />
                            <p className='bottom-label'>Forget Password?</p>
                        </label>
                    </div>

                    <Button btype="primary" bTitle="Login" />

                    <div className='seprator'>
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>

                    <div className='login-footer'>
                        {/* <img className="google-icon" src={require("../../assets/google.png")} alt="" /> */}
                        <Button btype="btn-secondary" bTitle="Login with Google" />
                        <div>
                            <p>By clicking “Login with Google/Email/SAML” above,</p>
                            <p> you acknowledge that you have read and understood,</p>
                            <p> and agree to WebPrint's Term & Conditions & Privacy Policy</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
