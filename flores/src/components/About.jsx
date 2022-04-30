import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <React.Fragment>
      <header>
        <div className="about">
          <img src="assets\img\about.png" alt="Senpay Academy" />
          <h2>Sobre el instituto</h2>
          <div className="descripcion">
            <h3>
              Desde el primer día, Senpai fue una institución educativa que
              intentó romper paradigmas y diferenciarse de instituciones más
              tradicionales. Hacemos foco en tecnología, innovación, cambio, el
              futuro y las grandes cosas que pueden llevarse a cabo por las
              humanidad si nos convertimos en la mejor versión de nosotros
              mismos.
            </h3>
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
          <Link to="/signin"> Login</Link>
          <Link to="/signup"> Registro</Link>
          <Link to="/contacto"> Contacto</Link>
          <Link to="/about"> About</Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
