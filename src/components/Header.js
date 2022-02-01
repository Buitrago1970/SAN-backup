import * as React from "react";
import { useContext } from "react";

import "./styles/header.css";

import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Appcontext from "../context/Appcontext";

const Header = () => {
  const {
    state: { cart , user },
  } = useContext(Appcontext);
  return (
    <>
      <div className="header">
        <div className="container-logo">
          <Link className="header__brand-logo" title="" to="">
            {/* <img className="logo" src={logo} alt="Logo San Diego" /> */}
            <p>twenty</p>
          </Link>
        </div>

        <div className="container-options menu">
          <Link to="/" title="Inicio" className="options">
            Inicio
          </Link>
          <Link to="/Nosotros" title="Nosotros" className="options">
            Nosotros
          </Link>
          <Link to="/Servicios" title="Servicios" className="options">
            Servicios
          </Link>
          <Link to="/Contactos" title="Contacto" className="options">
            Contacto
          </Link>
        </div>
        <div className="">
          {user[0] ? ( <Link to="/userprofile" title="Inicio" className="options">
            {user[0].username}
            </Link> ) : null}
        </div>
        <div className="container-shopping-cart">
          <Link className="shopping-cart" to="/carrocompras">
            <FiShoppingCart className="shopping-cart-icon" />
            <div className="shopping-cart-length">
              {cart.length > 0 && cart.length}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
