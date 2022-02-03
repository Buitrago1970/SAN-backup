import React, { useContext, useState } from "react";
import "./styles/Payment.css";
import { Link } from "react-router-dom";
import axios from "axios";

import Appcontext from "../context/Appcontext";
import { handleSumTotal } from "../utils/index";

import PopUpLogin from "../components/PopUpLogin";

export default function Payment({ data , route, buttonSendOrder }) {
  const {
    state: { cart, user,paymentMethods },
  } = useContext(Appcontext);

  let hiden = "";
  if(buttonSendOrder){
    hiden += 'hidden'
  }

  //send order
  const handleSendOrder = async () => {
    await axios
      .post('http://localhost:1337/api/orders', {
        user: user[0],
        cart: cart,
        amount:30000,
        // amount: handleSumTotal(cart),
        paymentMethod:'sin pago',
        idPayment: 1,
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
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


  return (
    <>
      <div className="payment">
        <div className="container-payment">
          <h3>Resumen de Compra</h3>
          <hr />
          <div className="container-account">
            <div className="account">
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
          { buttonSendOrder ?(
             <Link  onClick={handleSendOrder()}>
              <button className="btn-payment">{data}</button>
            </Link>
          ) : (null)}
          {user[0] ? (
            <Link to={route} className={hiden}>
              <button className="btn-payment">{data}</button>
            </Link>
          ) :  (
            <>
            <button className="button btn-payment" onClick={()=>setButtonPopUp(true)}>{data}</button>
            <PopUpLogin trigger={buttonPopUp} closePopUp={setButtonPopUp}/>
            </>
            )
          }
        </div>
      </div>
    </>
  );
}
