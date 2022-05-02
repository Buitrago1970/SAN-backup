import * as React from "react";
import {  useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import Address from "../components/Address";
import Payment from "../components/Payment";
import FormAddress from "../components/FormAddress.jsx";
import ShoppingList from "../components/ShoppingList";
import SendDate from "../components/SendDatePicker";
import Appcontext from "../context/Appcontext";

import { getAddress} from "../utils/address"
import "./styles/ShoppingList.css";


export default function ShoppingCart() {
  const {state:{user ,cart, address_info},setDateSend, sendAdress} = useContext(Appcontext)
  const [sendDateData, setSendDateData] = useState(null);
  const localStorageAddress = getAddress()
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handleSendDateAndSendAddress  = async (valuesAdress) => {
    if (sendDateData) {
      setDateSend(sendDateData);
      // enviar valores a la base de datos
      await sendAdress(valuesAdress)
      }else{
        Swal.fire(
          'Seleciona una fecha de envio',
          '',
          'info'
        )
      }
}
  return (
    <div className="main-container">
     {cart.length > 0 ? ( <div className="hero-shopping-cart">
        <div>
          <Address user={user[0] } cart={cart}  />
          <SendDate user={user[0]}  setSendDateData={setSendDateData} />
          {(!address_info.address && !localStorageAddress.address) ? <FormAddress handleSendDateAndSendAddress={handleSendDateAndSendAddress}localStorageAddress={localStorageAddress}/>
          : <ShoppingList />
          }
        </div>
        <Payment  PATH={'checkout'} handleSendDateAndSendAddress={handleSendDateAndSendAddress} />
      </div>) :
      (<div className="empty-cart-button">
          <h3>🛒Tu carrito está vacío. </h3>{" "}
          <Link className="link-home" to="/">
            Ir al Home
          </Link>
        </div>)
        }
    </div>
  );
}
