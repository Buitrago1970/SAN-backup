import * as React from "react";
import {  useState,useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import Address from "../components/Address";
import Payment from "../components/Payment";
import FormAddress from "../components/FormAddress.jsx";
import SendDate from "../components/SendDatePicker";
import Appcontext from "../context/Appcontext";

import "./styles/ShoppingList.css";


export default function ShoppingCart() {
  const {state:{user ,cart},setDateSend, sendAdress} = useContext(Appcontext)
  const [sendDateData, setSendDateData] = useState(null);
  const history = useHistory();

  const handleSendDate  = async (valuesAdress) => {
    if (sendDateData) {
      setDateSend(sendDateData);
      // enviar valores a la base de datos
      const respuestaPostAddress = await sendAdress(valuesAdress)

      if(respuestaPostAddress.status === 200){
        console.log('funciono :)');
      // history.push("/carrocompras/payment");
      }else{
        console.log('no funciono :(');
      }
  }
}


  //variable ocultar botones + , - y eliminar
  const hideButtons = true
  return (
    <div className="main-container">
     {cart.length > 0 ? ( <div className="hero-shopping-cart">
       
        <div>
          <Address user={user[0] } cart={cart}  />
          <SendDate user={user[0]}  setSendDateData={setSendDateData}/>
          <FormAddress handleSendDate={handleSendDate}/>
        </div>
        <Payment  PATH={'checkout'} handleSendDate={handleSendDate}/>
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
