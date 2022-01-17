import * as React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import "./styles/Address.css";

export default function Address({buyer}) {
  return (
    <>
   {
      buyer && <div className="container-address">
      <div className="title-container">
        <div className="secondary-title">Opciones de envío a</div>
      </div>
      <div className="address-contrainer-info">
        <div className="address">
      <GoLocation />
          <div>
             <p className="cart-address-info">{buyer.address} </p>
            <p className="cart-address-subtitle-info"> { buyer.neighborhood} - {buyer.locality}, Bogota D.c - {buyer.descriptionHouse && buyer.descriptionHouse}</p>
        </div>
        <div className="modify-address">
        </div>
      </div>
      {buyer ? <Link to="/carrocompras/{}/direccion" className="modify">Modificar dirección</Link>: <Link to="/carrocompras/{}/direccion" className="modify">Agregar dirección</Link>}

    </div> 
    </div>
    }
    </>
  );
}
