import React from "react";

import "./styles/header.css";

import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineInstagram, AiFillFacebook, AiFillHome } from "react-icons/ai";
import { ImTruck } from "react-icons/im";
import { TiGroup } from "react-icons/ti";
import { HiMail } from "react-icons/hi";

import logo from "../images/logo.svg";
class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <>
        <div className="header">
          <div className="container-logo">
            <Link className="header__brand-logo" title="A" to="">
              <img className="logo" src={logo} alt="Logo San Diego" />
            </Link>
          </div>

          <div className="container-options menu">
            <Link to="/" title="E" className="options">
              <AiFillHome className="icon-header" />
              Inicio
            </Link>
            <Link to="/Nosotros" title="I" className="options">
              <TiGroup className="icon-header" />
              Nosotros
            </Link>
            <Link to="/Servicios" title="O" className="options">
              <ImTruck className="icon-header" />
              Servicios
            </Link>
            <Link to="/Contactos" title="U" className="options">
              <HiMail className="icon-header" />
              Contacto
            </Link>
          </div>

          {/* social network  */}
          <div className="container-social-network">
            <Link to="#" className="social-network">
              <AiFillFacebook />
            </Link>
            <Link to="#" className="social-network">
              <AiOutlineInstagram />
            </Link>
          </div>

          <div className="container-shopping-cart">
            <Link to="#!">
              <i className="fas fa-shopping-cart"></i>
              <FiShoppingCart />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
