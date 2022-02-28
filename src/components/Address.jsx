import * as React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import "./styles/Address.css";

export default function Address({user, cart }) {
  return (
    <>
   {
      user &&  cart.length > 0 ? <div className="container-address">
      <div className="title-container">
        <div className="secondary-title">Opciones de envío a</div>
      </div>
      <div className="address-contrainer-info">
        <div className="address">
      <GoLocation />
          <div>
             <p className="cart-address-info">{user.direccional} </p>
            <p className="cart-address-subtitle-info"> {user.localidad}, Bogota D.c - {user.descripcionCasa && user.descripcionCasa}</p>
        </div>
        <div className="modify-address">
        </div>
      </div>
      {user ? <Link to="/carrocompras/{}/direccion" className="modify">Modificar dirección</Link>: <Link to="/carrocompras/{}/direccion" className="modify">Agregar dirección</Link>}

    </div> 
    </div> : 
    null
    }
    </>
  );
}
