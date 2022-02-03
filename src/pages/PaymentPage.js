import * as React from 'react'
import { useState, useContext } from 'react';
import Appcontext from '../context/Appcontext';
import Address from "../components/Address";

import SendDate from "../components/SendDate";

import "./styles/PaymentPage.css"

import iconoEfectivo from "../images/icono_billete.svg"
import iconoTarjetaCredito from "../images/icono_tarjeta_credito.svg"
import iconoTarjeDebito from "../images/icono_tarjeta_debito.svg"

import Payment from "../components/Payment";



export default function PaymentPage() {
  
  const {state:{user}} = useContext(Appcontext)
  // esconder en boton de payment para mostar en boton de enviar pedido
  const [paymentMethod, setPaymentMethod] = useState(true)

    const PAYMENT_METHODS = [
    {
      id: 1,
      title: "Efectivo",
      description: "Paga el pedido en efectivo al momento de recibirlo.",
      image:iconoEfectivo
    },
    {
      id: 2,
      title: "Tarjeta de crédito",
      description: "Paga el pedido con tarjeta de crédito al momento de recibirlo.",
      image: iconoTarjetaCredito},
    {
      id: 3,
      title: "Tarjeta de débito",
      description: "Paga el pedido con tarjeta de débito al momento de recibirlo.",
      image: iconoTarjeDebito
    },
  ];

      return (
        <div className="main-container">
        <div className="hero-shopping-cart">
          <div>
            <Address user={user[0]} />
            stripe
          </div>
                    </div>
          <Payment data={"Proceder al Pago"} route={"/succes"} buttonSendOrder={paymentMethod}/>
        </div>
    )
}
