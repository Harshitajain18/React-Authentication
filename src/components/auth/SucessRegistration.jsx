import React from "react";
import { FcOk } from "react-icons/fc";
import { PrimaryButton } from "../common/Buttons";
import '../../styles/SuccessRegistration.scss';

export default function SucessRegistration() {
  return (
    <div className="sucess-register-box">
      <div className="success-icon">
        <FcOk size={40} />
      </div>
      <div>
        <h3 className="success-registration">Successfully Registration</h3>
        <p className="para">
          Hurray! You have successfully created your account. Enter the app to
          explore all it’s features.
        </p>
      </div>
      <div className="enterapp-btn">
        <PrimaryButton buttonText={"Enter the App"}></PrimaryButton>
      </div>
    </div>
  );
}
