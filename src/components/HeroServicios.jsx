import React from "react";

//styles
import "./styles/HeroServicios.css";

//images

function HeroServicios() {
  return (
    <>
      <div className="HeroServicios">
        <div className="contaner-img-nosotros">
          <img
            className="img-Servicios"
            src="https://dummyimage.com/650x800/ffffff/000000"
            alt=""
          />
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
