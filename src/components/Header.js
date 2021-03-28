import React from "react";
// import Logo from "../Images/logo San Diego.svg";

import "./styles/header.css";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineInstagram, AiFillFacebook, AiFillHome } from "react-icons/ai";
// import { HiUserGroup } from "react-icons/hi";
import { ImTruck } from "react-icons/im";
import { TiGroup } from "react-icons/ti";
import { HiMail } from "react-icons/hi";
class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="container-button-hamburger">
            <Link to="">
              <GiHamburgerMenu />
            </Link>
          </div>
          <div className="container-logo">
            <Link className="header__brand-logo" to="">
              <img className="logo" src="#" alt="Logo San Diego" />
            </Link>
          </div>

          <div className="container-options">
            <Link to="/" className="options">
              <AiFillHome className="icon-header" />
              Inicio
            </Link>
            <Link to="/Nosotros" className="options">
              <TiGroup className="icon-header" />
              {/* <HiUserGroup /> */}
              Nosotros
            </Link>
            <Link to="/Servicios" className="options">
              <ImTruck className="icon-header" />
              Servicios
            </Link>
            <Link to="/Contactos" className="options">
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
