import * as React from 'react'
import { useState, useContext } from 'react';

import PaymentMethods from "../components/PaymentMethods";
import Appcontext from '../context/Appcontext';
import Address from "../components/Address";
import Payment from "../components/Payment";
import ShoppingList from "../components/ShoppingList";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles/PaymentPage.css"
import iconoEfectivo from '../images/icono_billete.svg';
import iconoTarjetaCredito from "../images/icono_tarjeta_credito.svg";
import iconoTarjeDebito from "../images/icono_tarjeta_debito.svg";

export default function PaymentPage() {
  window.scrollTo(0, 0)
  //useHistory
  const history = useHistory();

  let date = new Date();
  const creationDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const numero_pedido = date.getFullYear() +''+ date.getDate() + '' + (date.getMonth()+1) + '' + date.getHours()+''+date.getMinutes() + 'EC' +`${Math.floor(Math.random() * (9999 - 1000) + 1000)}`;
  const hora = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const {state:{user, cart,},sendOrder,getOrder, saveOrder} = useContext(Appcontext)
  // esconder en boton de payment para mostar en boton de enviar pedido
  //estado de los metodos de pago
  const [paymentMethodsData, setPaymentMethodsData] = useState(null)
  // funcion guardar metodo de pago
  const [btnAnimation, setBtnAnimation]  = useState('')


  const handlePaymentMethod =  async (toatalPedido) => {
  if(paymentMethodsData){
    //set animation btn
    setBtnAnimation('onclic')
    //send order to server
    const respuestaPOST = await sendOrder(toatalPedido, paymentMethodsData, creationDate,numero_pedido, hora)
    
    //redireccionar a la pagina de confirmacion
    if(respuestaPOST){
      const respuestaGet = await getOrder(numero_pedido)
      saveOrder(respuestaGet.data.data[0].attributes)
      if(respuestaGet){
        history.push("/success")
            }
    }else{
      alert("error al enviar pedido")
    }
  }else{
      alert("Seleccione un metodo de pago")
    }
  }
  // data metodos de pago tarjeta (credito, debito) efectivo, nequi
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
    {
      id: 4,
      name: "Nequi",
      description: "Paga el pedido con Nequi al momento de recibirlo.",
      image: "https://www.nequi.com.co/wp-content/themes/nequi/img/logo_nequi_header.svg"
    }
  ];
 //variable ocultar botones + , - y eliminar
 const hideButtons = true
      return (
        <div className="main-container">
          {cart.length ? (
                  <div className="hero-shopping-cart">
            <div>
              <Address user={user[0]} cart={cart} />
              <PaymentMethods title={'formas de pago'} data={data_payment_methods} setPaymentMethodsData={setPaymentMethodsData}/>
              <ShoppingList hideButtons={hideButtons}/>

            </div>
              <Payment PATH={'paymentPage'} handlePaymentMethod={handlePaymentMethod} btnAnimation={btnAnimation}/>
          </div>
          
          ) : (
                 <div className="empty-cart-button">
          <h3>🛒Tu carrito está vacío. </h3>{" "}
          <Link className="link-home" to="/">
            Ir al Home
          </Link>
        </div>
            )
            }
    
        </div>
    )
}