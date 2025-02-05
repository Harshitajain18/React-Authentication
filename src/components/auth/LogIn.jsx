import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../common/Buttons";
import "../../styles/LogIn.scss";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  // const [loggedin, setLoggedIn] =useState();

  const handleSignup = () => {
    navigate("/SignupPage");
  };

  const handleEmailChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };

  // const handlePasswordChange = (event) => {
  //   const newPassword = event.target.value;
  //   if (newPassword.length <= 9) {
  //     setpassword(newPassword);
  //   } else {
  //     console.log("Password must not exceed 9 characters.");
  //   }
  // };

  const handleButtonDisable = () => {
    if (email === "" || password === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  function submitLoginForm() {
    let data = { email, password }
    // let data = { email: email, password: password };

    fetch("http://localhost:8080/api/auth/login", {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((response) => {  
        console.log("response", response);
      })
    })
  }


  useEffect(() => {
    handleButtonDisable();
    // console.log("isDisabled: ", isDisabled);
  }, [email, password]);

  return (
    <>
      <div className="box">
        <div className="box__welcome">
          <h3 className="welcome">Welcome to the App</h3>
          <p className="nextline">
            Enter your credentials to access the account
          </p>
        </div>
        {/* <form onSubmit={handleLogin}>
          <button type="submit">Login</button>
        </form> */}
        <div className="box__form">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              value={email}
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
              value={password}
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
