import React from 'react'
import { Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { PrimaryButton} from "../common/Buttons";
import "../../styles/ForgotPass.scss";

function ForgotPass() {
 
  return (
    <div>
        <div className='forgotbox'>
          <div>
            <Link to="/"><GoArrowLeft size={30} color='black' /></Link>
          </div>
          <div>
            <h3>Forgot Password</h3>
            <p className='para'>Enter your email address for which account you want to reset your password.</p>
          </div>
          <div>
            <label>Email</label>
            <input type='email' placeholder='name@email.com'></input>
          </div>
          <div className="ResetPasswordButton">
          <PrimaryButton buttonText={"Reset Password"}></PrimaryButton>
        </div>
        </div>
    </div>
  )
}

export default ForgotPass