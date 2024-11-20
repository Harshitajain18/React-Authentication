import React from "react";

function PrimaryButton({buttonText, buttonIcon, handleClick, isDisabled, buttonClassName}) {
  return (
    <button className={`primary_button ${buttonClassName}`} disabled={isDisabled} onClick={handleClick}>
        {buttonIcon}
        {buttonText}
    </button>
  )
}

function SecondaryButton({ButtonText, handleClick}) {
  return (
    <button className="secondary_button" onClick={handleClick}>
        {ButtonText}
    </button>
  )
}

export { PrimaryButton, SecondaryButton };
