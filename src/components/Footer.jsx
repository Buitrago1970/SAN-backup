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
          <div className="cotainer-links-footer">
 <Link to="/">Res</Link>
            <Link to="/">Cerdo</Link>
            <Link to="/">Pollo</Link>
          </div>
            </div>
           
          </div>

          <div className="container-footer-options">
            <div className="footer-options">
              <h1>Acerca de Nosotros</h1>
          <div className="cotainer-links-footer"> 
<Link to="/Nosotros">Nosotros</Link>
            {/* <Link to="/QyD">Preguntas Frecuentes</Link>
            <Link to="/TyC">Terminos y Condiciones</Link> */}
          </div>
            </div>
            
          </div>

          <div className="container-footer-options">
            <div className="footer-options">
              <h1>Contactos</h1>
          <div className="cotainer-links-footer">
<Link to="/Contactos">Contacto</Link>
            <p className="p-contact">
              +57 310 570 6238
              <br />
              De 9:00-AM a 9:00-PM Lunes y viernes
              <br />
              De 9:00-AM a 7:00-PM Sábado
            </p>
          </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
