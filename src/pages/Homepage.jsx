import React from "react";
import { PrimaryButton } from "../components/common/Buttons";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Homepage</h1>
      <PrimaryButton
        buttonText={"Login"}
        handleClick={() => navigate("/login")}
        buttonClassName={"fit-width"}
      />
    </>
  );
}

export default Homepage;
