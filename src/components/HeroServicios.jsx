import * as React from "react";

import "./styles/HeroServicios.css";

function HeroServicios() {
  return (
    <>
      <h1 className="main-title-contact">Servicios</h1>
      <div className="parent">
        <div className="div1">
          <div className="paragraph-container">
            <p className="sub-title-s-v">lorem ipsum.</p>
            <p>
              texto texto texto texto texto texto texto texto texto texto texto
              texto texto texto texto texto texto texto texto texto texto texto
              texto texto texto texto texto texto texto texto texto texto{" "}
            </p>
          </div>
          <div className="paragraph-container">
            <p className="sub-title-s-v"> lorem ipsum.</p>
            <div className="second-paragraph-container paragraph-container">
              <div className="icon-paragraph-s-v">
                <img src="../images/crow.png" alt="" />
              </div>
              <p>lorem lorem lorem lorem lorem loren lorem lorem loren .</p>
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
