import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/signin";


function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function mortadela2() {
    let user = document.querySelector("#user").value;
    let password = document.querySelector("#password").value;
    const { data } = await axios.post(API_URL, {
      username:user,
      password,
    });
    return data;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let datos = mortadela2()
    datos.then( (res)=> {
      if (res.id) setIsSubmitted(true);
    }).catch((res) =>  {
      setErrorMessages({ name: "pass", message: "Datos incorrectos"});
    })
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input id="user" type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input id="password" type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div><h1>Inicio de sesión exitoso</h1></div> : renderForm}
      </div>
    </div>
  );
}


export default Login;