import React from "react";

import "./styles/servicios.css";

class Servicios extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <h1 className="main-title">SERVICIOS</h1>

          <div className="fila-centrada">
            <div className="img-container">
              <img className="img" src="" alt="" />
            </div>

            <div className="container">
              <h3 className="secondary-title">TITULO PARRAFO</h3>
              <p className="parrafo-servicios">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a
                ullam ipsam, consectetur voluptatibus eligendi corporis
                consequuntur fugiat voluptates totam ipsum repellendus accusamus
                et, provident labore quam voluptatum enim! Possimus.
              </p>
            </div>
          </div>

          <div className="container-midle">
            <h3 className="secondary-title tite-services">TITULO PARRAFO</h3>
            <p className="parrafo-servicios paragraph-midle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              dolor, amet numquam ducimus optio inventore quae laboriosam atque
              commodi, odit consectetur quo necessitatibus quidem quaerat autem
              ut delectus aliquid labore.
            </p>
          </div>

          <div className="fila-centrada">
            <div className="img-container">
              <img className="img" src="" alt="" />
            </div>

            <div className="container">
              <h3 className="secondary-title">TITULO PARRAFO</h3>
              <p className="parrafo-servicios">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a
                ullam ipsam, consectetur voluptatibus eligendi corporis
                consequuntur fugiat voluptates totam ipsum repellendus accusamus
                et, provident labore quam voluptatum enim! Possimus.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Servicios;
