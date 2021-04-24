import React from "react";
import "./styles/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="container-footer">
        <div className="footer">
          <div className="container-footer-options">
            <div className="footer-options">
              <h1>Nuestros Productos</h1>
              <h1>+</h1>
            </div>
            {/* <a href="#">Res</a>
          <a href="#">Cerdo</a>
          <a href="#">Pollo</a> */}
          </div>
          <hr className="indicator-line" />
          <div className="container-footer-options">
            <div className="footer-options">
              <h1>Acerca de Nosotros</h1>
              <h1>+</h1>
            </div>
            {/* <a href="#">Nosotros</a>
          <a href="#">Preguntas Frecuentes</a>
          <a href="#">Terminos y Condiciones</a> */}
          </div>
          <hr className="indicator-line" />
          <div className="container-footer-options">
            <div className="footer-options">
              <h1>Contactos</h1>
              <h1>+</h1>
            </div>
            {/* <a href="#">Contacto</a> */}
          </div>
          <hr className="indicator-line" />
          <p>
            +57 314 230 2050
            <br />
            De 9:00 a 23:00 Lunes y viernes
            <br />
            De 9:00 a 21: Sábado
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
