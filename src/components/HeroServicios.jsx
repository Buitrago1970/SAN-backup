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
              Carnes Online Colombia ofrece el servicio que te permite acceder a
              una gama amplia de carnes de varias marcas. Para ello, solo tienes
              que registrarte, elegir los productos que consideres de tu interés
              y enviarlos a tu casa.
            </p>
          </div>
          <div className="paragraph-container">
            <p className="sub-title-s-v"> ¿Cómo funciona?</p>
            <div className="second-paragraph-container paragraph-container">
              <p className="text-container-servicios">
                Para ello, solo tienes que escoger los productos que deseas
                comprar, elegir el medio de pago y dar el pago.
              </p>
            </div>
          </div>
        </div>
        <div className="div2">
          <div className="container-img">
            <img src="https://dummyimage.com/600x400" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroServicios;
