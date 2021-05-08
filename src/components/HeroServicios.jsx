import React from "react";

//styles
import "./styles/HeroServicios.css";

//images
import camion from "../images/MX-5.jpg";

function HeroServicios() {
  return (
    <>
      <div className="HeroServicios">
        <div className="text-servicios">
          <div className="title-container-hero-servicios">
            <span className="title">SERVICIO CORTE</span>
            <span className="secondary-title">
              Los mejores Cortes Del Mundo
            </span>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta
              itaque officiis ex recusandae est harum! Optio, quidem! Pariatur
              cum doloremque reiciendis nemo asperiores aliquid, itaque
              perspiciatis lo eaque fugiat fugit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              similique! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Officiis similique! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officiis similique! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Officiis similique!
            </p>
          </div>
        </div>
        <div className="contaner-img-servicios">
          <img className="img-servicios" src={camion} alt="" />
        </div>
      </div>
    </>
  );
}

export default HeroServicios;
