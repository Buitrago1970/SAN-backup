import React, { useContext } from "react";
import "./styles/Payment.css";
import { Link } from "react-router-dom";

import Appcontext from "../context/Appcontext";
import { handleSumTotal } from "../utils/index";

export default function Payment({ data, route }) {
  const {
    state: { cart, buyer },
  } = useContext(Appcontext);

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
          {buyer[0] ? (
            <Link to={'/carrocompras/{}/checkout'}>
              <button className="btn-payment">Continuar</button>
            </Link>
          ) : (
          <Link to={route}>
            {data && <button className="button btn-payment">{data}</button>}
          </Link>)
          }
        </div>
      </div>
    </>
  );
}
