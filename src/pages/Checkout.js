import * as React from "react";
import {  useState,useContext } from "react";
import { useHistory } from "react-router-dom";

import Address from "../components/Address";
import ShoppingList from "../components/ShoppingList";
import Payment from "../components/Payment";
import SendDate from "../components/SendDatePicker";
import Appcontext from "../context/Appcontext";
import "./styles/ShoppingList.css";


export default function ShoppingCart() {
  const {state:{user ,cart},setDateSend} = useContext(Appcontext)
  const [sendDateData, setSendDateData] = useState(null);
  const PATH = 'checkout'; 
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
      <div className="hero-shopping-cart">
        <div>
          <Address user={user[0] } cart={cart}  />
          <SendDate user={user[0]}  setSendDateData={setSendDateData}/>
          <ShoppingList hideButtons={hideButtons}/>
        </div>
        <Payment data={"Continuar"} PATH={PATH} handleSendDate={handleSendDate}/>
      </div>
    </div>
  );
}
