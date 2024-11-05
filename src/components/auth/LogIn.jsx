import React from "react";
import { PrimaryButton, SecondaryButton } from "../common/Buttons";
import "../../styles/LogIn.scss";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
 
  const handleSignup = () => {
    navigate("/SignupPage");
  };

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
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
        
        <PrimaryButton buttonText={"Log In"} />
        
        <div className="createaccbtn">
          <PrimaryButton
            buttonText={"Create New Account"}
            handleClick={handleSignup}
          />
        </div>
      </div>
    </>
  );
}
export default LogIn;
