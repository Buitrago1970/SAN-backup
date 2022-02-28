import * as React from "react";

import "./styles/HeroServicios.css";

function HeroServicios() {
  return (
    <>
      <h1 className="main-title-contact">Servicios</h1>
      <div className="parent">
        <div className="div1">
          <div className="paragraph-container">
            <p className="sub-title-s-v">Carnes Online Colombia </p>
            <p className="text-container-servicios">
              Te ofrecemos acceder a una gama amplia de carnes de varias marcas. Para ello, solo tienes
              que registrarte, elegir los productos que consideres de tu interés
              y nosotros nos encargaremos de llevarlos a tu casa.
            </p>
          </div>
        </div>
        <div className="div2">
          <div className="container-img">
            <img src="https://san-ecommerce.s3.amazonaws.com/AdobeStock_415583574_Preview+copia.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroServicios;
