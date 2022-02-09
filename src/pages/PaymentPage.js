import * as React from 'react'
import { useState, useContext, useEffect } from 'react';

import PaymentMethods from "../components/PaymentMethods";
import Appcontext from '../context/Appcontext';
import SendDate from "../components/SendDate";
import Address from "../components/Address";
import Payment from "../components/Payment";
import { useHistory } from "react-router-dom";

import "./styles/PaymentPage.css"
import iconoEfectivo from '../images/icono_billete.svg';
import iconoTarjetaCredito from "../images/icono_tarjeta_credito.svg";
import iconoTarjeDebito from "../images/icono_tarjeta_debito.svg";

export default function PaymentPage() {
  //useHistory
  const history = useHistory();

  let date = new Date();
  const creationDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const {state:{user, cart},sendOrder} = useContext(Appcontext)
  // esconder en boton de payment para mostar en boton de enviar pedido
  const [hideButton, setHideButton] = useState(true)
  //estado de los metodos de pago
  const [paymentMethodsData, setPaymentMethodsData] = useState(null)
  // funcion guardar metodo de pago
  const handlePaymentMethod =  async (toatalPedido) => {
  if(paymentMethodsData){
    // set data for the receipt
    // setDataForReceipt(toatalPedido, paymentMethodsData,creationDate )
    //send order to server
    const respuesta = await sendOrder(toatalPedido, paymentMethodsData, creationDate)
    //redireccionar a la pagina de confirmacion

    if(respuesta){
      history.push("/success")
    }else{
      alert("error al enviar pedido")
    }
  }else{
      alert("Seleccione un metodo de pago")
    }
  }
    const data_payment_methods = [
    {
      id: 1,
      name: "Efectivo",
      description: "Paga el pedido en efectivo al momento de recibirlo.",
      image:iconoEfectivo
    },
    {
      id: 2,
      name: "Tarjeta de crédito",
      description: "Paga el pedido con tarjeta de crédito al momento de recibirlo.",
      image: iconoTarjetaCredito},
    {
      id: 3,
      name: "Tarjeta de débito",
      description: "Paga el pedido con tarjeta de débito al momento de recibirlo.",
      image: iconoTarjeDebito
    },
  ];
      return (
        <div className="main-container">
          <div className="hero-shopping-cart">
            <div>
              <Address user={user[0]} cart={cart} />
              <SendDate user={user[0]} />
              <PaymentMethods data={data_payment_methods} setPaymentMethodsData={setPaymentMethodsData}/>
            </div>
              <Payment data={"Proceder al Pago"} route={"/succes"} buttonSendOrder={hideButton} handlePaymentMethod={handlePaymentMethod}/>
          </div>
        </div>
    )
}