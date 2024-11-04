import React from "react";
import { FcOk } from "react-icons/fc";
import "../../styles/ResetSuccess.scss";
export default function ResetSuccess() {
  return (
    <div className="success-box">
      <div className="success-icon">
        <FcOk size={40} />
      </div>
      <div>
        <h2 className="success">Successfully Sent</h2>
        <p className="para">
          We have sent instructions on how to reset your password to <b className="bold">name@gmail.com </b>
         . Please follow the instructions from the email.
        </p>
      </div>
    </div>
  );
}
