import React from "react";

//styles
import "./styles/HeroServicios.css";

//images
// import cortador from "../images/Vajilla de Diseño - Aji.jpg";
import cortador from "../images/ce5588446d1bf9d11d1ee22e25519200.jpg";

function HeroServicios() {
  return (
    <>
      <div className="HeroServicios">
        <div className="contaner-img-Servicios">
          <img className="img-Servicios" src={cortador} alt="" />
        </div>
        <div className="text-Servicios">
          <div className="title-container-hero-Servicios">
            <h1 className="title-hero-Servicios">The Best Service</h1>
          </div>
          <hr />
          <div className="text-container-Servicios">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta
              itaque officiis ex recusandae est harum! Optio, quidem! Pariatur
              cum doloremque reiciendis nemo asperiores aliquid, itaque
              perspiciatis lo eaque fugiat fugit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroServicios;
