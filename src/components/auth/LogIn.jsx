import React from "react";
// import SignUp from "./SignUp";
import { PrimaryButton, SecondaryButton } from "../common/Buttons";
import "../../styles/LogIn.scss";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <>
      <div className="box">
        <div className="box__welcome">
          <h3 className="welcome">Welcome to Harshita App</h3>
          <p className="nextline">
            Enter your credentials to access the account
          </p>
        </div>
        <div className="box__form">
          <div className="email">
            <label for="email">Email </label>
            <input type="email" id="email" placeholder="name@email.com"></input>
          </div>
          <div className="password">
            <label>Password </label>
            <input type="password" placeholder="Enter password"></input>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label>Remember me</label>
          </div>
          <div className="link">
            <Link to="/forgotpass">Forgot password?</Link>
          </div>
        </div>
        <div className="loginbutton">
          <PrimaryButton buttonText={"Log In"}></PrimaryButton>
        </div>
        <div className="createaccbtn">
          <SecondaryButton ButtonText={"Create New Account"} />
        </div>
      </div>
      {/* <SignUp /> */}
    </>
  );
}
export default LogIn;
