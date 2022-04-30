import React from "react";
import { Link } from "react-router-dom";

export default function Flores() {
  return (
    <React.Fragment>
      <header>
        <div className="titulo">
          <h1>Especies de la flora nativa de Uruguay</h1>
        </div>
        <div className="plantas">
          <img
            src="assets\img\chirca de monte.jpg"
            alt="chirca de monte en flor"
          />
          <h2>Chirca de monte</h2>
          <p>
            Dodonaea viscosa, llamada popularmente candela o jarilla entre otros
            muchos nombres vernáculos, es una especie de la familia de las
            sapindáceas. Tiene una distribución cosmopolita en regiones
            tropicales, subtropicales y templadas de África América, Asia
            Meridional y Australasia.
          </p>
        </div>
        <div className="plantas">
          <img src="assets/img/espinillo.jpg" alt="espinillo en flor" />
          <h2>Espinillo</h2>
          <p>
            El Parkinsonia aculeata es un árbol de la subfamilia
            Caesalpinioideae, dentro de la familia de las leguminosas. Es nativo
            del sudoeste de Estados Unidos (oeste de Tejas y sur de Arizona),
            México y Sudamérica (Argentina, Uruguay, Paraguay, Bolivia, Ecuador
            y Perú.
          </p>
        </div>
        <div className="plantas">
          <img src="assets/img/guayabo.jpg" alt="guayabo en flor" />
          <h2>Guayabo</h2>
          <p>
            Acca sellowiana, también denominado feijoa, guayabo, guayaba,
            guayabo del Brasil, o guayabo del Pais. Originario de las tierras
            altas del sur de Brasil, Argentina y Uruguay.
          </p>
        </div>
        <div className="plantas">
          <img
            src="assets/img/jazmín del Uruguay.jpg"
            alt="jazmín del Uruguay en flor"
          />
          <h2>Jazmín del Uruguay</h2>
          <p>
            El "palo cruz" o "jazmín del Uruguay" es una especie botánica de las
            Rubiaceae. Es un arbusto de 3-5 m de altura, ramas opuestas en cruz.
            Tiene follaje persistente a semipersistente. Florece en la primavera
            y en verano y frutifica a fin de verano.
          </p>
        </div>
        <div className="plantas">
          <img
            src="assets/img/pezuña de vaca.jpg"
            alt="pezuña de vaca en flor"
          />
          <h2>Pezuña de vaca</h2>
          <p>
            La pezuña de vaca (Bauhinia forficata, antes B. candicans) es un
            árbol de la familia de las fabáceas, se distribuye principalmente
            por Argentina, Brasil, Paraguay, México, Uruguay, Perú y Colombia.
          </p>
        </div>
        <div className="plantas">
          <img
            src="assets/img/plumerillo rojo.jpg"
            alt="plumerillo rojo en flor"
          />
          <h2>Plumerillo rojo</h2>
          <p>
            Calliandra tweediei (borla de obispo, plumerillo rojo, arbusto de la
            llama, zucará) es un arbusto nativo de Brasil, Uruguay, Argentina y
            Paraguay utilizado como ornamental en muchas partes del mundo debido
            a sus bellas flores de color rojo intenso.
          </p>
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
