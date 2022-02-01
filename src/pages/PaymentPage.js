import * as React from 'react'
import { useContext } from 'react';
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
          <SendDate user={user[0]} />
           
<div className='shopping-list'> 
          <p class="cart-length-title page-payment-title">Formas de pago</p>
          <div className="payment method-container">
             {PAYMENT_METHODS.map(payment => (
          <>
            <div className="payment-method">
              <div className="payment-method-icon">
                <img src={payment.image} alt="Efectivo" />
                </div>
                <div className='payment-method-text'>
             <div className="payment-method-title">
                  <p>{payment.title}</p>
                  </div>
                  <div className="payment-method-description">
                    <p>{payment.description}</p>
                    </div>
                  </div>
                  </div>
         
                </>
            ))}
                </div>
          </div>
                    </div>
          <Payment data={"Proceder al pago"} route={"#"}/>
        </div>
      </div>
    )
}
