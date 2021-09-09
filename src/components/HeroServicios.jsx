import React from "react";

//styles
import "./styles/HeroServicios.css";

//images
// import cortador from "../images/Vajilla de Diseño - Aji.jpg";
import cortador from "../images/db3c672ad9d0d24c6035129f5b994553.jpg";

function HeroServicios() {
  return (
    <>
      <div className="HeroServicios">
        <div className="contaner-img-nosotros">
          <img className="img-nosotros" src={cortador} alt="" />
        </div>
        <div className="text-nosotros text-servicios">
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
