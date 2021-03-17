import React from "react";

import "./styles/nosotros.css";

class Nosotros extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <h1 className="main-title">NOSOTROS</h1>
          <div className="container">
            {/* ***** */}
            <h2 className="secondary-title vision">vision</h2>
            {/* ****** */}
            <h3 className="third-title">
              A veces una palabra dice más que mil imágenes.
            </h3>
            <hr className="separator-line" />
            <p className="main-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              quod deserunt accusamus? Expedita praesentium nemo eius quos
              tempora Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="img-container">
              <img src="" alt="" />
            </div>
          </div>

          <div className="container-hero-img">
            <img src="" alt="" />
          </div>

          <div className="container">
            <h2 className="secondary-title">texto</h2>
            <h3 className="third-title">
              Lorem ipsum dolor sit amet, consectetur adipis
            </h3>
            <hr />
            <p className="main-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              quod deserunt accusamus? amet consectetur adipisicing elit.
            </p>
            <div className="container-img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nosotros;
