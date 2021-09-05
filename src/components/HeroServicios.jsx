import React from "react";

//styles
import "./styles/HeroServicios.css";

//images
import cortador from "../images/Vajilla de Diseño - Aji.jpg";

function HeroServicios() {
  return (
    <>
      <div className="HeroServicios">
        <div className="text-Servicios">
          <div className="title-container-hero-Servicios">
            <h1 className="title-hero-Servicios">🌎THE BEST SERVICE</h1>
            <h1 className="title-hero-Servicios"> IN THE WORLD </h1>
          </div>
          <div className="text-container text-container-Servicios">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta
              itaque officiis ex recusandae est harum! Optio, quidem! Pariatur
              cum doloremque reiciendis nemo asperiores aliquid, itaque
              perspiciatis lo eaque fugiat fugit.
            </p>
            <br />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              amet consectetur adipisicing elit. Officiis similique!
            </p>

            <div className="icon-container"></div>
          </div>
        </div>
        <div className="contaner-img-Servicios">
          <img className="img-Servicios" src={cortador} alt="" />
        </div>
      </div>

      {/* <div className="HeroServicios">
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
      </div> */}
    </>
  );
}

export default HeroServicios;
