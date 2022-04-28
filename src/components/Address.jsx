import * as React from "react";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import {useContext} from 'react'
import {getAddress} from '../utils/address'
import Appcontext from "../context/Appcontext";

import "./styles/Address.css";

export default function Address({user, cart }) {
  const {state:{address_info}} = useContext(Appcontext)
  const localStorageAddress = getAddress()
    if(address_info.address || localStorageAddress.address){
    return ( <>
      {
         user &&  cart.length > 0 ? <div className="container-address">
         <div className="title-container">
           <div className="secondary-title">Envío a: {user.username} </div>
         </div>
         <div className="address-contrainer-info">
           <div className="address">
         <GoLocation />
             <div>
              <p className="cart-address-info">{address_info.address?address_info.address : localStorageAddress.address } </p>
               <p className="cart-address-subtitle-info"> Cundinamarca , Bogota D.c{address_info.descriptionHouse ? (` - ${address_info.descriptionHouse}`): localStorageAddress.descriptionHouse}</p>
           </div>
         
         </div>
         <div className="modify-address">
         {<Link to="/carrocompras/modificardireccion" className="modify">Modificar dirección</Link>}
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
