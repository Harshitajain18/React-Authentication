import React from 'react'
import '../../styles/ResetPassword.scss'
import { PrimaryButton } from '../common/Buttons'

export default function ResetPassword() {
  return (
    <div className='reset-box'>
      <div className='reset-heading'>
        <h2>Reset Password</h2>
        <p className='para'>Enter your new password.</p>
      </div>
      <div>
        <label className='label-for-password'>New Password</label>
        <input type='password' placeholder='Enter new password'></input>
        <label className='label-for-password'>Repeat New Password</label>
        <input type='password' placeholder='Repeat new password'></input>
      </div>
      <div className='resetpassbtn' >
       <PrimaryButton buttonText={"Reset Password"}></PrimaryButton>
      </div>
    </div>
  )
}
