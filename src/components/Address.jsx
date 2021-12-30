import * as React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import "./styles/Address.css";

export default function Address({buyer}) {
  return (
    <>
     <div className="container-address">
        <div className="title-container">
          <div className="secondary-title">Opciones de envío a</div>
        </div>
        <div className="address-contrainer-info">
          <div className="address">
            
            {buyer && <><GoLocation /><p className="cart-address-info">{buyer.address}</p>
              <p className="cart-address-subtitle-info">{buyer.descriptionHouse && buyer.descriptionHouse} - { buyer.neighborhood} - {buyer.locality}, Bogota D.c
            </p></>}
          </div>
          <div className="modify-address">
            {buyer ? <Link to="/carrocompras/{}/direccion" className="modify">Modificar dirección</Link>: <Link to="/carrocompras/{}/direccion" className="modify">Agregar dirección</Link>}
          </div>
        </div>
      </div> 
      
    </>
  );
}
