import React from "react";
import { MdEmail } from "react-icons/md";
import "../../styles/EmailVerification.scss";
import { PrimaryButton } from "../common/Buttons";

export default function EmailVerification() {
  return (
    <div className="email-box">
      <div className="email-icon">
        <MdEmail size={40} />
      </div>
      <div className="email-heading">
        <h3>Email Verification</h3>
        </div>
        <div>
        <p className="para">
          We have sent you an email verification to <b className="bold">name@gmail.com </b>. If
          you didn’t receive it, click the button below.
        </p>
        </div>
        <div className="re-send-btn"> 
        <PrimaryButton buttonText={"Re-Send Email"}></PrimaryButton>
        </div>
    </div>
  );
}
