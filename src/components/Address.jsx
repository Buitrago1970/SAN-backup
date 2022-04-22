import * as React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import {useContext} from 'react'
import Appcontext from "../context/Appcontext";

import "./styles/Address.css";

export default function Address({user, cart }) {
  const {state:{address_info}} = useContext(Appcontext)
  if(address_info.address){
    return ( <>
      {
         user &&  cart.length > 0 ? <div className="container-address">
         <div className="title-container">
           <div className="secondary-title">Envío a</div>
         </div>
         <div className="address-contrainer-info">
           <div className="address">
         <GoLocation />
             <div>
                <p className="cart-address-info">{address_info.address} </p>
               <p className="cart-address-subtitle-info"> Cundinamarca , Bogota D.c{address_info.descriptionHouse && ` - ${address_info.descriptionHouse}`}</p>
           </div>
         
         </div>
         <div className="modify-address">
         {user ? <Link to="/carrocompras/{}/direccion" className="modify">Modificar dirección</Link>: <Link to="/carrocompras/{}/direccion" className="modify">Agregar dirección</Link>}
           </div>
   
       </div> 
       </div> : 
       null
       }
       </>)
  }else{
    return null
  }
}
