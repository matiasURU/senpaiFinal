import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:8080/api/auth/signup";

async function crearCuenta() {
  let user = document.querySelector("#user").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let rol = document.querySelector("#rol").value;
  axios.post(API_URL, {
    username: user,
    email,
    password,
    rol,
  });
}

const Registro = () => {
  return (
    <React.Fragment>
      <header>
        <div style={{ width: "80%", margin: "0 auto", marginTop: "15px" }}>
          <div
            style={{
              width: "50%",
              backgroundColor: "#AEBEA1",
              margin: "0 auto",
              padding: "10px",
            }}
          >
            <div>
              <h1>Crear cuenta </h1>
            </div>
            <div>
              <form>
                <label>
                  Usuario:
                  <input id="user" type="text" name="user" />
                </label>
                <br></br>
                <label>
                  Correo electrónico:
                  <input id="email" type="email" name="email" />
                </label>
                <br></br>
                <label>
                  Contraseña:
                  <input id="password" type="password" name="password" />
                </label>
                <br></br>
                <label>
                  Rol:
                  <select name="rol" id="rol">
                    <option value="user">Usuario</option>
                    <option value="admin">Administrador</option>
                  </select>
                </label>
                <button onClick={() => crearCuenta()}>Registrarse</button>
                <div className="boton2">
                  <h2>
                    <Link to="/signin"> Iniciar sesión</Link>
                  </h2>
                </div>
              </form>
            </div>
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

export default Registro;
