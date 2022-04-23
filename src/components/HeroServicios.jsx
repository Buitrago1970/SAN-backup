import * as React from "react";

import "./styles/HeroServicios.css";
import imagen from "../images/1000_F_77371138_aaIwd02RKf65nRuUrNzReJVViPWuepI4 copia.png"

function HeroServicios() {
  return (
    <>
      <h1 className="main-title-contact">Servicios</h1>
      <div className="parent">
        <div className="div1">
          <div className="paragraph-container">
            <p className="sub-title-s-v"> Surticarnes San-Diego </p>
            <p className="text-container-servicios">
              Te ofrecemos acceder a una gama amplia de carnes de varias marcas. Para ello, solo tienes
              que registrarte, elegir los productos que consideres de tu interés
              y nosotros nos encargaremos de llevarlos a tu casa.
            </p>
          </div>
        </div>
        <div className="div2">
          <div className="container-img">
            <img src={imagen}alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroServicios;
