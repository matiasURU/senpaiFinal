import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import emailjs from "emailjs-com";

export default class Contacto extends Component {
  render() {
    function enviarEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_s7g5oss",
          "template_0b5fvd8",
          e.target,
          "uST0MNy8FYRGXeYab"
        )
        .then((res) => {
          console.log(res);
        });
    }
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
              <h1>Formulario de Contacto</h1>
              <hr />
              <form onSubmit={enviarEmail}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>
                      <b>Nombre</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>
                      <b>Email</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    <b>Mensaje</b>
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "50%",
                    margin: "0 auto",
                    marginTop: "20px",
                  }}
                >
                  Enviar Correo
                </button>
              </form>
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
            <Link to="/"> Home</Link>
            <Link to="/signup"> Registro</Link>
            <Link to="/about"> About</Link>
            <Link to="/contacto"> Contacto</Link>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://senpaiacademy.com/uy/"
            >
              Senpai Academy
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
