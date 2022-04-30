import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:8080/api/auth/signin";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function ingresar() {
    let user = document.querySelector("#user").value;
    let password = document.querySelector("#password").value;
    const { data } = await axios.post(API_URL, {
      username: user,
      password,
    });
    return data;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let datos = ingresar();
    datos
      .then((res) => {
        if (res.id) setIsSubmitted(true);
      })
      .catch((res) => {
        setErrorMessages({
          name: "pass",
          message: "Datos incorrectos o usuario no registrado",
        });
      });
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input id="user" type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input id="password" type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div>
          <h2>
            <Link to="/signup"> Registrarse</Link>
          </h2>
        </div>
      </form>
    </div>
  );

  return (
    <React.Fragment>
      <header>
        <div className="app">
          <div className="login-form">
            <div className="title">Iniciar sesión</div>
            {isSubmitted ? (
              <div>
                <h1>Inicio de sesión exitoso</h1>
              </div>
            ) : (
              renderForm
            )}
          </div>
        </div>
      </header>
      <aside>
        <img src="assets/img/Wikipedia-logo.svg" alt="wikipedia logo" />
        <h2>Flora de Uruguay</h2>
        <h3>
          Lista de especies florales que se pueden encontrar en Uruguay y que
          son nativas de la región.
        </h3>
        <form
          action="https://es.wikipedia.org/wiki/Anexo:Especies_de_la_flora_nativa_de_Uruguay"
          id="info"
        >
          <button>Aprender más</button>
        </form>
      </aside>
      <nav>
        <div>
          <Link to="/home"> Home</Link>
          <Link to="/signin"> Iniciar sesión</Link>
          <Link to="/contacto"> Contacto</Link>
          <Link to="/about"> Sobre nosotros</Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Login;
