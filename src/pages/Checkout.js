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
  window.scrollTo(0, 0)


  const {state:{user ,cart},setDateSend} = useContext(Appcontext)
  const [sendDateData, setSendDateData] = useState(null);
  const history = useHistory();

  const handleSendDate = () => {
    if (sendDateData) {
      setDateSend(sendDateData);
      history.push("/carrocompras/payment");
    }else{
      alert("Porfavor seleciona una fecha de envio")
    }
  };


  //variable ocultar botones + , - y eliminar
  const hideButtons = true
  return (
    <div className="main-container">
     {cart.length > 0 ? ( <div className="hero-shopping-cart">
       
        <div>
          <Address user={user[0] } cart={cart}  />
          <SendDate user={user[0]}  setSendDateData={setSendDateData}/>
          <FormAddress/>
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
