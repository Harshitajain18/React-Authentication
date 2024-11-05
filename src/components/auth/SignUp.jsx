import React from "react";
import { PrimaryButton } from "../common/Buttons";
import { Link } from "react-router-dom";
import '../../styles/SignUp.scss';
function SignUp() {
  return (
    <>
      <div className="signup-box">
      <div className="signup-heading">
        <h2>Welcome to Harshita App</h2>
        <p className="para">Create a free account by filling data below.</p>
      </div>
      
      <div className="signup-form">
          <div className="Name-label">
          <label>Name</label> <label>Surname</label>
          </div>
            <div className="name-input"> 
          <input type="text" placeholder="Enter name"></input>
          <input type="text" placeholder="Enter surname"></input> 
            </div>
         
      
        <div className="mail&pass">
          <label>Email</label>
          <input type="email" placeholder="name@gmail.com"></input>
          <label>Password</label>
          <input type="password" placeholder="Enter password"></input>
          <label>Repeat password</label>
          <input type="password" placeholder="Repeat password"></input>
          <input type="checkbox"></input>
          <label>I agree with terms & conditions</label>
        </div>
        <div className="create-acc">
          <PrimaryButton buttonText={"Create Account"}></PrimaryButton>
        </div>
        <div className="already-have">
          <span>Already have an account?</span>
          <Link to="/">Log In</Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default SignUp;
