import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../common/Buttons";
import { Link} from "react-router-dom";
import "../../styles/SignUp.scss";

function SignUp() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpass, setRepeatPass] = useState("");

  const HandleSignUp = () => {
    if (name === "" || surname === "" || email === "" || password === "" || repeatpass === "") {
      setIsDisabled(true);
    }
    else {
      setIsDisabled(false);
    }
  }

  // const navigate = useNavigate();
  // const CreateAcc = () => {
  //   navigate('/emailVerification')
  // }

  useEffect(() => {
    HandleSignUp();
  }, [name, surname, email, password, repeatpass]);

  const handlename = (event) => {
    setName(event.target.value);
  }

  const handlesurname = (event) => {
    setSurname(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlepass = (event) => {
    setPassword(event.target.value);
  }

  const handleRePass = (event) => {
    setRepeatPass(event.target.value);
  }

  function SendUser(){
    let data={name: name, surname: surname, email: email, password: password, repeatpass: repeatpass}
    fetch("http://localhost:8080/api/auth/signup",{
      method:'POST',
      headers:{
        "Accept":'application/json',  // You expect the server to return JSON.
        "Content-Type":"application/json" // You are sending JSON data to the server.
      },
      body:JSON.stringify(data)  // Converts the data to a JSON string
    }).then((result)=>{
      result.json().then((response)=>{
        console.log("response",response);
      })
    })
  }

  return (
    <>
      <div className="signup-box">
        <div className="signup-heading">
          <h2>Welcome to Harshita App</h2>
          <p className="para">Create a free account by filling data below.</p>
        </div>

        <div className="signup-form">
          <div className="name-surname" >
            <div>
              <label>Name</label>
              <input type="text" value={name} onChange={handlename} placeholder="Enter name"></input>
            </div>
            <div>
              <label>Surname</label>
              <input type="text" value={surname} onChange={handlesurname} placeholder="Enter surname"></input>
            </div>
          </div>

          <div className="mail&pass">
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmail} placeholder="name@gmail.com"></input>
            <label>Password</label>
            <input type="password" value={password} onChange={handlepass} placeholder="Enter password"></input>
            <label>Repeat password</label>
            <input type="password" value={repeatpass} onChange={handleRePass} placeholder="Repeat password"></input>
            <input type="checkbox"></input>
            <label>I agree with terms & conditions</label>
          </div>
          <PrimaryButton buttonText={"Create Account"} isDisabled={isDisabled} handleClick={SendUser}></PrimaryButton>
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
