import * as react from "react";
import "./styles/contacto.css";
import contactImg from "../images/hand.gif";
const Contactos = () => {
  return (
    <>
      <div className="main-container">
        <h1 className="main-title-contact">Contactos</h1>
        <div className="contact-container">
          <div className="contaner-img-contact" align="center">
            <img className="img-contact" src={contactImg} alt="" />
          </div>
          <div className="contact-text-container">
            <div className="info-contact">
              <div className="info info-messages">
                <h3 className="tittle-info">Contacto</h3>
                <li>
                  <ul className="mail">sandiego@sandiego.com</ul>
                  <ul>555-889-635</ul>
                  <ul>+98 878-985-965</ul>
                </li>
              </div>
              <div className="info info-carears">
                <h3 className="tittle-info">Trabaja Con Nosotros</h3>
                <li>
                  <ul className="mail">sandiego.carears@sandiego.com</ul>
                </li>
              </div>
              <div className="info info-social-media">
                <h3 className="tittle-info">Social Media</h3>
                <li>
                  <ul>Instagram</ul>
                  <ul>Facebook</ul>
                  <ul>Youtube</ul>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactos;
