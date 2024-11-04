import React from "react";

function PrimaryButton({buttonText, buttonIcon}) {
  return (
    <button className="">
        {buttonIcon}
        {buttonText}
    </button>
  )
}

function SecondaryButton({ButtonText}) {
  return (
    <button>
        {ButtonText}
    </button>
  )
}

export { PrimaryButton, SecondaryButton };
