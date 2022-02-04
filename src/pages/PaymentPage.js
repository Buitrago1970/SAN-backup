import * as React from 'react'
import { useState, useContext } from 'react';
import Appcontext from '../context/Appcontext';
import Address from "../components/Address";

import SendDate from "../components/SendDate";
import PaymentMethods from "../components/PaymentMethods";

import "./styles/PaymentPage.css"


import Payment from "../components/Payment";

import iconoEfectivo from '../images/icono_billete.svg';
import iconoTarjetaCredito from "../images/icono_tarjeta_credito.svg";
import iconoTarjeDebito from "../images/icono_tarjeta_debito.svg";
export default function PaymentPage() {
  
  const {state:{user, setPaymentMethod}} = useContext(Appcontext)
  // esconder en boton de payment para mostar en boton de enviar pedido
  const [hideButton, setHideButton] = useState(true)
  //estado de los metodos de pago
  const [paymentMethodsData, setPaymentMethodsData] = useState()
  // funcion guardar metodo de pago
  const handlePaymentMethod = () => {
  if(paymentMethodsData){
    setPaymentMethod(paymentMethodsData)
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
            <Address user={user[0]} />
           <SendDate user={user[0]} />
             <PaymentMethods data={data_payment_methods} setPaymentMethodsData={setPaymentMethodsData}/>
          </div>
          <Payment data={"Proceder al Pago"} route={"/succes"} buttonSendOrder={hideButton} handlePaymentMethod={handlePaymentMethod}/>

                    </div>
        </div>
    )
}
