import React, { useContext, useState } from "react";

import "./styles/Payment.css";

import { handleSumTotal } from "../utils/index";
import { Link } from "react-router-dom";
import {FaTelegramPlane} from "react-icons/fa"
import Appcontext from "../context/Appcontext";
import PopUpLogin from "../components/PopUpLogin";

export default function Payment({ PATH, handlePaymentMethod,handleSendDateAndSendAddress, hideButton ,btnAnimation, handleSendDate}) {
  const {
    state: { cart, user ,address_info},
  } = useContext(Appcontext);
  
  // set poUp login
  const [buttonPopUp , setButtonPopUp] = useState(false);


  // declarando variables para envio gratuito
  const numEnvioGratis = 50000;
  const valorEnvio = 5000;
  const total = handleSumTotal(cart);
  const totalPedido = total + valorEnvio;

// pasando valores a enteros con coma para despues cambiar por punto
  let valoEnvioPunto = valorEnvio;
  let totalPunto = total;
  let totalPedidoPunto = totalPedido;
  new Intl.NumberFormat().format(valoEnvioPunto, totalPunto, totalPedidoPunto);

  // remplazando por punto
  valoEnvioPunto = valoEnvioPunto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  totalPunto = totalPunto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  totalPedidoPunto = totalPedidoPunto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  let hidenBtnCheckout = "";
  let hidenBtnShoppingCart = "";
  // si path viene de checkout esconder el boton de checkout
  if(PATH === 'checkout' || PATH === 'paymentPage'){
    hidenBtnCheckout += 'hidden'
  }
  if(PATH === 'Shopping-cart' || PATH === 'paymentPage' ){
    hidenBtnShoppingCart += 'hidden'
  }
  return (
    <>
      <div className="payment">
        <div className="container-payment">
          <h3>Resumen de Compra</h3>
          <hr/>
          <div className="container-account">
            <div className="account products-length">
              <p>Productos ({cart.length})</p>
              <p>$ {totalPunto}</p>
            </div>
            <div className="account">
              <p>Envio</p>
             {total >= numEnvioGratis ?  <p className="costo-envio-gratis">Gratis</p> : <p>$ {valoEnvioPunto}</p> }             
            </div>
            <hr />
          </div>
          <div className="total-count">
            <div className="account">
              <p>Total</p>
              {total >= numEnvioGratis ? <p>$ {totalPunto}</p>   : <p className="costo-envio">$ {totalPedidoPunto}</p> }
            </div>
          </div>
          {(PATH === 'checkout' && address_info.address)?
        (
          <button className="btn-payment" onClick={handleSendDate}>{`Proceder al pago 1 (${cart.length} productos)`}</button>
        )  :( 
          <button form='my-form' type="submit" className={`btn-payment ${hidenBtnShoppingCart}`} onClick={handleSendDateAndSendAddress}>{`Proceder al pago 2 (${cart.length} productos)`}</button>
        )
        }
          {/* boton enviar pedido */}
          { (  PATH === 'paymentPage')  ?(
              <button className={ `btn-paymen btn-send-order ${btnAnimation}`} onClick={()=>handlePaymentMethod(total)}> Enviar pedido <FaTelegramPlane/></button>
          ):
          (
           null
          )
          }
          {/* boton  para pasar al checkout*/}
          {(user[0]) ? (
            <Link to={'/carrocompras/checkout'} className={hidenBtnCheckout}>
              <button className="btn-payment" >{`Proceder al pago 3 (${cart.length} productos)`}</button>
            </Link>
          ) :  (
            <>
            {/* boton para logear usuario */}
            {hideButton ? null:(<>
              <button className="button btn-payment" onClick={()=>setButtonPopUp(true)}>Continuar</button>
            <PopUpLogin trigger={buttonPopUp} closePopUp={setButtonPopUp}/>
            </>) }
            </>
            )
          }
        </div>
      </div>
    </>
  );
}
