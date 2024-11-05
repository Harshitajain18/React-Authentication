import React from 'react'
import { SecondaryButton } from '../common/Buttons'
import { FcOk } from "react-icons/fc";
import "../../styles/ResetDone.scss";
import { useNavigate } from 'react-router-dom';

export default function ResetDone() {
  const navigate = useNavigate();
  const SignIn =()=>{
    navigate('/')
  }
  return (
    <div className='reset-pass-done-box'> 
    <div className='success-icon'> 
    <FcOk size={40} />
    </div>
        <h3 className='success'>Password Reset Done</h3>
        <p className='reset-para'>Now you can access you account. </p>
        <div className='Sign-in'>
        <SecondaryButton ButtonText={"Sign In"} handleClick={SignIn}></SecondaryButton>
        </div>
    </div>
  )
}