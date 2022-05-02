import * as React from "react";
import { useState, useContext } from "react";

import "./styles/header.css";

import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import {AiOutlineUser} from 'react-icons/ai'
import Appcontext from "../context/Appcontext";
import PopUpLogin from "../components/PopUpLogin";
import logo from "../images/TORO 1.png"

const Header = () => {
  const {
    state: { cart , user },
  } = useContext(Appcontext);
 let nombreUsuarioCorto =''
  if(user[0]){
    nombreUsuarioCorto = user[0].username.slice(0,8)
  }

  const [buttonPopUp , setButtonPopUp] = useState(false);
  return (
    <>
      <div className="header">
        <div className="container-logo">
          <Link className="header__brand-logo" title="" to="">
            <img className="logo" src={logo} alt="Logo San Diego" />          </Link>
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
      
        <div className="container-shopping-cart">
            <div className="name-user">
          {user[0] ? ( <Link to="/" title="Inicio" className="options user-name">
            {nombreUsuarioCorto}    
            </Link> ) : <>
        <button className="btn-login-header" onClick={()=>setButtonPopUp(true)}>   <AiOutlineUser />
            Iniciar Sesión   </button>  
        <PopUpLogin trigger={buttonPopUp} closePopUp={setButtonPopUp} loginEnHeader={true}/>        
            </>}
        </div>
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
