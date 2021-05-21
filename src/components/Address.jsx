import React from "react";
import "./styles/Address.css";
export default function Address() {
  return (
    <>
      <div className="container-address">
        <div className="title-container">
          <div className="secondary-title">Opciones de envío a</div>
        </div>
        <div className="addresscambiar">
          <div className="address">
            <p className="cart-address-info">Calle165 A #54c-95</p>
            <p className="cart-address-subtitle-info">
              Apartamento 401 - San cipriano - Suba, Bogotá D.C.
            </p>
          </div>
          <div className="modify-address">
            <a className="modify" href="">
              Modificar ubicación
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
