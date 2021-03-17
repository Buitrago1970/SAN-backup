import React from "react";
import { Link } from "react-router-dom";

import "./styles/contacto.css";

class Contactos extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <h1 className="main-title">Contacto</h1>
          <div className="contact-container">
            <p className="mail-contact">
              <Link to="/Contactos">tienda@sandiego.com</Link>
            </p>
            <p>6746457</p>
            <p>+57 314 230 2050</p>
            <p>Horario de Atención</p>
            <p>De lunes a sabado: 9:00 - 18:00 hrs.</p>
          </div>
        </div>
      </>
    );
  }
}

export default Contactos;
