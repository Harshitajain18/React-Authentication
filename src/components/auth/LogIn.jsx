import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../common/Buttons";
import "../../styles/LogIn.scss";
import { Link, useNavigate } from "react-router-dom";
// const [password, setPassword] = useState("Abc@12");

function LogIn() {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSignup = () => {
    navigate("/SignupPage");
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const submitLoginForm = () => {
    console.log("emailValue: ", emailValue);
    console.log("passwordValue: ", passwordValue);
  };

  const handleButtonDisable = () => {
    if(emailValue==="" || passwordValue===""){
      setIsDisabled(true);
    } else{
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    handleButtonDisable();
    // console.log("isDisabled: ", isDisabled);
  }, [emailValue, passwordValue]);

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
            <label htmlFor="email">Email</label>
            <input
              value={emailValue}
              onChange={handleEmailChange}
              type="email"
              id="email"
              name="email"
              placeholder="name@email.com"
            ></input>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={passwordValue}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Enter password"
            ></input>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label>Remember me</label>
          </div>
          <div className="link">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>

        <PrimaryButton
          buttonText={"Log In"}
          isDisabled={isDisabled}
          handleClick={submitLoginForm}
        />

        <div className="createaccbtn">
          <PrimaryButton
            buttonText={"Create New Account"}
            handleClick={handleSignup}
            isDisabled={false}
          />
        </div>
      </div>
    </>
  );
}
export default LogIn;
