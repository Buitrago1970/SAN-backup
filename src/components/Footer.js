import React from "react";

import { Link } from "react-router-dom";
import "./styles/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="container-footer">
        <div className="footer">
          <div className="container-footer-options">
            <div className="footer-options">
              <h1>Nuestros Productos</h1>
              <h1 className="plus-button">+</h1>
            </div>
            <Link to="#">Res</Link>
            <Link to="#">Cerdo</Link>
            <Link to="#">Pollo</Link>
          </div>

          <div className="container-footer-options">
            <div className="footer-options">
              <h1>Acerca de Nosotros</h1>
              <h1 className="plus-button">+</h1>
            </div>
            <Link to="/Nosotros">Nosotros</Link>
            <Link to="/QyD">Preguntas Frecuentes</Link>
            <Link to="/TyC">Terminos y Condiciones</Link>
          </div>

          <div className="container-footer-options">
            <div className="footer-options">
              <h1>Contactos</h1>
              <h1 className="plus-button">+</h1>
            </div>
            <Link to="/Contacto">Contacto</Link>
            <p className="p-contact">
              +57 314 230 2050
              <br />
              De 9:00 a 23:00 Lunes y viernes
              <br />
              De 9:00 a 21:00 Sábado
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
