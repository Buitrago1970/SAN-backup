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
  
  const {state:{user}} = useContext(Appcontext)
  // esconder en boton de payment para mostar en boton de enviar pedido
  const [paymentMethod, setPaymentMethod] = useState(true)

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

             <PaymentMethods data={data_payment_methods}/>
          </div>
          <Payment data={"Proceder al Pago"} route={"/succes"} buttonSendOrder={paymentMethod}/>

                    </div>
        </div>
    )
}
